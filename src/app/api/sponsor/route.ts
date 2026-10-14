import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Gravity Forms Endpoint for Sponsorship & Funding (Form ID: 49)
const GF_SPONSOR_URL =
  process.env.GRAVITY_FORMS_SPONSOR_URL ||
  process.env.GRAVITY_FORMS_SPONSORSHIP_URL ||
  'https://cms.empowayouth.co.za/wp-json/gf/v2/forms/49/submissions';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Field mapping according to specification:
    // Form ID: 49 (Sponsorship & Funding form)
    // Corporate / Funding Entity ID: 1 -> input_1
    // Executive Contact Person ID: 3 -> input_3
    // Executive Email ID: 4 -> input_4
    // Mobile / Direct Phone ID: 5 -> input_5
    // Strategic Funding Track ID: 6 -> input_6
    // Indicative Budget Allocation ID: 7 -> input_7
    // Specific Mandates or Strategic Objectives ID: 9 -> input_9
    const entity = (body.input_1 ?? body.orgName ?? body.company ?? body.corporateEntity ?? '').trim();
    const contactPerson = (body.input_3 ?? body.contactName ?? body.fullName ?? body.name ?? '').trim();
    const email = (body.input_4 ?? body.email ?? body.corporateEmail ?? '').trim();
    const phone = (body.input_5 ?? body.phone ?? body.mobilePhone ?? '').trim();
    const fundingTrack = (body.input_6 ?? body.fundingTrack ?? body.track ?? '').trim();
    const budget = (body.input_7 ?? body.budgetRange ?? body.budget ?? '').trim();
    const objectives = (body.input_9 ?? body.message ?? body.mandates ?? body.objectives ?? '').trim();

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Executive email address is required.' },
        { status: 400 }
      );
    }

    const payload: Record<string, string> = {
      input_1: entity,
      input_3: contactPerson,
      input_4: email,
      input_5: phone,
      input_6: fundingTrack,
      input_7: budget,
      input_9: objectives,
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

    const urlObj = new URL(GF_SPONSOR_URL);
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
          'Thank you. Your sponsorship inquiry has been received and the executive team will contact you shortly.',
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
    console.error('Gravity Forms Sponsorship Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Server error while submitting sponsorship enquiry to Gravity Forms.',
      },
      { status: 500 }
    );
  }
}
