import { motion } from 'motion/react';

interface RealisticCandleProps {
  isLit: boolean;
}

export function RealisticCandle({ isLit }: RealisticCandleProps) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Candle Flame */}
      {isLit && (
        <>
          {/* Outer Glow */}
          <motion.div
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-8 md:-top-12 w-24 h-24 md:w-32 md:h-32 rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(255, 140, 0, 0.6) 0%, rgba(139, 0, 0, 0.4) 40%, transparent 70%)',
            }}
          />
          
          {/* Main Flame */}
          <motion.div
            animate={{
              scaleY: [1, 1.1, 0.95, 1.05, 1],
              scaleX: [1, 0.95, 1.05, 0.98, 1],
              y: [0, -2, 0, -1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-6 md:-top-8 w-6 h-10 md:w-8 md:h-14"
            style={{
              background: 'linear-gradient(to top, #8b0000 0%, #a01010 30%, #ff8c00 60%, #ffd700 90%)',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              filter: 'blur(0.5px)',
            }}
          />
          
          {/* Inner Flame Core */}
          <motion.div
            animate={{
              opacity: [0.8, 1, 0.8],
              scaleY: [1, 1.15, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-5 md:-top-6 w-3 h-6 md:w-4 md:h-8"
            style={{
              background: 'linear-gradient(to top, #ff8c00 0%, #ffd700 50%, #fff 90%)',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            }}
          />
          
          {/* Flame Tip Flicker */}
          <motion.div
            animate={{
              opacity: [0.6, 1, 0.7, 1],
              scale: [0.8, 1, 0.9, 1],
              y: [-1, -3, -2, -3],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-8 md:-top-10 w-2 h-3 md:w-3 md:h-4 bg-yellow-100 rounded-full blur-sm"
          />
        </>
      )}
      
      {/* Candle Wick */}
      <div className="relative z-10">
        <div 
          className="w-1 h-3 md:h-4 mx-auto"
          style={{
            background: isLit ? 'linear-gradient(to bottom, #2a2a2a, #1a1a1a)' : '#3a3a3a',
          }}
        />
      </div>
      
      {/* Candle Body */}
      <motion.div
        animate={isLit ? {
          boxShadow: [
            '0 0 20px rgba(139, 0, 0, 0.3), 0 0 40px rgba(139, 0, 0, 0.1)',
            '0 0 30px rgba(139, 0, 0, 0.4), 0 0 60px rgba(139, 0, 0, 0.15)',
            '0 0 20px rgba(139, 0, 0, 0.3), 0 0 40px rgba(139, 0, 0, 0.1)',
          ]
        } : {}}
        transition={{
          duration: 3,
          repeat: isLit ? Infinity : 0,
          ease: "easeInOut"
        }}
        className="relative w-16 h-32 md:w-20 md:h-40 rounded-t-lg"
        style={{
          background: 'linear-gradient(135deg, #f5f5dc 0%, #e8e8d0 50%, #d4d4bc 100%)',
          boxShadow: 'inset -2px 0 8px rgba(0, 0, 0, 0.3), inset 2px 0 8px rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Candle Texture/Drips */}
        {isLit && (
          <>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: '8px' }}
              transition={{ duration: 4, ease: "easeOut" }}
              className="absolute top-0 left-2 w-1 bg-gradient-to-b from-transparent via-white/40 to-transparent rounded-full"
            />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: '12px' }}
              transition={{ duration: 5, ease: "easeOut", delay: 1 }}
              className="absolute top-0 right-3 w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-full"
            />
          </>
        )}
      </motion.div>
      
      {/* Candle Base Shadow */}
      <div 
        className="w-20 h-2 md:w-24 md:h-3 rounded-full blur-sm"
        style={{
          background: 'radial-gradient(ellipse, rgba(0, 0, 0, 0.6), transparent)',
        }}
      />
    </div>
  );
}
