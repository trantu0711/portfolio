# 🚀 Minh Tú - Personal Portfolio (Fullstack Project)

Dự án Portfolio cá nhân được xây dựng để giới thiệu kỹ năng, dự án và kinh nghiệm đến nhà tuyển dụng. Hệ thống được thiết kế theo kiến trúc Fullstack hiện đại, tối ưu hóa hiệu suất và khả năng mở rộng.

## ✨ Tính năng nổi bật
*   **Đa ngôn ngữ (i18n)**: Chuyển đổi mượt mà giữa Tiếng Việt và Tiếng Anh.
*   **Dark/Light Mode**: Giao diện thích ứng với tùy chọn hệ thống hoặc người dùng.
*   **Contact Form**: Tích hợp gửi email trực tiếp qua Backend Node.js sử dụng **Resend API**.
*   **Responsive Design**: Hiển thị hoàn hảo trên mọi thiết bị (Mobile, Tablet, Desktop).
*   **Performance**: Tối ưu hóa tốc độ load trang và hiệu ứng mượt mà với Framer Motion.

## 🛠 Công nghệ sử dụng

### Frontend
*   **Core**: ReactJS, Tailwind CSS, Framer Motion.
*   **State Management**: React Hooks, Context API.
*   **Thư viện**: Axios, i18next, React Hot Toast.

### Backend
*   **Core**: Node.js, Express.
*   **Email Service**: **Resend SDK** (Giải pháp thay thế SMTP để đảm bảo 100% tỷ lệ gửi mail thành công trên Cloud).
*   **Security**: Cấu hình CORS và bảo mật biến môi trường.

## 🧱 Cấu trúc thư mục
*   `/frontend`: Mã nguồn giao diện ReactJS.
*   `/be-portfolio`: Mã nguồn API xử lý Logic gửi mail.

## 📦 Cài đặt & Khởi chạy

### 1. Clone dự án
```bash
git clone [https://github.com/trantu0711/portfolio.git](https://github.com/trantu0711/portfolio.git).
```
### 2. Cấu hình Backend (.env), contact.jsx
Tạo file .env trong thư mục be-portfolio/:
Vào resend đăng ký tài khoản và lấy API key
Đoạn mã
RESEND_API_KEY=re_your_api_key_here
PORT=10000

Đổi đường dẫn API trong contact.jsx thành đường dẫn chạy BE của bạn

### 3. Khởi chạy
Frontend: cd frontend && npm install && npm run dev.

Backend: cd be-portfolio && npm install && node src/index.js.

🚀 Deployment
Frontend: Được deploy trên Vercel.

Backend: Được deploy trên Render.

👨‍💻 Tác giả
Trần Minh Tú - Sinh viên IT mới tốt nghiệp (Chuyên ngành Fullstack Development) đang tìm kiếm cơ hội thực tập/Junior tại TP.HCM.
