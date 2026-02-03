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
    
    // Candle Section
    'candle.title': 'Light a Candle',
    'candle.subtitle': 'Honor their memory with a moment of light',
    'candle.button': 'Light a Candle',
    'candle.total': 'Candles Lit',
    'candle.wait': 'You can light another candle in',
    'candle.minutes': 'minutes',
    
    // Profile Page
    'profile.share': 'Share Their Story',
    'profile.biography': 'Biography',
    'profile.gallery': 'Gallery',
    'profile.back': 'Back to Memorial',
    
    // Submit Page
    'submit.title': 'Secure Submission Portal',
    'submit.subtitle': 'Help us honor those who lost their lives. Your privacy is protected.',
    'submit.form.firstname': 'First Name',
    'submit.form.lastname': 'Last Name',
    'submit.form.gender': 'Gender',
    'submit.form.gender.male': 'Male',
    'submit.form.gender.female': 'Female',
    'submit.form.gender.other': 'Other',
    'submit.form.age': 'Age',
    'submit.form.javid.date': 'Date of Loss (Javid Date)',
    'submit.form.javid.location': 'City/Province',
    'submit.form.location.description': 'Location Description',
    'submit.form.bio': 'Short Biography',
    'submit.form.description': 'Detailed Description',
    'submit.form.status': 'Status',
    'submit.form.status.child': 'Was a Child',
    'submit.form.status.executed': 'Was Executed',
    'submit.form.status.arrested': 'Was Arrested',
    'submit.form.status.missing': 'Is Missing',
    'submit.form.sources': 'Sources & Links',
    'submit.form.sources.add': 'Add Link',
    'submit.form.sources.placeholder': 'Enter URL (Twitter, Instagram, News article, etc.)',
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
    
    // Candle Section
    'candle.title': 'روشن کردن شمع',
    'candle.subtitle': 'با یک لحظه نور به یاد آنها ادای احترام کنید',
    'candle.button': 'روشن کردن شمع',
    'candle.total': 'شمع‌های روشن شده',
    'candle.wait': 'می‌توانید شمع دیگری را روشن کنید در',
    'candle.minutes': 'دقیقه',
    
    // Profile Page
    'profile.share': 'داستان آنها را به اشتراک بگذارید',
    'profile.biography': 'زندگی‌نامه',
    'profile.gallery': 'گالری',
    'profile.back': 'بازگشت به یادبود',
    
    // Submit Page
    'submit.title': 'پورتال ارسال امن',
    'submit.subtitle': 'به ما کمک کنید تا به یاد کسانی که جان خود را از دست دادند، ادای احترام کنیم. حریم خصوصی شما محافظت می‌شود.',
    'submit.form.firstname': 'نام',
    'submit.form.lastname': 'نام خانوادگی',
    'submit.form.gender': 'جنسیت',
    'submit.form.gender.male': 'مرد',
    'submit.form.gender.female': 'زن',
    'submit.form.gender.other': 'غیره',
    'submit.form.age': 'سن',
    'submit.form.javid.date': 'تاریخ جاودانگی',
    'submit.form.javid.location': 'شهر/استان',
    'submit.form.location.description': 'توضیحات مکان',
    'submit.form.bio': 'زندگی‌نامه کوتاه',
    'submit.form.description': 'توضیحات کامل',
    'submit.form.status': 'وضعیت',
    'submit.form.status.child': 'کودک بود',
    'submit.form.status.executed': 'اعدام شد',
    'submit.form.status.arrested': 'بازداشت شد',
    'submit.form.status.missing': 'مفقود است',
    'submit.form.sources': 'منابع و لینک‌ها',
    'submit.form.sources.add': 'افزودن لینک',
    'submit.form.sources.placeholder': 'لینک وارد کنید (توییتر، اینستاگرام، مقاله خبری و غیره)',
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
    
    // Candle Section
    'candle.title': 'أشعل شمعة',
    'candle.subtitle': 'كرم ذكراهم بلحظة من النور',
    'candle.button': 'أشعل شمعة',
    'candle.total': 'الشموع المضاءة',
    'candle.wait': 'يمكنك إشعال شمعة أخرى في',
    'candle.minutes': 'دقائق',
    
    // Profile Page
    'profile.share': 'شارك قصتهم',
    'profile.biography': 'السيرة الذاتية',
    'profile.gallery': 'المعرض',
    'profile.back': 'العودة إلى النصب التذكاري',
    
    // Submit Page
    'submit.title': 'بوابة التقديم الآمنة',
    'submit.subtitle': 'ساعدنا في تكريم أولئك الذين فقدوا حياتهم. خصوصيتك محمية.',
    'submit.form.firstname': 'الاسم الأول',
    'submit.form.lastname': 'اسم العائلة',
    'submit.form.gender': 'الجنس',
    'submit.form.gender.male': 'ذكر',
    'submit.form.gender.female': 'أنثى',
    'submit.form.gender.other': 'آخر',
    'submit.form.age': 'العمر',
    'submit.form.javid.date': 'تاريخ الفقدان',
    'submit.form.javid.location': 'المدينة/المحافظة',
    'submit.form.location.description': 'وصف الموقع',
    'submit.form.bio': 'سيرة ذاتية مختصرة',
    'submit.form.description': 'وصف مفصل',
    'submit.form.status': 'الحالة',
    'submit.form.status.child': 'كان طفلاً',
    'submit.form.status.executed': 'تم إعدامه',
    'submit.form.status.arrested': 'تم اعتقاله',
    'submit.form.status.missing': 'مفقود',
    'submit.form.sources': 'المصادر والروابط',
    'submit.form.sources.add': 'إضافة رابط',
    'submit.form.sources.placeholder': 'أدخل الرابط (تويتر، إنستغرام، مقالة إخبارية، إلخ)',
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
    
    // Candle Section
    'candle.title': 'Kerze anzünden',
    'candle.subtitle': 'Ehre ihr Andenken mit einem Moment des Lichts',
    'candle.button': 'Kerze anzünden',
    'candle.total': 'Angezündete Kerzen',
    'candle.wait': 'Sie können eine weitere Kerze anzünden in',
    'candle.minutes': 'Minuten',
    
    // Profile Page
    'profile.share': 'Teile ihre Geschichte',
    'profile.biography': 'Biografie',
    'profile.gallery': 'Galerie',
    'profile.back': 'Zurück zum Denkmal',
    
    // Submit Page
    'submit.title': 'Sicheres Einreichungsportal',
    'submit.subtitle': 'Helfen Sie uns, diejenigen zu ehren, die ihr Leben verloren haben. Ihre Privatsphäre ist geschützt.',
    'submit.form.firstname': 'Vorname',
    'submit.form.lastname': 'Nachname',
    'submit.form.gender': 'Geschlecht',
    'submit.form.gender.male': 'Männlich',
    'submit.form.gender.female': 'Weiblich',
    'submit.form.gender.other': 'Andere',
    'submit.form.age': 'Alter',
    'submit.form.javid.date': 'Datum des Verlustes',
    'submit.form.javid.location': 'Stadt/Provinz',
    'submit.form.location.description': 'Ortsbeschreibung',
    'submit.form.bio': 'Kurze Biografie',
    'submit.form.description': 'Detaillierte Beschreibung',
    'submit.form.status': 'Status',
    'submit.form.status.child': 'War ein Kind',
    'submit.form.status.executed': 'Wurde hingerichtet',
    'submit.form.status.arrested': 'Wurde verhaftet',
    'submit.form.status.missing': 'Wird vermisst',
    'submit.form.sources': 'Quellen & Links',
    'submit.form.sources.add': 'Link hinzufügen',
    'submit.form.sources.placeholder': 'URL eingeben (Twitter, Instagram, Nachrichtenartikel, etc.)',
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