import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create a transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // generated ethereal user
    pass: process.env.EMAIL_PASS, // generated ethereal password
  },
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

// Function to send an email
export const sendEmail = async (to: string, subject: string, text: string) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
