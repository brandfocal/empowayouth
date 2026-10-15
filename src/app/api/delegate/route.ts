import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Gravity Forms Endpoint for EmpowaYouth Week Vaal 2027 (Form ID: 51)
const GF_DELEGATE_URL =
  process.env.GRAVITY_FORMS_VAAL_DELEGATE_URL ||
  process.env.GRAVITY_FORMS_DELEGATE_URL ||
  'https://cms.empowayouth.co.za/wp-json/gf/v2/forms/51/submissions';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Field mapping according to Gravity Forms Form ID: 51
    // First Name ID: 1 -> input_1
    // Last Name ID: 3 -> input_3
    // Age ID: 4 -> input_4
    // Township of Residence ID: 5 -> input_5
    // Email Address ID: 6 -> input_6
    // Mobile Number ID: 7 -> input_7
    // Gender ID: 8 -> input_8
    // Are you an entrepreneur? ID: 9 -> input_9
    // Is your company registered? ID: 10 -> input_10
    // Which industry tracks interest you? ID: 11 -> input_11
    // Why do you want to attend? ID: 12 -> input_12

    const firstName = (body.input_1 ?? body.firstName ?? '').trim();
    const lastName = (body.input_3 ?? body.lastName ?? '').trim();
    const age = String(body.input_4 ?? body.age ?? '').trim();
    const township = (body.input_5 ?? body.township ?? body.townshipOfResidence ?? '').trim();
    const email = (body.input_6 ?? body.email ?? body.emailAddress ?? '').trim();
    const phone = (body.input_7 ?? body.phone ?? body.mobileNumber ?? '').trim();
    
    // Normalize gender
    let gender = (body.input_8 ?? body.gender ?? '').trim();
    if (gender.toUpperCase() === 'FEMALE') gender = 'Female';
    else if (gender.toUpperCase() === 'MALE') gender = 'Male';
    else if (gender.toUpperCase() === 'NON_BINARY') gender = 'Non-Binary / Prefer not to say';

    // Normalize entrepreneur
    let isEntrepreneur = (body.input_9 ?? body.isEntrepreneur ?? '').trim();
    if (isEntrepreneur.toUpperCase() === 'YES') isEntrepreneur = 'Yes';
    else if (isEntrepreneur.toUpperCase() === 'NO') isEntrepreneur = 'No';

    // Normalize company registered
    let isRegistered = (body.input_10 ?? body.isRegistered ?? '').trim();
    if (isRegistered.toUpperCase() === 'YES') isRegistered = 'Yes';
    else if (isRegistered.toUpperCase() === 'NO') isRegistered = 'No';

    // Industry tracks
    const rawIndustries = body.input_11 ?? body.industries ?? body.industryTracks ?? '';
    const industries = Array.isArray(rawIndustries)
      ? rawIndustries.join(', ')
      : String(rawIndustries).trim();

    // Motivation / Why do you want to attend?
    const motivation = (body.input_12 ?? body.motivation ?? body.whyAttend ?? '').trim();

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email address is required.' },
        { status: 400 }
      );
    }

    if (!firstName || !lastName) {
      return NextResponse.json(
        { success: false, error: 'First name and last name are required.' },
        { status: 400 }
      );
    }

    const payload: Record<string, string> = {
      input_1: firstName,
      input_3: lastName,
      input_4: age,
      input_5: township,
      input_6: email,
      input_7: phone,
      input_8: gender,
      input_9: isEntrepreneur,
      input_10: isRegistered,
      input_11: industries,
      input_12: motivation,
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

    const urlObj = new URL(GF_DELEGATE_URL);
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
          "You're in for a dope week of EmpowaYouth in Sebokeng, Vaal! We'll be lit from May 3rd to 7th. Get ready for some serious vibes, kasi-style. See you there, sharp sharp!\n\nGet Ready to be Inspired, Connected and Transformed!\n\nEmpowaYouth Team",
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
    console.error('Gravity Forms Vaal Delegate Registration Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Server error while submitting registration to Gravity Forms.',
      },
      { status: 500 }
    );
  }
}
