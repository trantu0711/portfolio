import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:dark:bg-[#0b0b17] bg-slate-50 py-12 border-slate-800/50 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        {/* Lời gọi hợp tác */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
         {t('footer.cta')}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-10 max-w-5xl mx-auto leading-relaxed text-justify">
            {t('footer.quote')}
        </p>

        {/* Đường kẻ ngang mảnh */}
        <div className="w-full h-[1px] dark:bg-slate-800 bg-slate-300 mb-8 max-w-5xl mx-auto"></div>

        {/* Bản quyền */}
        <p className="text-slate-500 text-sm">
         {t('footer.copy', { year: currentYear })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;