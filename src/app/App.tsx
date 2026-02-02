import { useState } from 'react';
import { LanguageProvider } from '@/app/contexts/LanguageContext';
import { ThemeProvider } from '@/app/contexts/ThemeContext';
import { Header } from '@/app/components/Header';
import { HomePage } from '@/app/pages/HomePage';
import { ProfilePage } from '@/app/pages/ProfilePage';
import { SubmitPage } from '@/app/pages/SubmitPage';
import { FallenPerson } from '@/app/data/mockData';

type Page = 'home' | 'profile' | 'submit';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedPerson, setSelectedPerson] = useState<FallenPerson | null>(null);

  const handleSelectPerson = (person: FallenPerson) => {
    setSelectedPerson(person);
    setCurrentPage('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentPage('home');
    setSelectedPerson(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header onNavigate={handleNavigate} />
          
          {currentPage === 'home' && (
            <HomePage
              onSelectPerson={handleSelectPerson}
              onNavigateToSubmit={() => handleNavigate('submit')}
            />
          )}
          
          {currentPage === 'profile' && selectedPerson && (
            <ProfilePage person={selectedPerson} onBack={handleBack} />
          )}
          
          {currentPage === 'submit' && (
            <SubmitPage onBack={handleBack} />
          )}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
