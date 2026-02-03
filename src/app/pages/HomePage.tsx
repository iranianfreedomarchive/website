import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { mockFallenData, mockStats, FallenPerson } from '@/app/data/mockData';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import { RealisticCandle } from '@/app/components/RealisticCandle';

interface HomePageProps {
  onSelectPerson: (person: FallenPerson) => void;
  onNavigateToSubmit: () => void;
}

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 3000; // Slower animation
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

// Candle Section Component with localStorage logic
function CandleSection() {
  const { t } = useLanguage();
  const [candleCount, setCandleCount] = useState(15847); // Mock initial count - ready for backend sync
  const [canLight, setCanLight] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [candleLit, setCandleLit] = useState(false);

  useEffect(() => {
    // Check localStorage for last candle lit time
    const lastLit = localStorage.getItem('lastCandleLit');
    if (lastLit) {
      const timePassed = Date.now() - parseInt(lastLit);
      const fiveMinutes = 5 * 60 * 1000;
      
      if (timePassed < fiveMinutes) {
        setCanLight(false);
        setTimeRemaining(Math.ceil((fiveMinutes - timePassed) / 1000));
        setCandleLit(true); // Show lit candle
      }
    }
  }, []);

  useEffect(() => {
    if (!canLight && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setCanLight(true);
            setCandleLit(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [canLight, timeRemaining]);

  const handleLightCandle = () => {
    if (canLight) {
      localStorage.setItem('lastCandleLit', Date.now().toString());
      setCandleCount(prev => prev + 1);
      setCanLight(false);
      setCandleLit(true);
      setTimeRemaining(300); // 5 minutes in seconds
      
      // TODO: Sync with backend server
      // await fetch('/api/candles', { method: 'POST' });
    }
  };

  const minutesLeft = Math.floor(timeRemaining / 60);
  const secondsLeft = timeRemaining % 60;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="container mx-auto px-4 py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#1a4d2e]/20 via-card/40 to-[#8b0000]/20 backdrop-blur-xl border border-[#8b0000]/30 rounded-3xl p-8 md:p-16 shadow-2xl">
          {/* Title */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-[#e8e8e8]"
            >
              {t('candle.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground"
            >
              {t('candle.subtitle')}
            </motion.p>
          </div>

          {/* Realistic Candle Display */}
          <div className="flex flex-col items-center gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <RealisticCandle isLit={candleLit} />
            </motion.div>

            {/* Counter with Somber Glow */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="text-center"
            >
              <motion.div
                animate={candleLit ? {
                  textShadow: [
                    "0 0 20px rgba(139, 0, 0, 0.4)",
                    "0 0 40px rgba(139, 0, 0, 0.6)",
                    "0 0 20px rgba(139, 0, 0, 0.4)",
                  ],
                } : {}}
                transition={{
                  duration: 3,
                  repeat: candleLit ? Infinity : 0,
                }}
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#1a4d2e] via-[#a01010] to-[#8b0000] bg-clip-text text-transparent mb-2"
              >
                {candleCount.toLocaleString()}
              </motion.div>
              <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">{t('candle.total')}</p>
            </motion.div>

            {/* Button or Wait Message */}
            {canLight ? (
              <motion.button
                onClick={handleLightCandle}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-[#1a4d2e] to-[#8b0000] text-[#e8e8e8] font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(139,0,0,0.4)] transition-all duration-500 text-sm md:text-base border border-[#8b0000]/50"
              >
                <Flame className="w-5 h-5 md:w-6 md:h-6" />
                <span>{t('candle.button')}</span>
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center px-4 py-3 rounded-xl bg-muted/30 text-sm md:text-base border border-border"
              >
                <p className="text-muted-foreground">
                  {t('candle.wait')} <span className="font-bold text-[#a01010]">{minutesLeft}:{secondsLeft.toString().padStart(2, '0')}</span> {t('candle.minutes')}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export function HomePage({ onSelectPerson, onNavigateToSubmit }: HomePageProps) {
  const { t, isRTL } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(mockFallenData.length / itemsPerPage);
  
  const currentData = mockFallenData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Fixed Layout */}
      <section className="relative min-h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Somber Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e]/10 via-background to-[#8b0000]/10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-12 md:py-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#2d5f3f] via-[#e8e8e8] to-[#a01010] bg-clip-text text-transparent leading-tight"
          >
            {t('home.hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 px-4"
          >
            {t('home.hero.subtitle')}
          </motion.p>

          {/* Live Data Dashboard - Somber Colors */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12"
          >
            {[
              { label: t('stats.lives.lost'), value: mockStats.livesLost, color: 'from-[#8b0000] to-[#6b0000]' },
              { label: t('stats.injured'), value: mockStats.injured, color: 'from-[#b45f06] to-[#7f4302]' },
              { label: t('stats.arrests'), value: mockStats.arrests, color: 'from-[#1a4d2e] to-[#0f3820]' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.2, duration: 1 }}
                className="relative group"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-card/40 backdrop-blur-xl border border-[#8b0000]/30 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-[0_0_30px_rgba(139,0,0,0.3)] transition-all duration-500">
                  {/* Subtle Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-xl md:rounded-2xl transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-1 md:mb-2`}>
                      <AnimatedCounter target={stat.value} />
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Candle Section */}
      <CandleSection />

      {/* The Fallen Grid Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-[#e8e8e8]">{t('home.fallen.title')}</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {t('home.fallen.subtitle')}
          </p>
        </motion.div>

        {/* Grid - Slower Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {currentData.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -10 }}
              onClick={() => onSelectPerson(person)}
              className="cursor-pointer group"
            >
              {/* Legacy Card with Dark Glassmorphism */}
              <div className="relative bg-card/40 backdrop-blur-xl border border-[#8b0000]/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(139,0,0,0.3)] transition-all duration-700">
                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={person.imageUrl}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Color Accent Strip - Somber Colors */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1a4d2e] via-[#e8e8e8] to-[#8b0000]" />
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 bg-gradient-to-b from-transparent to-card/60">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#e8e8e8]">{person.name}</h3>
                  
                  <div className="space-y-1.5 md:space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between items-center">
                      <span>{t('card.age')}:</span>
                      <span className="font-medium text-[#e8e8e8]">{person.age}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>{t('card.location')}:</span>
                      <span className="font-medium text-[#e8e8e8]">{person.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>{t('card.date')}:</span>
                      <span className="font-medium text-[#a01010]">{person.date}</span>
                    </div>
                  </div>
                </div>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e]/0 via-transparent to-[#8b0000]/0 group-hover:from-[#1a4d2e]/20 group-hover:to-[#8b0000]/20 transition-all duration-700 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination - Dark Theme */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl bg-secondary/80 hover:bg-secondary border border-border disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-sm md:text-base"
          >
            {isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            <span>{t('pagination.previous')}</span>
          </motion.button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-lg transition-all duration-300 text-sm md:text-base ${
                  currentPage === index
                    ? 'bg-gradient-to-br from-[#1a4d2e] to-[#8b0000] text-[#e8e8e8] shadow-[0_0_20px_rgba(139,0,0,0.4)]'
                    : 'bg-secondary/80 hover:bg-secondary border border-border'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl bg-secondary/80 hover:bg-secondary border border-border disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-sm md:text-base"
          >
            <span>{t('pagination.next')}</span>
            {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </motion.button>
        </motion.div>

        {/* CTA to Submit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mt-12 md:mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNavigateToSubmit}
            className="px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-[#1a4d2e] to-[#8b0000] text-[#e8e8e8] font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(139,0,0,0.4)] transition-all duration-500 text-sm md:text-base border border-[#8b0000]/50"
          >
            {t('submit.title')}
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
