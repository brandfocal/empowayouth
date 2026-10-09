import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Gravity Forms Endpoint
const GF_PARTNERSHIP_URL =
  process.env.GRAVITY_FORMS_PARTNERSHIP_URL ||
  process.env.GRAVITY_FORMS_PARTNER_URL ||
  'https://cms.empowayouth.co.za/wp-json/gf/v2/forms/48/submissions';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Map fields according to specification:
    // Form ID: 48 (Partnership Enquiry form)
    // Full Name ID: 1 -> input_1
    // Job Title ID: 3 -> input_3
    // Company / Organisation Name ID: 4 -> input_4
    // Corporate Email Address ID: 5 -> input_5
    // Contact Phone Number ID: 6 -> input_6
    // Select Strategic Mandate Alignment ID: 7 -> input_7
    // Preferred Intervention Vehicle ID: 8 -> input_8
    // Tell us about your organisation's vision for youth economic inclusion ID: 9 -> input_9
    const name = (body.input_1 ?? body.fullName ?? body.name ?? '').trim();
    const jobTitle = (body.input_3 ?? body.jobTitle ?? body.title ?? '').trim();
    const company = (body.input_4 ?? body.company ?? body.organisation ?? body.organization ?? '').trim();
    const email = (body.input_5 ?? body.email ?? '').trim();
    const phone = (body.input_6 ?? body.phone ?? body.phoneNumber ?? '').trim();

    const rawMandate = body.input_7 ?? body.mandates ?? body.mandate ?? '';
    const mandate = Array.isArray(rawMandate)
      ? rawMandate.join(', ')
      : String(rawMandate).trim();

    const intervention = (body.input_8 ?? body.intervention ?? body.interventionVehicle ?? '').trim();
    const vision = (body.input_9 ?? body.vision ?? body.message ?? '').trim();

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Corporate email address is required.' },
        { status: 400 }
      );
    }

    const payload: Record<string, string> = {
      input_1: name,
      input_3: jobTitle,
      input_4: company,
      input_5: email,
      input_6: phone,
      input_7: mandate,
      input_8: intervention,
      input_9: vision,
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

    const urlObj = new URL(GF_PARTNERSHIP_URL);
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
          'Thank you. Our corporate partnerships executive team will be in touch within 48 hours.',
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
    console.error('Gravity Forms Partnership Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Server error while submitting partnership enquiry to Gravity Forms.',
      },
      { status: 500 }
    );
  }
}
