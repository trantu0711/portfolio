import { useState, useEffect } from 'react';
import { Moon, Sun, Languages } from 'lucide-react'; // Sử dụng Languages icon
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const { i18n, t } = useTranslation();

  // Hiệu ứng đổi màu Navbar khi cuộn chuột
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    const newLang = i18n.language === 'vi' ? 'en' : 'vi';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-50/80 dark:bg-[#0b0b17]/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-black text-blue-600 dark:text-blue-400 md:pl-10 tracking-tighter">
          Minh Tu.portfolio
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-8">
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
            <Languages size={20} />
            <span className="text-sm font-bold uppercase tracking-wider">
              {i18n.language === 'vi' ? 'VI' : 'EN'}
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