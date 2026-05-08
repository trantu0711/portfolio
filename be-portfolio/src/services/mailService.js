import nodemailer from 'nodemailer';

export const sendContactEmail = async (formData) => {
 const transporter = nodemailer.createTransport({
  // Thay 'smtp.gmail.com' bằng IP trực tiếp của Google để ép dùng IPv4
  host: '74.125.200.108', 
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
    servername: 'smtp.gmail.com' // Phải có dòng này khi dùng IP làm host
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
