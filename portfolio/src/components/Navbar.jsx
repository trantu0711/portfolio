import { useState, useEffect } from 'react';
import { Moon, Sun, Languages } from 'lucide-react'; // Sử dụng Languages icon
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const { i18n, t } = useTranslation();

  // Hiệu ứng đổi màu Navbar khi cuộn chuột
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1. Khởi tạo Theme (Dark/Light)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // 2. Hàm bật tắt Dark Mode
  const toggleDark = () => {
    const newDark = !dark;
    setDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // 3. Hàm chuyển đổi ngôn ngữ
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  // hàm đổi icon cờ dựa trên ngôn ngữ hiện tại
  const renderFlag = () => {
    if (i18n.language === 'vi') {

      return (
        <svg width={30} height={20} viewBox="0 0 30 20" fill="none">
          <rect width={30} height={20} fill="#F5F5F5" />
          <rect width={1876} height={988} transform="translate(-1294 -900)" fill="white" />
          <path d="M30 0.00012207H0V20H30V0.00012207Z" fill="#F0F0F0" />
          <path d="M16.875 0H13.125V8.1248H0V11.8747H13.125V19.9995H16.875V11.8747H30V8.1248H16.875V0Z" fill="#D80027" />
          <path d="M23.0742 13.4779L30.0009 17.326V13.4779H23.0742Z" fill="#0052B4" />
          <path d="M18.2617 13.4779L30.0009 19.9995V18.1554L21.5813 13.4779H18.2617Z" fill="#0052B4" />
          <path d="M26.8739 19.9995L18.2617 15.2146V19.9995H26.8739Z" fill="#0052B4" />
          <path d="M18.2617 13.4779L30.0009 19.9995V18.1554L21.5813 13.4779H18.2617Z" fill="#F0F0F0" />
          <path d="M18.2617 13.4779L30.0009 19.9995V18.1554L21.5813 13.4779H18.2617Z" fill="#D80027" />
          <path d="M5.29341 13.4778L0 16.4185V13.4778H5.29341Z" fill="#0052B4" />
          <path d="M11.7397 14.3071V19.9995H1.49414L11.7397 14.3071Z" fill="#0052B4" />
          <path d="M8.41951 13.4779L0 18.1554V19.9995L11.7391 13.4779H8.41951Z" fill="#D80027" />
          <path d="M6.92665 6.52159L0 2.67346V6.52159H6.92665Z" fill="#0052B4" />
          <path d="M11.7391 6.52159L0 0V1.84414L8.41951 6.52159H11.7391Z" fill="#0052B4" />
          <path d="M3.12695 0L11.7392 4.78491V0H3.12695Z" fill="#0052B4" />
          <path d="M11.7391 6.52159L0 0V1.84414L8.41951 6.52159H11.7391Z" fill="#F0F0F0" />
          <path d="M11.7391 6.52159L0 0V1.84414L8.41951 6.52159H11.7391Z" fill="#D80027" />
          <path d="M24.707 6.5217L30.0004 3.58093V6.5217H24.707Z" fill="#0052B4" />
          <path d="M18.2617 5.69233V0H28.5072L18.2617 5.69233Z" fill="#0052B4" />
          <path d="M21.5813 6.52159L30.0009 1.84414V0L18.2617 6.52159H21.5813Z" fill="#D80027" />
        </svg>

      );
    } else {
      // Dán cụm <svg> cờ Việt Nam thuần React vào đây
      return (
        <svg width={30} height={20} viewBox="0 0 30 20" fill="none">
          <rect width={30} height={20} fill="#F5F5F5" />
          <rect width={1876} height={988} transform="translate(-490 -952)" fill="white" />
          <path d="M11.5219 0H0V20H11.5219H30V0H11.5219Z" fill="#D80027" />
          <path
            d="M15 4.21545L16.3279 8.30228H20.625L17.1485 10.8281L18.4765 14.915L15 12.3892L11.5235 14.915L12.8515 10.8281L9.375 8.30228H13.6721L15 4.21545Z"
            fill="#FFDA44"
          />
        </svg>

      );
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-50/80 dark:bg-[#0b0b17]/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="w-full mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <div className="text-lg md:text-2xl font-black text-blue-600 dark:text-blue-400 md:pl-10 tracking-tighter">
          {/* Chữ hiển thị trên Mobile (Màn hình nhỏ hơn md thì hiện, to hơn thì ẩn) */}
          <span className="inline md:hidden">MT.portfolio</span>

          {/* Chữ hiển thị trên Desktop (Mặc định ẩn, từ màn hình md trở lên mới hiện) */}
          <span className="hidden md:inline">Minh Tu.portfolio</span>
        </div>

        {/* Menu Links */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#home" className="font-medium hover:text-blue-500 transition-colors dark:text-slate-300 dark:hover:text-white">{t('nav.home')}</a>
          <a href="#about" className="font-medium hover:text-blue-500 transition-colors dark:text-slate-300 dark:hover:text-white">{t('nav.about')}</a>
          <a href="#skills" className="font-medium hover:text-blue-500 transition-colors dark:text-slate-300 dark:hover:text-white">{t('nav.skills')}</a>
          <a href="#projects" className="font-medium hover:text-blue-500 transition-colors dark:text-slate-300 dark:hover:text-white">{t('nav.projects')}</a>
          <a href="#contact" className="font-medium hover:text-blue-500 transition-colors dark:text-slate-300 dark:hover:text-white">{t('nav.contact')}</a>
        </div>

        {/* Action Buttons (Language & Dark Mode) */}
        <div className="flex items-center gap-3 md:pr-10">

          {/* Nút chuyển đổi ngôn ngữ theo yêu cầu hình ảnh */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-blue-50/50 dark:bg-slate-800/50 text-blue-500 hover:bg-blue-100 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm"
          >
            {renderFlag()} {/* Gọi hàm vẽ SVG trực tiếp ở đây */}
            {/* <Languages size={20} /> */}
            <span className="text-sm font-bold uppercase tracking-wider">
              {i18n.language === 'en' ? 'VI' : 'EN'}
            </span>
          </button>

          {/* Nút Dark Mode hình tròn tối giản */}
          <button
            onClick={toggleDark}
            className="p-2.5 rounded-full bg-blue-50/50 dark:bg-slate-800/50 text-blue-500 hover:bg-blue-100 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm"
          >
            {dark ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} />
            )}
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
