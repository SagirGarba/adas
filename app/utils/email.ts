import nodemailer from 'nodemailer';

type EmailData = {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  investmentRange: string;
  experience: string;
  message: string;
};

export async function sendEmail(data: EmailData) {
  // Create reusable transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  // Format the email content
  const formattedMessage = `
    <h2>New Partnership Application</h2>
    <p><strong>Name:</strong> ${data.fullName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Business Name:</strong> ${data.businessName}</p>
    <p><strong>Business Type:</strong> ${data.businessType}</p>
    <p><strong>Investment Range:</strong> ${data.investmentRange}</p>
    <p><strong>Experience:</strong> ${data.experience || 'Not provided'}</p>
    <p><strong>Message:</strong> ${data.message || 'Not provided'}</p>
  `;

  // Send mail with defined transport object
  await transporter.sendMail({
    from: `"Agribusiness Partnership" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO, // Your receiving email address
    subject: 'New Partnership Application Submission',
    html: formattedMessage,
  });
}