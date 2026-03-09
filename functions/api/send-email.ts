export async function onRequestPost(context: any) {
  try {
    // context.request contains the incoming Request
    // context.env contains your environment variables
    const { request, env } = context;
    const body = (await request.json()) as any;
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Call Resend API directly (Edge compatible)
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'assengen@emich.edu', // Remember to change if you verify your domain
        reply_to: email, // Use reply_to for Resend API direct call
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Message from ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      })
    });

    const data = await resendResponse.json();

    if (!resendResponse.ok) {
      return new Response(JSON.stringify({ error: data }), {
        status: resendResponse.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
