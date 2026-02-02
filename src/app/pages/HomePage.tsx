import { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { mockFallenData, mockStats, FallenPerson } from '@/app/data/mockData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

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
      const duration = 2000;
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
      {/* Hero Section with Parallax */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#10b981]/10 via-background to-[#ef4444]/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#10b981] via-foreground to-[#ef4444] bg-clip-text text-transparent"
          >
            {t('home.hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12"
          >
            {t('home.hero.subtitle')}
          </motion.p>

          {/* Live Data Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { label: t('stats.lives.lost'), value: mockStats.livesLost, color: 'from-[#ef4444] to-red-600' },
              { label: t('stats.injured'), value: mockStats.injured, color: 'from-orange-500 to-yellow-500' },
              { label: t('stats.arrests'), value: mockStats.arrests, color: 'from-[#10b981] to-emerald-600' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative group"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>
                      <AnimatedCounter target={stat.value} />
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Fallen Grid Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('home.fallen.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('home.fallen.subtitle')}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentData.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => onSelectPerson(person)}
              className="cursor-pointer group"
            >
              {/* Legacy Card with Glassmorphism */}
              <div className="relative bg-card/60 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={person.imageUrl}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Color Accent Strip */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#10b981] via-white to-[#ef4444]" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{person.name}</h3>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between items-center">
                      <span>{t('card.age')}:</span>
                      <span className="font-medium text-foreground">{person.age}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>{t('card.location')}:</span>
                      <span className="font-medium text-foreground">{person.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>{t('card.date')}:</span>
                      <span className="font-medium text-[#ef4444]">{person.date}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/0 via-transparent to-[#ef4444]/0 group-hover:from-[#10b981]/10 group-hover:to-[#ef4444]/10 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            <span>{t('pagination.previous')}</span>
          </motion.button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-10 h-10 rounded-lg transition-colors ${
                  currentPage === index
                    ? 'bg-gradient-to-br from-[#10b981] to-[#ef4444] text-white'
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNavigateToSubmit}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#10b981] to-[#ef4444] text-white font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            {t('submit.title')}
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
