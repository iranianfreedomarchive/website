import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fa' | 'ar' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'site.title': 'Iran Freedom Archive',
    'language': 'Language',
    
    // Home Page
    'home.hero.title': 'In Memory of The Fallen',
    'home.hero.subtitle': 'Honoring those who gave their lives for freedom and human rights',
    'stats.lives.lost': 'Lives Lost',
    'stats.injured': 'Injured',
    'stats.arrests': 'Arrests',
    'home.fallen.title': 'The Fallen',
    'home.fallen.subtitle': 'Each life was a universe of dreams, hopes, and love',
    'card.age': 'Age',
    'card.location': 'Location',
    'card.date': 'Date',
    'pagination.previous': 'Previous',
    'pagination.next': 'Next',
    
    // Profile Page
    'profile.share': 'Share Their Story',
    'profile.biography': 'Biography',
    'profile.gallery': 'Gallery',
    'profile.back': 'Back to Memorial',
    
    // Submit Page
    'submit.title': 'Secure Submission Portal',
    'submit.subtitle': 'Help us honor those who lost their lives. Your privacy is protected.',
    'submit.form.name': 'Full Name',
    'submit.form.age': 'Age',
    'submit.form.location': 'Location',
    'submit.form.date': 'Date of Loss',
    'submit.form.story': 'Their Story',
    'submit.form.contact': 'Contact (Optional & Encrypted)',
    'submit.form.submit': 'Submit Securely',
    'submit.security.title': 'Your Security',
    'submit.security.encryption': 'End-to-End Encryption',
    'submit.security.encryption.desc': 'All submissions are encrypted',
    'submit.security.anonymity': 'Strict Anonymity',
    'submit.security.anonymity.desc': 'No tracking or identification',
    'submit.security.opensource': 'Open Source',
    'submit.security.opensource.desc': 'Fully auditable codebase',
    
    // Footer
    'footer.github': 'View on GitHub',
    'footer.candle': 'Light a Digital Candle',
    'footer.rights': '2026 Iran Freedom Archive. In memory of all who fought for freedom.',
  },
  fa: {
    // Header (Persian)
    'site.title': 'آرشیو آزادی ایران',
    'language': 'زبان',
    
    // Home Page
    'home.hero.title': 'به یاد فرزندان از دست رفته',
    'home.hero.subtitle': 'به احترام کسانی که جان خود را برای آزادی و حقوق بشر فدا کردند',
    'stats.lives.lost': 'جان باختگان',
    'stats.injured': 'مجروحان',
    'stats.arrests': 'بازداشت‌شدگان',
    'home.fallen.title': 'فرزندان از دست رفته',
    'home.fallen.subtitle': 'هر زندگی جهانی از رویاها، امیدها و عشق بود',
    'card.age': 'سن',
    'card.location': 'موقعیت',
    'card.date': 'تاریخ',
    'pagination.previous': 'قبلی',
    'pagination.next': 'بعدی',
    
    // Profile Page
    'profile.share': 'داستان آنها را به اشتراک بگذارید',
    'profile.biography': 'زندگی‌نامه',
    'profile.gallery': 'گالری',
    'profile.back': 'بازگشت به یادبود',
    
    // Submit Page
    'submit.title': 'پورتال ارسال امن',
    'submit.subtitle': 'به ما کمک کنید تا به یاد کسانی که جان خود را از دست دادند، ادای احترام کنیم. حریم خصوصی شما محافظت می‌شود.',
    'submit.form.name': 'نام کامل',
    'submit.form.age': 'سن',
    'submit.form.location': 'موقعیت',
    'submit.form.date': 'تاریخ از دست دادن',
    'submit.form.story': 'داستان آنها',
    'submit.form.contact': 'تماس (اختیاری و رمزگذاری شده)',
    'submit.form.submit': 'ارسال امن',
    'submit.security.title': 'امنیت شما',
    'submit.security.encryption': 'رمزگذاری سرتاسر',
    'submit.security.encryption.desc': 'همه ارسال‌ها رمزگذاری می‌شوند',
    'submit.security.anonymity': 'ناشناس بودن کامل',
    'submit.security.anonymity.desc': 'بدون ردیابی یا شناسایی',
    'submit.security.opensource': 'متن‌باز',
    'submit.security.opensource.desc': 'کد قابل بررسی کامل',
    
    // Footer
    'footer.github': 'مشاهده در GitHub',
    'footer.candle': 'روشن کردن شمع دیجیتال',
    'footer.rights': '۲۰۲۶ آرشیو آزادی ایران. به یاد همه کسانی که برای آزادی جنگیدند.',
  },
  ar: {
    // Header (Arabic)
    'site.title': 'أرشيف الحرية الإيراني',
    'language': 'اللغة',
    
    // Home Page
    'home.hero.title': 'في ذكرى الشهداء',
    'home.hero.subtitle': 'تكريماً لأولئك الذين ضحوا بحياتهم من أجل الحرية وحقوق الإنسان',
    'stats.lives.lost': 'الأرواح المفقودة',
    'stats.injured': 'الجرحى',
    'stats.arrests': 'الاعتقالات',
    'home.fallen.title': 'الشهداء',
    'home.fallen.subtitle': 'كل حياة كانت عالماً من الأحلام والآمال والحب',
    'card.age': 'العمر',
    'card.location': 'الموقع',
    'card.date': 'التاريخ',
    'pagination.previous': 'السابق',
    'pagination.next': 'التالي',
    
    // Profile Page
    'profile.share': 'شارك قصتهم',
    'profile.biography': 'السيرة الذاتية',
    'profile.gallery': 'المعرض',
    'profile.back': 'العودة إلى النصب التذكاري',
    
    // Submit Page
    'submit.title': 'بوابة التقديم الآمنة',
    'submit.subtitle': 'ساعدنا في تكريم أولئك الذين فقدوا حياتهم. خصوصيتك محمية.',
    'submit.form.name': 'الاسم الكامل',
    'submit.form.age': 'العمر',
    'submit.form.location': 'الموقع',
    'submit.form.date': 'تاريخ الفقدان',
    'submit.form.story': 'قصتهم',
    'submit.form.contact': 'الاتصال (اختياري ومشفر)',
    'submit.form.submit': 'إرسال بشكل آمن',
    'submit.security.title': 'أمنك',
    'submit.security.encryption': 'التشفير الكامل',
    'submit.security.encryption.desc': 'جميع الطلبات مشفرة',
    'submit.security.anonymity': 'السرية التامة',
    'submit.security.anonymity.desc': 'لا تتبع أو تعريف',
    'submit.security.opensource': 'المصدر المفتوح',
    'submit.security.opensource.desc': 'قاعدة كود قابلة للتدقيق بالكامل',
    
    // Footer
    'footer.github': 'عرض على GitHub',
    'footer.candle': 'أشعل شمعة رقمية',
    'footer.rights': '٢٠٢٦ أرشيف الحرية الإيراني. في ذكرى كل من قاتل من أجل الحرية.',
  },
  de: {
    // Header (German)
    'site.title': 'Iran Freiheitsarchiv',
    'language': 'Sprache',
    
    // Home Page
    'home.hero.title': 'In Erinnerung an die Gefallenen',
    'home.hero.subtitle': 'In Ehren derer, die ihr Leben für Freiheit und Menschenrechte gaben',
    'stats.lives.lost': 'Verlorene Leben',
    'stats.injured': 'Verletzte',
    'stats.arrests': 'Verhaftungen',
    'home.fallen.title': 'Die Gefallenen',
    'home.fallen.subtitle': 'Jedes Leben war ein Universum voller Träume, Hoffnungen und Liebe',
    'card.age': 'Alter',
    'card.location': 'Ort',
    'card.date': 'Datum',
    'pagination.previous': 'Zurück',
    'pagination.next': 'Weiter',
    
    // Profile Page
    'profile.share': 'Teile ihre Geschichte',
    'profile.biography': 'Biografie',
    'profile.gallery': 'Galerie',
    'profile.back': 'Zurück zum Denkmal',
    
    // Submit Page
    'submit.title': 'Sicheres Einreichungsportal',
    'submit.subtitle': 'Helfen Sie uns, diejenigen zu ehren, die ihr Leben verloren haben. Ihre Privatsphäre ist geschützt.',
    'submit.form.name': 'Vollständiger Name',
    'submit.form.age': 'Alter',
    'submit.form.location': 'Ort',
    'submit.form.date': 'Datum des Verlustes',
    'submit.form.story': 'Ihre Geschichte',
    'submit.form.contact': 'Kontakt (Optional & Verschlüsselt)',
    'submit.form.submit': 'Sicher einreichen',
    'submit.security.title': 'Ihre Sicherheit',
    'submit.security.encryption': 'Ende-zu-Ende-Verschlüsselung',
    'submit.security.encryption.desc': 'Alle Einreichungen sind verschlüsselt',
    'submit.security.anonymity': 'Strikte Anonymität',
    'submit.security.anonymity.desc': 'Keine Verfolgung oder Identifizierung',
    'submit.security.opensource': 'Open Source',
    'submit.security.opensource.desc': 'Vollständig prüfbare Codebasis',
    
    // Footer
    'footer.github': 'Auf GitHub ansehen',
    'footer.candle': 'Zünde eine digitale Kerze an',
    'footer.rights': '2026 Iran Freiheitsarchiv. In Erinnerung an alle, die für Freiheit kämpften.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'fa' || language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
