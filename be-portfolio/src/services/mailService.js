import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendContactEmail = async (formData) => {
  const { name, email, message } = formData;

  const mailOptions = {
    from: `"${name}" <${email}>`, // Hiển thị tên người gửi
    to: process.env.EMAIL_USER,    // Gửi về chính mail của Tú
    subject: `📩 Liên hệ mới từ: ${name}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
        <h2 style="color: #2563eb;">Bạn có tin nhắn mới từ Portfolio</h2>
        <p><strong>Người gửi:</strong> ${name}</p>
        <p><strong>Email liên hệ:</strong> ${email}</p>
        <p><strong>Nội dung:</strong></p>
        <div style="background: #f9fafb; padding: 15px; border-radius: 8px;">
          ${message}
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};