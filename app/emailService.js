import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (to, subject, htmlContent) => {
  const msg = {
    to,
    from: 'your-email@example.com', // Use the email address or domain you verified with SendGrid
    subject,
    html: htmlContent,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export const logEmail = (to, subject) => {
  // Implement logging logic here
  console.log(`Email sent to ${to} with subject: ${subject}`);
};

export const optIn = (userId) => {
  // Implement opt-in logic here
  console.log(`User ${userId} opted in for emails.`);
};

export const optOut = (userId) => {
  // Implement opt-out logic here
  console.log(`User ${userId} opted out of emails.`);
};
