import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Import backend
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Sử dụng plugin để tải file JSON từ URL/public
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "vi",
    fallbackLng: 'vi',
    debug: true, // Bật cái này lên để kiểm tra lỗi ở F12 Console
    interpolation: {
      escapeValue: false,
    },
    backend: {
      // Đường dẫn đến các file json của bạn
      loadPath: '/locales/{{lng}}/translation.json', 
    }
  });

export default i18n;