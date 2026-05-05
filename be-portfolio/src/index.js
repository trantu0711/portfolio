import express from 'express';
import cors from 'cors';
import { sendContactEmail } from './services/mailService.js';

const app = express();

// 1. Cấu hình CORS: Chỉ cho phép link Vercel của bạn truy cập
app.use(cors({
  origin: 'https://minhtu-portfolio-0711.vercel.app',
  methods: ['POST'],
  credentials: true
}));

app.use(express.json());

// API nhận yêu cầu từ Form Contact
app.post('/api/contact', async (req, res) => {
  try {
    // Gọi service gửi mail với dữ liệu từ body
    await sendContactEmail(req.body);
    res.status(200).json({ success: true, message: "Gửi mail thành công!" });
  } catch (error) {
    console.error("Lỗi gửi mail tại server:", error);
    res.status(500).json({ success: false, message: "Không thể gửi mail lúc này." });
  }
});

// 2. Cấu hình Port linh hoạt cho Render
// Render sẽ tự động gán cổng qua biến process.env.PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend Portfolio đang chạy tại cổng: ${PORT}`);
});
