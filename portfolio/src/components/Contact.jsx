import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Loader2, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tiktok, Facebook, Github, Linkedin } from '@boxicons/react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';


const RevealContactItem = ({ info, copied, onCopy }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const getMaskedValue = () => {
    if (!info.canHide) return info.value;
    if (info.type === 'email') {
      const [name, domain] = info.value.split('@');
      if (!name || !domain) return info.value;
      return `${name.substring(0, 3)}****@${domain}`;
    }
    if (info.type === 'phone') {
      return `${info.value.substring(0, 6)}****`;
    }
    return info.value;
  };

  const handleCopy = () => {
    if (info.canHide) setIsRevealed(true); // Tự động hiện số nếu bấm Copy
    onCopy(info.value);
  };

  // phần hiển thị thông tin liên hệ với các nút copy và reveal
  return (
    <div className="group p-5 rounded-3xl border border-slate-300 dark:border-slate-800 bg-slate-50/50 duration-300 dark:bg-[#12122a]/50 backdrop-blur-md flex items-center justify-between hover:shadow-xl hover:shadow-blue-500/10">
      <div className="flex items-center gap-5">
        <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 transition-colors duration-300 group-hover:scale-110">
          {info.icon}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase text-slate-400 mb-0.5">{info.label}</p>
          <div className="flex items-center gap-2">
            <p className="text-slate-800 duration-300 dark:text-slate-200 font-medium break-all">
              {info.canHide && !isRevealed ? getMaskedValue() : info.value}
            </p>

          </div>
        </div>
      </div>
      {/* phần hiển thị các nút copy và reveal */}
      <div className="flex items-center gap-2">
      {info.canHide && (
        <button
          onClick={() => setIsRevealed(!isRevealed)}
          className="p-2.5 rounded-xl bg-slate-50 duration-300 dark:bg-slate-800/50 text-slate-400 hover:text-blue-500 transition-colors focus:outline-none"
          title={isRevealed ? "Ẩn" : "Hiện"}
        >
          {isRevealed ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
      {info.canCopy && (
        <button onClick={handleCopy}
          className="p-2.5 rounded-xl bg-slate-50 duration-300 dark:bg-slate-800/50 text-slate-400 hover:text-blue-500 transition-colors focus:outline-none">
          {copied === info.value ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
        </button>
      )}
      </div>
    </div>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState("");

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      const response = await axios.post('https://portfolio-js4r.onrender.com/api/contact', formData);

      if (response.data.success) {
        setStatus({ loading: false, success: true, error: false });
        setFormData({ name: '', email: '', message: '' });
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
      canCopy: true,
      type: 'email',
      canHide: true
    },
    {
      icon: <Phone className="text-emerald-400" size={22} />,
      label: t('contact.labels.phone'),
      value: "0772911890",
      canCopy: true,
      type: 'phone',
      canHide: true
    },
    {
      icon: <MapPin className="text-orange-400" size={22} />,
      label: t('contact.labels.address.line1'),
      value: t('contact.labels.address.line2'),
      canCopy: false,
      canHide: false
    }
  ];

  const socialLinks = [
    // { icon: <Facebook size={24} />, link: "https://www.facebook.com/Tu.SayHiii" },
    { icon: <Facebook size={24} />, link: "https://www.facebook.com/share/19TP6z7fDD/" },
    { icon: <Github size={24} />, link: "https://github.com/trantu0711" },
    { icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/tu-tran-6a8a1a3b9" },
    { icon: <Tiktok size={24} />, link: "https://www.tiktok.com/@tran.tu0711" },
  ];

  // phần hiển thị toàn bộ section liên hệ với form gửi mail và thông tin liên hệ
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0b0b17] transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10 w-full lg:w-[80%]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-800 duration-300 dark:text-white">{t('contact.title')}</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 duration-300 dark:text-slate-400">{t('contact.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-2 space-y-6 "
          >
        
            {contactInfo.map((info, index) => (
              <RevealContactItem
                key={index}
                info={info}
                copied={copied}
                onCopy={copyToClipboard}
              />
            ))}

            {/* Connect with me: */}
            <div className="pt-7 text-center lg:text-left">
              <p className="text-xl font-medium opacity-80 mb-6 tracking-widest duration-300 dark:text-white">{t('contact.connect')}</p>
              <div className="flex justify-center lg:justify-start gap-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-[#12122a]/50 rounded-2xl flex items-center justify-center transition-all duration-300 dark:text-white text-slate-800 hover:scale-110">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Form gửi mail*/}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-3 p-8 md:p-10 rounded-[1.5rem] bg-slate-50 dark:bg-[#12122a]/50 border border-slate-300 transition-colors duration-300 dark:border-slate-800 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-slate-500 mb-2">{t('contact.form.name')}</label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full bg-slate-50 dark:bg-[#0b0b17] text-slate-900 dark:text-white border border-slate-300 dark:border-slate-800 rounded-2xl px-5 py-4 focus:border-blue-500 transition-all duration-300 outline-none"
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
                  className="w-full bg-slate-50 dark:bg-[#0b0b17] text-slate-900 dark:text-white border border-slate-300 transition-colors duration-300 dark:border-slate-800 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
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