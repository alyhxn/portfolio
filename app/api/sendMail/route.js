import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., 'gmail'
      auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
      }
  });

  const mailOptions = {
      to: process.env.EMAIL_USER,
      subject: `Contact form submission from ${name}`,
      text: message + '\n\n Sender Email: ' + email
  };

  try {
      await transporter.sendMail(mailOptions);
      return Response.json({ message: 'Email sent successfully' });
  } catch (error) {
      return new Response('Error sending email', {
        status: 500
      })
  }
}