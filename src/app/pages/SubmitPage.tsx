import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Shield, Lock, Code, Plus, X } from 'lucide-react';
import { useState } from 'react';

interface SubmitPageProps {
  onBack: () => void;
}

export function SubmitPage({ onBack }: SubmitPageProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    javidDate: '',
    javidLocation: '',
    locationDescription: '',
    bio: '',
    description: '',
    isChild: false,
    isExecuted: false,
    isArrested: false,
    isMissing: false,
  });
  
  const [sourceLinks, setSourceLinks] = useState<string[]>(['']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      sources: sourceLinks.filter(link => link.trim() !== ''),
    };
    console.log('Submission data:', submissionData);
    alert('Thank you. Your submission has been received securely.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
      javidDate: '',
      javidLocation: '',
      locationDescription: '',
      bio: '',
      description: '',
      isChild: false,
      isExecuted: false,
      isArrested: false,
      isMissing: false,
    });
    setSourceLinks(['']);
  };

  const addSourceLink = () => {
    setSourceLinks([...sourceLinks, '']);
  };

  const removeSourceLink = (index: number) => {
    setSourceLinks(sourceLinks.filter((_, i) => i !== index));
  };

  const updateSourceLink = (index: number, value: string) => {
    const newLinks = [...sourceLinks];
    newLinks[index] = value;
    setSourceLinks(newLinks);
  };

  return (
    <div className="min-h-screen pt-16 pb-12 md:pb-20">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
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
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#10b981] via-foreground to-[#ef4444] bg-clip-text text-transparent">
              {t('submit.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              {t('submit.subtitle')}
            </p>
          </motion.div>

          {/* Security Trust Cards - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-12 md:mb-16"
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
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative group"
              >
                <div className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 md:mb-4`}>
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
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
            <div className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-2xl p-6 md:p-12 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information Section */}
                <div className="border-b border-border/50 pb-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Personal Information</h3>
                  
                  {/* First Name and Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        {t('submit.form.firstname')} <span className="text-[#ef4444]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-2.5 md:py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all text-sm md:text-base"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        {t('submit.form.lastname')} <span className="text-[#ef4444]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-2.5 md:py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all text-sm md:text-base"
                      />
                    </div>
                  </div>

                  {/* Gender and Age */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        {t('submit.form.gender')} <span className="text-[#ef4444]">*</span>
                      </label>
                      <select
                        required
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full px-4 py-2.5 md:py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all text-sm md:text-base"
                      >
                        <option value="">Select...</option>
                        <option value="male">{t('submit.form.gender.male')}</option>
                        <option value="female">{t('submit.form.gender.female')}</option>
                        <option value="other">{t('submit.form.gender.other')}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        {t('submit.form.age')} <span className="text-[#ef4444]">*</span>
                      </label>
                      <input
                        type="number"
                        required
                        min="1"
                        max="150"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="w-full px-4 py-2.5 md:py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all text-sm md:text-base"
                      />
                    </div>
                  </div>
                </div>

                {/* Event Information Section */}
                <div className="border-b border-border/50 pb-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Event Information</h3>
                  
                  {/* Javid Date and Location */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        {t('submit.form.javid.date')} <span className="text-[#ef4444]">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.javidDate}
                        onChange={(e) => setFormData({ ...formData, javidDate: e.target.value })}
                        className="w-full px-4 py-2.5 md:py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all text-sm md:text-base"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        {t('submit.form.javid.location')} <span className="text-[#ef4444]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Tehran, Iran"
                        value={formData.javidLocation}
                        onChange={(e) => setFormData({ ...formData, javidLocation: e.target.value })}
                        className="w-full px-4 py-2.5 md:py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all text-sm md:text-base"
                      />
                    </div>
                  </div>

                  {/* Location Description */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      {t('submit.form.location.description')}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.locationDescription}
                      onChange={(e) => setFormData({ ...formData, locationDescription: e.target.value })}
                      placeholder="Additional details about the location..."
                      className="w-full px-4 py-2.5 md:py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all resize-none text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Narrative Section */}
                <div className="border-b border-border/50 pb-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Narrative</h3>
                  
                  {/* Bio */}
                  <div className="mb-4 md:mb-6">
                    <label className="block mb-2 text-sm font-medium">
                      {t('submit.form.bio')} <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={200}
                      placeholder="A brief one-line description (max 200 characters)"
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      className="w-full px-4 py-2.5 md:py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all text-sm md:text-base"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      {t('submit.form.description')} <span className="text-[#ef4444]">*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell their full story..."
                      className="w-full px-4 py-2.5 md:py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all resize-none text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Status Checkboxes */}
                <div className="border-b border-border/50 pb-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t('submit.form.status')}</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {[
                      { key: 'isChild', label: t('submit.form.status.child') },
                      { key: 'isExecuted', label: t('submit.form.status.executed') },
                      { key: 'isArrested', label: t('submit.form.status.arrested') },
                      { key: 'isMissing', label: t('submit.form.status.missing') },
                    ].map((status) => (
                      <label key={status.key} className="flex items-center gap-3 p-3 md:p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData[status.key as keyof typeof formData] as boolean}
                          onChange={(e) => setFormData({ ...formData, [status.key]: e.target.checked })}
                          className="w-4 h-4 md:w-5 md:h-5 rounded border-border text-[#10b981] focus:ring-2 focus:ring-[#10b981]"
                        />
                        <span className="text-sm md:text-base font-medium">{status.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Dynamic Source Links */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t('submit.form.sources')}</h3>
                  
                  <div className="space-y-3 md:space-y-4">
                    {sourceLinks.map((link, index) => (
                      <div key={index} className="flex gap-2 md:gap-3">
                        <input
                          type="url"
                          value={link}
                          onChange={(e) => updateSourceLink(index, e.target.value)}
                          placeholder={t('submit.form.sources.placeholder')}
                          className="flex-1 px-4 py-2.5 md:py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all text-sm md:text-base"
                        />
                        {sourceLinks.length > 1 && (
                          <motion.button
                            type="button"
                            onClick={() => removeSourceLink(index)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2.5 md:p-3 bg-destructive/20 hover:bg-destructive/30 text-destructive rounded-xl transition-colors"
                          >
                            <X className="w-4 h-4 md:w-5 md:h-5" />
                          </motion.button>
                        )}
                      </div>
                    ))}
                  </div>

                  <motion.button
                    type="button"
                    onClick={addSourceLink}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-3 md:mt-4 flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-secondary hover:bg-secondary/80 rounded-xl transition-colors text-sm md:text-base"
                  >
                    <Plus className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{t('submit.form.sources.add')}</span>
                  </motion.button>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 md:py-4 rounded-xl bg-gradient-to-r from-[#10b981] to-[#ef4444] text-white font-semibold shadow-lg hover:shadow-2xl transition-all text-sm md:text-base"
                >
                  {t('submit.form.submit')}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="container mx-auto px-4 mt-12 md:mt-20">
        <div className="max-w-4xl mx-auto">
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
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors text-sm md:text-base"
            >
              <Code className="w-4 h-4 md:w-5 md:h-5" />
              <span>{t('footer.github')}</span>
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:mt-12 pb-6 md:pb-8 text-xs md:text-sm text-muted-foreground px-4"
          >
            <p>{t('footer.rights')}</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
