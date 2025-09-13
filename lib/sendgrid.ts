import { MailService } from '@sendgrid/mail';

// SendGrid email service - using code from blueprint:javascript_sendgrid
if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY not set - email sending will be disabled");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactFormEmail(
  contactData: ContactFormData
): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('SendGrid not configured - contact form email would be sent to:', contactData.email);
    return true; // Return true for development when email is not configured
  }

  try {
    const emailParams: EmailParams = {
      to: 'mridulgoyal03@gmail.com', // Portfolio owner's email
      from: 'noreply@mridulgoyal.dev', // Use verified sender domain
      subject: `Portfolio Contact: ${contactData.subject}`,
      text: `
New contact form submission:

Name: ${contactData.name}
Email: ${contactData.email}
Subject: ${contactData.subject}

Message:
${contactData.message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${contactData.name}</p>
<p><strong>Email:</strong> ${contactData.email}</p>
<p><strong>Subject:</strong> ${contactData.subject}</p>
<h3>Message:</h3>
<p style="white-space: pre-wrap;">${contactData.message}</p>
      `,
    };

    await mailService.send({
      to: emailParams.to,
      from: emailParams.from,
      subject: emailParams.subject,
      text: emailParams.text || '',
      html: emailParams.html || '',
    });
    console.log(`Contact form email sent successfully for: ${contactData.name} (${contactData.email})`);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export async function sendEmail(
  params: EmailParams
): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('SendGrid not configured - email would be sent');
    return true;
  }

  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}