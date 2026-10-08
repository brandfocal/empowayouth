import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Gravity Forms Endpoint
const GF_VOLUNTEER_URL =
  process.env.GRAVITY_FORMS_VOLUNTEER_URL ||
  'https://cms.empowayouth.co.za/wp-json/gf/v2/forms/46/submissions';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Map fields according to specification:
    // Form ID: 46 (Volunteer Sign up form)
    // Full Name ID: 1 -> input_1
    // Email Address ID: 3 -> input_3
    // WhatsApp / Phone ID: 4 -> input_4
    // Township / City ID: 5 -> input_5
    // Areas of Interest ID: 6 -> input_6
    // Availability ID: 7 -> input_7
    // Why do you want to volunteer? ID: 8 -> input_8
    const name = (body.input_1 ?? body.fullName ?? body.name ?? '').trim();
    const email = (body.input_3 ?? body.email ?? '').trim();
    const phone = (body.input_4 ?? body.phone ?? body.whatsapp ?? '').trim();
    const location = (body.input_5 ?? body.location ?? body.city ?? body.township ?? '').trim();

    const rawInterests = body.input_6 ?? body.interests ?? '';
    const interests = Array.isArray(rawInterests)
      ? rawInterests.join(', ')
      : String(rawInterests).trim();

    const availability = (body.input_7 ?? body.availability ?? '').trim();
    const notes = (body.input_8 ?? body.notes ?? body.whyVolunteer ?? body.reason ?? '').trim();

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email address is required.' },
        { status: 400 }
      );
    }

    const payload: Record<string, string> = {
      input_1: name,
      input_3: email,
      input_4: phone,
      input_5: location,
      input_6: interests,
      input_7: availability,
      input_8: notes,
    };

    const consumerKey = (
      process.env.GF_CONSUMER_KEY ||
      process.env.GRAVITY_FORMS_CONSUMER_KEY ||
      ''
    ).trim();
    const consumerSecret = (
      process.env.GF_CONSUMER_SECRET ||
      process.env.GRAVITY_FORMS_CONSUMER_SECRET ||
      ''
    ).trim();

    const urlObj = new URL(GF_VOLUNTEER_URL);
    if (consumerKey && consumerSecret && !urlObj.searchParams.has('consumer_key')) {
      urlObj.searchParams.set('consumer_key', consumerKey);
      urlObj.searchParams.set('consumer_secret', consumerSecret);
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': 'EmpowaYouth-NextJS-Client/1.0',
    };

    if (consumerKey && consumerSecret) {
      const token = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
      headers['Authorization'] = `Basic ${token}`;
    }

    const gfResponse = await fetch(urlObj.toString(), {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    const responseText = await gfResponse.text();
    let data: any = {};
    try {
      data = JSON.parse(responseText);
    } catch {
      data = { raw: responseText };
    }

    if (gfResponse.ok && data.is_valid !== false) {
      return NextResponse.json({
        success: true,
        message:
          data.confirmation_message ||
          'Thank you for signing up to volunteer! Our coordinator will connect with you soon.',
        data,
      });
    }

    let validationMsg = data.validation_messages
      ? Object.values(data.validation_messages).join(', ')
      : data.message || 'Form validation failed.';

    if (data.code === 'rest_no_route' || String(validationMsg).includes('No route was found')) {
      validationMsg =
        'Gravity Forms REST API is not currently active on cms.empowayouth.co.za. Please ensure the REST API is enabled in WordPress Admin (Forms > Settings > REST API).';
    }

    return NextResponse.json(
      {
        success: false,
        error: validationMsg,
        details: data,
      },
      { status: gfResponse.status || 400 }
    );
  } catch (error: any) {
    console.error('Gravity Forms Volunteer Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Server error while submitting volunteer form to Gravity Forms.',
      },
      { status: 500 }
    );
  }
}
