import nodemailer from 'nodemailer';

export const sendContactEmail = async (formData) => {
 const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Port 587 bắt buộc false
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
    minVersion: "TLSv1.2" // Ép dùng phiên bản TLS bảo mật chuẩn
  },
  connectionTimeout: 20000, // Tăng thời gian chờ lên 20 giây
  greetingTimeout: 20000,
  socketTimeout: 20000,
});
  
  const mailOptions = {
    from: formData.email,
    to: process.env.EMAIL_USER,
    subject: `Tin nhắn mới từ Portfolio: ${formData.name}`,
    text: `Người gửi: ${formData.name}\nEmail: ${formData.email}\nTin nhắn: ${formData.message}`,
  };

  return transporter.sendMail(mailOptions);
};
