import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Gravity Forms Endpoint
const GF_NEWSLETTER_URL =
  process.env.GRAVITY_FORMS_NEWSLETTER_URL ||
  'https://cms.empowayouth.co.za/wp-json/gf/v2/forms/45/submissions';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Map fields according to specification:
    // Form ID: 45
    // Name ID: 1 -> input_1
    // Email Address ID: 3 -> input_3
    // What updates are you most interested in? ID: 4 -> input_4
    const name = (body.input_1 ?? body.fullName ?? body.name ?? '').trim();
    const email = (body.input_3 ?? body.email ?? '').trim();
    const rawUpdates = body.input_4 ?? body.topics ?? body.updates ?? '';
    const updates = Array.isArray(rawUpdates) ? rawUpdates.join(', ') : String(rawUpdates).trim();

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email address is required.' },
        { status: 400 }
      );
    }

    const payload: Record<string, string> = {
      input_1: name,
      input_3: email,
      input_4: updates,
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

    const urlObj = new URL(GF_NEWSLETTER_URL);
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
          'Thank you for subscribing. Look out for opportunity drops, summit announcements, and stories of youth transformation.',
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
    console.error('Gravity Forms Newsletter Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Server error while submitting to Gravity Forms.',
      },
      { status: 500 }
    );
  }
}
