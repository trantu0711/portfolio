import { Monitor, Database, Terminal, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  const skillGroups = [
    {
      title: t('skills.groups.frontend'),
      icon: <Monitor className="text-blue-400" size={28} />,
      skills: ["ReactJS", "JavaScript", "HTML5/CSS3", "Tailwind CSS", "Responsive Design", "Bootstrap 5", "REST API Integration"],
      color: "from-blue-500/20 to-cyan-500/5",
      borderColor: "group-hover:border-blue-500/50",
      span: "md:col-span-2" // Card này rộng hơn
    },
    {
      title: t('skills.groups.backend'),
      icon: <Database className="text-emerald-400" size={28} />,
      skills: ["ASP.NET (C#)", "MySQL", "PHP", "SQL Server", "NodeJS"],
      color: "from-emerald-500/20 to-teal-500/5",
      borderColor: "group-hover:border-emerald-500/50",
      span: "md:col-span-1"
    },
    {
      title: t('skills.groups.tools'),
      icon: <Terminal className="text-orange-400" size={28} />,
      skills: ["Git/GitHub", "Postman", "Figma", "VS Code"],
      color: "from-orange-500/20 to-yellow-500/5",
      borderColor: "group-hover:border-orange-500/50",
      span: "md:col-span-1"
    },
    {
      title: t('skills.soft_skills_title'),
      icon: <Star className="text-purple-400" size={28} />,
      skills: t('skills.soft_skills_list', { returnObjects: true }) || [],
      color: "from-purple-500/20 to-pink-500/5",
      borderColor: "group-hover:border-purple-500/50",
      span: "md:col-span-2"
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0b0b17] transition-colors duration-300">
      {/* Trang trí nền */}
      {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" /> */}

      <div className="container mx-auto px-6 relative z-10 lg:w-[85%]">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 duration-300 dark:text-white tracking-tight">
            {t('skills.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 duration-300 dark:text-slate-400">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden p-8 rounded-[2rem] border border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-[#12122a]/50 backdrop-blur-xl transition-all duration-300 ${group.span} ${group.borderColor}`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 shadow-lg transition-all duration-300 group-hover:scale-110">
                    {group.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 duration-300 dark:text-white">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-5 py-2.5 rounded-2xl bg-slate-50 duration-300 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700/50 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-500 transition-colors shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
