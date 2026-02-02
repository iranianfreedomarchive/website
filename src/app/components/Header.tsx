import { useLanguage, Language } from '@/app/contexts/LanguageContext';
import { useTheme } from '@/app/contexts/ThemeContext';
import { Moon, Sun, Globe } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'profile' | 'submit') => void;
}

const languageFlags: Record<Language, string> = {
  en: '🇬🇧',
  fa: '🇮🇷',
  ar: '🇸🇦',
  de: '🇩🇪',
};

const languageNames: Record<Language, string> = {
  en: 'English',
  fa: 'فارسی',
  ar: 'العربية',
  de: 'Deutsch',
};

export function Header({ onNavigate }: HeaderProps) {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#10b981] via-white to-[#ef4444] p-[2px]">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <span className="text-xl">🕊️</span>
            </div>
          </div>
          <span className="font-semibold tracking-tight">{t('site.title')}</span>
        </motion.button>

        {/* Right Side Controls */}
        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative group">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{languageFlags[language]}</span>
            </motion.button>
            
            {/* Dropdown */}
            <div className="absolute top-full mt-2 right-0 min-w-[160px] bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {(Object.keys(languageFlags) as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-accent transition-colors ${
                    language === lang ? 'bg-accent' : ''
                  } ${lang === 'en' ? 'rounded-t-lg' : ''} ${lang === 'de' ? 'rounded-b-lg' : ''}`}
                >
                  <span className="text-lg">{languageFlags[lang]}</span>
                  <span className="text-sm">{languageNames[lang]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
