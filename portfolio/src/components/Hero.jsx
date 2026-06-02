import { Sparkles, ArrowRight, FileText, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tiktok, Facebook, Github, Linkedin } from '@boxicons/react';
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0b0b17] transition-colors duration-300 py-20">
      {/* NỀN TRANG TRÍ (Decor Elements) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px] dark:bg-blue-600/10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-400/20 rounded-full blur-[120px] dark:bg-pink-600/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-[95%]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* CỘT 1: NỘI DUNG VĂN BẢN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tag định danh với hiệu ứng xóa và viết lại */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm mb-6 border border-blue-100 dark:border-blue-800 min-w-[250px]">
              <Sparkles size={16} className="animate-pulse" />

              <Typewriter
                options={{
                  strings: t('hero.typewriter', { returnObjects: true }), // Lấy mảng từ file JSON
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 75,
                }}
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white transition-colors duration-300 mb-6 leading-[1.1]">
              {t('hero.greeting')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                {t('hero.name')}
              </span>
              ✌️ Say Hi😘
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed pr-10">
              {t('hero.description')}
            </p>

            {/* Nhóm nút hành động */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#projects" className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all hover:-translate-y-1">
                {t('hero.buttons.projects')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/CV_Tran Minh Tu_Fullstack Developer Intern.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white rounded-2xl font-semibold shadow-md border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300"
              >
                <FileText size={20} className="text-orange-500" />
                {t('hero.buttons.cv')}
              </a>
            </div>

            {/* Social Quick Links */}
            <div className="flex items-center gap-5 text-slate-400">
              <span className="text-xl font-medium tracking-widest">{t('hero.social.connect')}</span>
              <a href="https://www.linkedin.com/in/tu-tran-6a8a1a3b9" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
              <a href="https://github.com/trantu0711" className="hover:text-slate-900 dark:hover:text-white transition-colors"  target="_blank"><Github size={24} /></a>
              <a href="#contact" className="hover:text-pink-500 transition-colors"><Heart size={24} /></a>
            </div>
          </motion.div>

          {/* CỘT 2: AVATAR DECOR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] mx-auto">

              {/* Vòng tròn hiệu ứng phía sau */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-pink-500/20 rounded-3xl rotate-6 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-indigo-500/10 rounded-3xl -rotate-3 border border-slate-200 dark:border-slate-800 duration-300" />

              {/* Khung ảnh chính */}
              <div className="absolute inset-4 bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl duration-300 ">
                <img
                  alt="Avatar"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
                  src="/avatar.png" // Đảm bảo ảnh nằm trong folder public
                />
              </div>

              {/* Floating Badge (Huy hiệu trôi nổi) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 font-bold text-2xl">👨‍💻</div>
                  <div>
                    {/* <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Học vấn</p> */}
                    <p className="text-sm font-bold dark:text-white text-slate-800 duration-300">{t('hero.badge')}</p>
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