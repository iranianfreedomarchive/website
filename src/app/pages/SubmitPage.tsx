import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Shield, Lock, Code, Flame } from 'lucide-react';
import { useState } from 'react';

interface SubmitPageProps {
  onBack: () => void;
}

export function SubmitPage({ onBack }: SubmitPageProps) {
  const { t, isRTL } = useLanguage();
  const [candleLit, setCandleLit] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    date: '',
    story: '',
    contact: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert('Thank you. Your submission has been received securely.');
    setFormData({ name: '', age: '', location: '', date: '', story: '', contact: '' });
  };

  return (
    <div className="min-h-screen pt-16 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#10b981]/5 via-background to-[#ef4444]/5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#10b981] via-foreground to-[#ef4444] bg-clip-text text-transparent">
              {t('submit.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('submit.subtitle')}
            </p>
          </motion.div>

          {/* Security Trust Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
          >
            {[
              {
                icon: Lock,
                title: t('submit.security.encryption'),
                desc: t('submit.security.encryption.desc'),
                color: 'from-[#10b981] to-emerald-600',
              },
              {
                icon: Shield,
                title: t('submit.security.anonymity'),
                desc: t('submit.security.anonymity.desc'),
                color: 'from-blue-500 to-indigo-600',
              },
              {
                icon: Code,
                title: t('submit.security.opensource'),
                desc: t('submit.security.opensource.desc'),
                color: 'from-[#ef4444] to-red-600',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Submission Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-2xl p-8 md:p-12 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    {t('submit.form.name')} <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all"
                  />
                </div>

                {/* Age and Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      {t('submit.form.age')} <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      {t('submit.form.location')} <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all"
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    {t('submit.form.date')} <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all"
                  />
                </div>

                {/* Story */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    {t('submit.form.story')} <span className="text-[#ef4444]">*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.story}
                    onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all resize-none"
                  />
                </div>

                {/* Contact (Optional) */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    {t('submit.form.contact')}
                  </label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#10b981] to-[#ef4444] text-white font-semibold shadow-lg hover:shadow-2xl transition-all"
                >
                  {t('submit.form.submit')}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="container mx-auto px-4 mt-20">
        <div className="max-w-4xl mx-auto">
          {/* Digital Candle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold mb-6">{t('footer.candle')}</h3>
            <motion.button
              onClick={() => setCandleLit(!candleLit)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: candleLit ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 1.5,
                  repeat: candleLit ? Infinity : 0,
                }}
                className={`text-6xl ${candleLit ? 'grayscale-0' : 'grayscale'} transition-all`}
              >
                🕯️
              </motion.div>
              {candleLit && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-t from-[#ef4444]/20 to-transparent rounded-full blur-xl"
                />
              )}
            </motion.button>
          </motion.div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Code className="w-5 h-5" />
              <span>{t('footer.github')}</span>
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 pb-8 text-sm text-muted-foreground"
          >
            <p>{t('footer.rights')}</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
