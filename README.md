# 🚀 Minh Tú - Personal Portfolio

Dự án Portfolio cá nhân được xây dựng với mục tiêu giới thiệu kỹ năng, dự án và kinh nghiệm của mình đến các nhà tuyển dụng. Trang web được tối ưu hóa về hiệu suất, giao diện hiện đại và hỗ trợ đa ngôn ngữ.

## ✨ Tính năng nổi bật
*   **Đa ngôn ngữ (i18n):** Hỗ trợ chuyển đổi mượt mà giữa Tiếng Việt và Tiếng Anh.
*   **Dark/Light Mode:** Giao diện thích ứng với tùy chọn hệ thống hoặc người dùng.
*   **Contact Form:** Tích hợp gửi email trực tiếp qua Backend Node.js.
*   **Responsive Design:** Hiển thị hoàn hảo trên mọi thiết bị (Mobile, Tablet, Desktop).
*   **Custom Hooks:** Tách biệt logic API và UI giúp mã nguồn sạch sẽ, dễ bảo trì.

## 🛠 Công nghệ sử dụng
*   **Frontend:** ReactJS, Tailwind CSS, Framer Motion.
*   **Icon & UI:** Lucide React, Boxicons.
*   **Quản lý trạng thái:** React Hooks, Context API.
*   **Thư viện hỗ trợ:** Axios, i18next, React Hot Toast.

## 📦 Cài đặt dự án
1. Clone dự án:
   ```bash
   git clone https://github.com/trantu0711/portfolio.git

Cài đặt thư viện
npm install
Chạy dự án ở môi trường local:
   
   npm run dev

## 2. README cho Backend (Mail Service)
Tạo file `README.md` trong thư mục `be-portfolio/`:


# 🛠 Portfolio Backend Service

Hệ thống Backend chuyên trách việc xử lý logic gửi email thông báo từ form liên hệ của trang Portfolio.

## ⚙️ Chức năng chính
*   **API Endpoint:** Cung cấp API POST `/api/contact` để nhận dữ liệu từ Frontend.
*   **Nodemailer Integration:** Kết nối với Gmail SMTP để gửi mail tự động.
*   **Security:** Sử dụng biến môi trường (`.env`) để bảo mật thông tin tài khoản.
*   **CORS:** Cấu hình cho phép Frontend truy cập tài nguyên an toàn.

## 🧱 Cấu trúc dự án (MVC Pattern)
*   `src/index.js`: Điểm vào của ứng dụng.
*   `src/controllers/`: Xử lý điều phối yêu cầu và phản hồi API.
*   `src/services/`: Chứa logic nghiệp vụ gửi email.
*   `src/routes/`: Định nghĩa các luồng API.

## 🚀 Hướng dẫn khởi chạy
1. Cài đặt các gói phụ thuộc: `npm install`.
2. Tạo file `.env` và cấu hình các biến:
   
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   PORT=5000

Chạy server
npm run dev

## 👨‍💻 Tác giả
**Trần Minh Tú** - *Newly graduated IT Student seeking Internship in Ho Chi Minh City.*
