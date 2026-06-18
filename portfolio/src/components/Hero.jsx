import { Sparkles, ArrowRight, FileText, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from '@boxicons/react';
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative xl:min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0b0b17] transition-colors duration-300 py-12 lg:py-20">

      {/* NỀN TRANG TRÍ (Decor Elements) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] md:w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[80px] md:blur-[120px] dark:bg-blue-600/10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] md:w-[40%] h-[40%] bg-pink-400/20 rounded-full blur-[80px] md:blur-[120px] dark:bg-pink-600/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-[95%] w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* CỘT 1: NỘI DUNG VĂN BẢN (Chiếm 7 cột trên màn hình lớn) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left transform-gpu will-change-transform"
          >
            {/* Tag định danh với hiệu ứng viết chữ */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-xs md:text-sm mb-6 border border-blue-100 dark:border-blue-800 max-w-full">
              <Sparkles size={14} className="animate-pulse shrink-0" />
              <div className="font-semibold tracking-wide">
                <Typewriter
                  options={{
                    strings: t('hero.typewriter', { returnObjects: true }),
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 75,
                  }}
                />
              </div>
            </div>

            {/* Tiêu đề chính */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-extrabold text-slate-900 dark:text-white transition-colors duration-300 mb-6 leading-[1.15] tracking-tight">
              {t('hero.greeting')} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                {t('hero.name')} 
              </span>
              ✌️ Say Hi😘
            </h1>

            <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0 lg:pr-6">
              {t('hero.description')}
            </p>

            {/* Nhóm nút hành động*/}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a href="#projects" className="group w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-2xl font-semibold shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all hover:-translate-y-0.5">
                {t('hero.buttons.projects')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/TRAN_MINH_TU_SOFTWARE_ENGINEER_INTERN_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-white rounded-2xl font-semibold shadow-sm border border-slate-200/60 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
              >
                <FileText size={18} className="text-orange-500" />
                {t('hero.buttons.cv')}
              </a>
            </div>

            {/* Social Quick Links */}
            <div className="flex items-center justify-center lg:justify-start gap-5 text-slate-400">
              <span className="text-sm font-semibold uppercase tracking-widest text-slate-400/80">{t('hero.social.connect')}</span>
              <a href="https://www.linkedin.com/in/tu-tran-6a8a1a3b9" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin size={22} /></a>
              <a href="https://github.com/trantu0711" className="hover:text-slate-900 dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Github size={22} /></a>
              <a href="#contact" className="hover:text-pink-500 transition-colors"><Heart size={22} /></a>
            </div>
          </motion.div>

          {/* CỘT 2: AVATAR DECOR (Chiếm 5 cột trên màn hình lớn) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 order-1 lg:order-2 w-full max-w-[280px] sm:max-w-[360px] md:max-w-[360px] lg:max-w-[440px] pt-10 mx-auto transform-gpu will-change-transform"
          >
            {/* Tạo tỷ lệ vuông khít tự động co giãn theo khung (Aspect Square) */}
            <div className="relative w-full aspect-square">

              {/* Vòng tròn hiệu ứng phía sau */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-pink-500/20 rounded-[2rem] rotate-6 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-indigo-500/10 rounded-[2rem] -rotate-3 border border-slate-200/60 dark:border-slate-800 duration-300" />

              {/* Khung ảnh chính */}
              <div className="absolute inset-3 sm:inset-4 bg-slate-200 dark:bg-slate-800 rounded-[1.8rem] overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl duration-300">
                <img
                  alt="Avatar Trần Minh Tú"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
                  src="/avatar.png"
                />
              </div>

              {/* Floating Badge (Huy hiệu trôi nổi) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white dark:bg-[#12122a] px-4 py-3 md:py-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 duration-300 select-none"
              >
                <div className="flex items-center gap-2.5">
                  <div className="text-xl sm:text-2xl">👨‍💻</div>
                  <div>
                    <p className="text-xs md:text-lg font-bold dark:text-white text-slate-800 duration-300 whitespace-nowrap">{t('hero.badge')}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;