import { GraduationCap, Briefcase, Heart, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Đảm bảo đã import hook này

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-[#0b0b17] transition-colors duration-300">
      <div className="container mx-auto px-6 w-full lg:w-[80%]">

        {/* Tiêu đề phần */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 duration-300">
            {t('about.section_title')}
          </h2>
          <div className="h-1.5 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Giới thiệu ngắn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2 duration-300">
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
            {t('about.intro_title')}
            
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify text-lg md:text-xl max-w-6xl">
            {t('about.intro_description.0')}
          </p>
          <br/>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify text-lg md:text-xl max-w-6xl">
            {t('about.intro_description.1')}
          </p>
          <br/>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify text-lg md:text-xl max-w-6xl">
            {t('about.intro_description.2')}
          </p>
          <br/>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 leading-relaxed text-center text-lg md:text-xl max-w-6xl">
            {t('about.intro_description.3')}
          </p>
          <br/>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-center text-lg md:text-xl max-w-6xl whitespace-pre-line">
            {t('about.intro_description.4')}
          </p>
          <br/>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify text-lg md:text-xl max-w-6xl">
            {t('about.intro_description.5')}
          </p>
          <br/>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify text-lg md:text-xl max-w-6xl">
            {t('about.intro_description.6')}
          </p>

        </motion.div>

        {/* SECTION: HỌC VẤN & KINH NGHIỆM */}
        <div className="grid md:grid-cols-2 gap-16 relative mb-24">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 dark:bg-slate-700 hidden md:block transform -translate-x-1/2 duration-300"></div>

          {/* Cột trái: Học vấn */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-500 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-2xl font-bold dark:text-white duration-300">{t('about.education.title')}</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-blue-500/30">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-[#0b0b17] duration-300"></div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white duration-300">{t('about.education.school')}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mt-2 duration-300">{t('about.education.major')}</p>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mt-2 duration-300">
                  <Calendar size={14} /> {t('about.education.duration')}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cột phải: Kinh nghiệm */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-indigo-500 rounded-2xl text-white shadow-lg shadow-indigo-500/20">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-bold dark:text-white duration-300">{t('about.experience.title')}</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-indigo-500/30">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white duration-300 dark:border-[#0b0b17]"></div>
                <h4 className="text-xl font-bold text-slate-800 duration-300 dark:text-white">{t('about.experience.role')}</h4>
                <p className="text-indigo-600 duration-300 dark:text-indigo-400 font-semibold mt-1">{t('about.experience.project')}</p>
                <div className="flex items-center gap-2 text-slate-500 duration-300 dark:text-slate-400 text-sm mt-2">
                  <Calendar size={14} /> {t('about.experience.duration')}
                </div>

                <ul className="mt-4 space-y-3 text-slate-600 duration-300 dark:text-slate-400">
                  {/* Lấy mảng từ file JSON */}
                  {t('about.experience.tasks', { returnObjects: true }).map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowRight size={16} className="mt-1 text-indigo-500 shrink-0" />
                      <span className="text-sm md:text-base">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECTION: HOẠT ĐỘNG & SỞ THÍCH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-slate-50 duration-300 dark:bg-[#12122a]/40 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 dark:border-slate-700 shadow-xl"
        >
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-pink-500 rounded-2xl text-white">
                  <Heart size={28} />
                </div>
                <h3 className="text-2xl font-bold duration-300 dark:text-white">{t('about.interests.title')}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h5 className="font-bold text-pink-600 duration-300 dark:text-pink-400 text-lg">{t('about.interests.activities_label')}</h5>
                  <p className="text-slate-600 duration-300 dark:text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                    {t('about.interests.activities_content')}
                  </p>
                </div>
                <div className="space-y-3">
                  <h5 className="font-bold text-pink-600 duration-300 dark:text-pink-400 text-lg">{t('about.interests.hobbies_label')}</h5>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {/* Lấy mảng sở thích từ file JSON */}
                    {t('about.interests.hobbies_list', { returnObjects: true }).map(item => (
                      <span key={item} className="px-4 py-2 bg-white duration-300 dark:bg-slate-800/50 rounded-xl text-xs text-black dark:text-slate-300 border border-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex justify-center relative">
              <div className="absolute inset-0 bg-pink-500/10 rounded-full blur-3xl"></div>
              <Heart size={180} className="text-pink-500/10 relative animate-pulse" strokeWidth={1} />
              <Heart size={80} className="text-pink-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;