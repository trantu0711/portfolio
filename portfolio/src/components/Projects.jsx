import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Github } from '@boxicons/react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  const projectList = [
    {
      id: "portfolio",
      image: "index_portfolio.png",
      tags: ["ReactJS", "Tailwind", "i18n", "NodeJS"],
      github: "https://github.com/trantu0711/portfolio",
      demo: null
    },
    {
      id: "room_rental",
      image: "index.png",
      tags: ["ReactJS", "C# (ASP.NET)", "SQL Server", "VNPay"],
      github: "https://github.com/trantu0711/Room-Rental-Search-and-Management-Web-Application",
      demo: null
    },
    {
      id: "vinherb",
      image: "index_vinherb.png",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
      github: "https://github.com/trantu0711/Vinherb-Skincare-Product-Website/",
      demo: "https://trantu0711.github.io/Vinherb-Skincare-Product-Website/"
    },
    {
      id: "figma_design",
      image: "index_figma.png",
      tags: ["Figma"],
      github: null,
      demo: "https://www.figma.com/design/6B2V42mLHBucFGiapCwmCt/Bai-Tap-Web?node-id=0-1"
    }
  ];

  return (
    <section id="projects" className="py-20 text-white bg-slate-50 dark:bg-[#0b0b17] transition-colors duration-300">

      <div className="container mx-auto px-6 w-[85%]">
        {/* Tiêu đề */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-800 transition-colors duration-300 dark:text-white">
            {t('projects.title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Danh sách Card dự án */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: project.id * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="dark:bg-[#12122a] bg-slate-50 rounded-[1.5rem] p-5 duration-300 dark:border-slate-700/50 border border-slate-300 flex flex-col"
            >
              {/* Ảnh dự án */}
              <div className="rounded-[1rem] overflow-hidden mb-6 aspect-video">
                <img
                  src={project.image}
                  alt={t(`projects.items.${project.id}.title`)}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Nội dung */}
              <h3 className="text-2xl font-bold mb-2 text-slate-800 duration-300 dark:text-white ">
                {t(`projects.items.${project.id}.title`)}
              </h3>

              {/* Kiểm tra nếu có description thì mới hiển thị */}
              <p className="text-slate-400 text-sm mb-6 text-justify line-clamp-3">
                {t(`projects.items.${project.id}.desc`)}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="px-4 py-1.5 dark:bg-slate-800/80 bg-slate-50 duration-300 dark:text-slate-300 text-slate-800 rounded-full text-xs font-medium border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Nút bấm (Tự động đẩy xuống dưới cùng) */}
              <div className="mt-auto flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 bg-slate-50 text-slate-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors border border-slate-700"
                  >
                    <Github size={20} /> Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex-1 bg-slate-800 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-600 transition-colors"
                  >
                    <ExternalLink size={20} /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
