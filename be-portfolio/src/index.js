import express from 'express';
import cors from 'cors';
import { sendContactEmail } from './services/mailService.js';

const app = express();
app.use(cors());
app.use(express.json());

// API nhận yêu cầu từ Form Contact
app.post('/api/contact', async (req, res) => {
  try {
    await sendContactEmail(req.body);
    res.status(200).json({ success: true, message: "Gửi mail thành công!" });
  } catch (error) {
    console.error("Lỗi gửi mail:", error);
    res.status(500).json({ success: false, message: "Không thể gửi mail lúc này." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server chạy tại: http://localhost:${PORT}`));