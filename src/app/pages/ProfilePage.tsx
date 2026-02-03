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
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
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
        <div className="absolute top-0 left-0 right-0 h-1 md:h-2 bg-gradient-to-r from-[#1a4d2e] via-[#e8e8e8] to-[#8b0000]" />

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onClick={onBack}
          className="absolute top-20 md:top-24 left-3 right-3 md:left-8 md:right-auto flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl bg-background/80 backdrop-blur-md hover:bg-background transition-colors text-sm md:text-base max-w-fit"
        >
          {isRTL ? <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 rotate-180" /> : <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />}
          <span>{t('profile.back')}</span>
        </motion.button>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4">{person.name}</h1>
              <div className="flex flex-wrap gap-3 md:gap-6 text-sm md:text-base lg:text-lg">
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
      <section className="container mx-auto px-4 py-12 md:py-16">
        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8 md:mb-12 flex justify-center"
        >
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-xl bg-gradient-to-r from-[#1a4d2e] to-[#8b0000] text-[#e8e8e8] font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(139,0,0,0.4)] transition-all duration-500 text-sm md:text-base border border-[#8b0000]/50"
            >
              <Share2 className="w-4 h-4 md:w-5 md:h-5" />
              <span>{t('profile.share')}</span>
            </motion.button>

            {/* Share Menu */}
            {showShareMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-2 left-0 right-0 bg-popover border border-border rounded-xl shadow-lg p-2 min-w-[200px] z-50"
              >
                <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-accent rounded-lg transition-colors text-sm md:text-base">
                  <Facebook className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600" />
                  <span>Facebook</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-accent rounded-lg transition-colors text-sm md:text-base">
                  <Twitter className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />
                  <span>Twitter</span>
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(shareUrl);
                    setShowShareMenu(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-accent rounded-lg transition-colors text-sm md:text-base"
                >
                  <Link2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
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
          className="max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <div className="bg-card/60 backdrop-blur-xl border border-[#8b0000]/30 rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-3">
              <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-[#1a4d2e] to-[#8b0000] rounded-full" />
              {t('profile.biography')}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center flex items-center justify-center gap-3">
            <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-[#10b981] to-[#ef4444] rounded-full" />
            {t('profile.gallery')}
            <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-[#ef4444] to-[#10b981] rounded-full" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {person.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg">
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
          className="max-w-3xl mx-auto mt-12 md:mt-16 text-center"
        >
          <div className="relative bg-gradient-to-br from-[#1a4d2e]/10 via-background to-[#8b0000]/10 rounded-2xl p-8 md:p-12 border border-[#8b0000]/30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#1a4d2e] to-[#8b0000] flex items-center justify-center text-xl md:text-2xl">
                🕊️
              </div>
            </div>
            <p className="text-lg md:text-2xl italic text-muted-foreground mt-4 px-4">
              "Their courage will echo through generations, inspiring all who seek freedom and justice."
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}