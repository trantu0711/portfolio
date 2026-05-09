import { Resend } from 'resend';

// Khởi tạo Resend với API Key từ biến môi trường
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async (formData) => {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Đây là email mặc định của Resend cho tài khoản miễn phí
      to: 'trantu7112003@gmail.com', // Email nhận của Tú
      subject: `Tin nhắn mới từ Portfolio: ${formData.name}`,
      html: `
        <h3>Bạn có tin nhắn mới từ Portfolio!</h3>
        <p><strong>Người gửi:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Nội dung:</strong> ${formData.message}</p>
      `,
    });
    return { success: true, data };
  } catch (error) {
    console.error("Lỗi Resend:", error);
    throw error;
  }
};