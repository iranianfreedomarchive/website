import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { FallenPerson } from '@/app/data/mockData';
import { ArrowLeft, Share2, Facebook, Twitter, Link2 } from 'lucide-react';
import { useState } from 'react';

interface ProfilePageProps {
  person: FallenPerson;
  onBack: () => void;
}

export function ProfilePage({ person, onBack }: ProfilePageProps) {
  const { t, isRTL } = useLanguage();
  const [showShareMenu, setShowShareMenu] = useState(false);

  const shareUrl = `https://iranfreedomarchive.org/fallen/${person.id}`;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Large Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src={person.imageUrl}
          alt={person.name}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        {/* Color Accent Strip */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#10b981] via-white to-[#ef4444]" />

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onClick={onBack}
          className="absolute top-24 left-4 md:left-8 flex items-center gap-2 px-4 py-2 rounded-xl bg-background/80 backdrop-blur-md hover:bg-background transition-colors"
        >
          {isRTL ? <ArrowLeft className="w-4 h-4 rotate-180" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{t('profile.back')}</span>
        </motion.button>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">{person.name}</h1>
              <div className="flex flex-wrap gap-6 text-lg">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">{t('card.age')}:</span>
                  <span className="font-semibold">{person.age}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">{t('card.location')}:</span>
                  <span className="font-semibold">{person.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">{t('card.date')}:</span>
                  <span className="font-semibold text-[#ef4444]">{person.date}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16">
        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12 flex justify-center"
        >
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#10b981] to-[#ef4444] text-white font-semibold shadow-lg hover:shadow-2xl transition-all"
            >
              <Share2 className="w-5 h-5" />
              <span>{t('profile.share')}</span>
            </motion.button>

            {/* Share Menu */}
            {showShareMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-2 left-0 right-0 bg-popover border border-border rounded-xl shadow-lg p-2 min-w-[200px]"
              >
                <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-accent rounded-lg transition-colors">
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span>Facebook</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-accent rounded-lg transition-colors">
                  <Twitter className="w-4 h-4 text-blue-400" />
                  <span>Twitter</span>
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(shareUrl);
                    setShowShareMenu(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                >
                  <Link2 className="w-4 h-4" />
                  <span>Copy Link</span>
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Biography Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[#10b981] to-[#ef4444] rounded-full" />
              {t('profile.biography')}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {person.biography}
            </p>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-[#10b981] to-[#ef4444] rounded-full" />
            {t('profile.gallery')}
            <div className="w-1 h-8 bg-gradient-to-b from-[#ef4444] to-[#10b981] rounded-full" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {person.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Memorial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <div className="relative bg-gradient-to-br from-[#10b981]/10 via-background to-[#ef4444]/10 rounded-2xl p-12 border border-border/50">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10b981] to-[#ef4444] flex items-center justify-center text-2xl">
                🕊️
              </div>
            </div>
            <p className="text-2xl italic text-muted-foreground mt-4">
              "Their courage will echo through generations, inspiring all who seek freedom and justice."
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
