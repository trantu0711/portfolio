import nodemailer from 'nodemailer';

export const sendContactEmail = async (formData) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587, 
    secure: false, 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false // Giúp tránh lỗi kết nối trên một số server
    }
  });

  const mailOptions = {
    from: formData.email,
    to: process.env.EMAIL_USER,
    subject: `Tin nhắn mới từ Portfolio: ${formData.name}`,
    text: `Người gửi: ${formData.name}\nEmail: ${formData.email}\nTin nhắn: ${formData.message}`,
  };

  return transporter.sendMail(mailOptions);
};
