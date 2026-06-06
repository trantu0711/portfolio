import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Loader2 } from 'lucide-react'; // Thêm Loader2
import { motion, AnimatePresence } from 'framer-motion';
import { Tiktok, Facebook, Github, Linkedin } from '@boxicons/react';
import { useTranslation } from 'react-i18next';
import axios from 'axios'; // Import axios

const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState("");

  // Trạng thái Form
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };

  // Xử lý thay đổi input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Xử lý gửi Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      // Gọi API Backend
      const response = await axios.post('https://portfolio-js4r.onrender.com/api/contact', formData);

      if (response.data.success) {
        setStatus({ loading: false, success: true, error: false });
        setFormData({ name: '', email: '', message: '' }); // Reset form
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      }
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, success: false, error: true });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={22} />,
      label: t('contact.labels.email'),
      value: "trantu7112003@gmail.com",
      canCopy: true
    },
    {
      icon: <Phone className="text-emerald-400" size={22} />,
      label: t('contact.labels.phone'),
      value: "0772911890",
      canCopy: true
    },
    {
      icon: <MapPin className="text-orange-400" size={22} />,
      label: t('contact.labels.address.line1'),
      value: t('contact.labels.address.line2'),
      canCopy: false
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={24} />, link: "https://www.facebook.com/Tu.SayHiii" },
    { icon: <Github size={24} />, link: "https://github.com/trantu0711" },
    { icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/tu-tran-6a8a1a3b9" },
    { icon: <Tiktok size={24} />, link: "https://www.tiktok.com/@tran.tu0711" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0b0b17] transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-800 duration-300 dark:text-white">{t('contact.title')}</h2>
          <p className="text-slate-600 duration-300 dark:text-slate-300">{t('contact.subtitle')}</p>
        </div>


        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* CỘT TRÁI: INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-2 space-y-6 ">

            {contactInfo.map((info, index) => (
              <div key={index} className="group p-5 rounded-3xl border border-slate-300 dark:border-slate-800 bg-slate-50/50 duration-300 dark:bg-[#12122a]/50 backdrop-blur-md flex items-center justify-between hover:shadow-xl hover:shadow-blue-500/5">
                <div className="flex items-center gap-5" >
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 transition-colors duration-300 group-hover:scale-110">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-400 mb-0.5">{info.label}</p>
                    <p className="text-slate-800 duration-300 dark:text-slate-200 font-medium break-all">{info.value}</p>
                  </div>
                </div>
                {info.canCopy && (
                  <button onClick={() => copyToClipboard(info.value)} className="p-2.5 rounded-xl bg-slate-50 duration-300 dark:bg-slate-800/50 text-slate-400">
                    {copied === info.value ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                  </button>
                )}
              </div>
            ))}

            <div className="pt-7 text-center lg:text-left">
              <p className="text-xl font-medium opacity-80 mb-6 tracking-widest duration-300 dark:text-white">{t('contact.connect')}</p>
              <div className="flex justify-center lg:justify-start gap-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.link} target="_blank" className="w-12 h-12 border border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-[#12122a]/50  rounded-2xl flex items-center justify-center  transition-all duration-300 dark:text-white text-slate-800 hover:scale-110">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* CỘT PHẢI: FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            
            className="space-y-10"
            className="lg:col-span-3 p-8 md:p-10 rounded-[1.5rem] bg-slate-50 dark:bg-[#12122a] border border-slate-300 transition-colors duration-300 dark:border-slate-800">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-slate-500 mb-2">{t('contact.form.name')}</label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full bg-slate-50 dark:bg-[#0b0b17] text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 rounded-2xl px-5 py-4 focus:border-blue-500  transition-all duration-300 outline-none"
                  placeholder="Tran Van A"
                />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-slate-500 mb-2">{t('contact.form.email')}</label>
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full bg-slate-50 dark:bg-[#0b0b17] text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 rounded-2xl px-5 py-4 focus:border-blue-500 transition-all duration-300 outline-none"
                  placeholder="example@mail.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-500 mb-2">{t('contact.form.message')}</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-slate-50 dark:bg-[#0b0b17] text-slate-900 dark:text-white border border-slate-300 transition-colors duration-300 dark:border-slate-800 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none resize-none"
                  placeholder={t('contact.form.placeholder_message')}
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  disabled={status.loading}
                  type="submit"
                  className={`w-full py-5 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl ${status.success ? 'bg-emerald-500' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/25'}`}
                >
                  {status.loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                  <span>
                    {status.loading ? t('contact.social.loading') : status.success ? t('contact.social.success') : t('contact.form.send')}
                  </span>
                </button>

                {status.error && <p className="text-red-500 text-sm mt-2 text-center">{t('contact.messages')}</p>}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
