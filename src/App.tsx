import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  // Handle language direction changes
  useEffect(() => {
    const handleLanguageChange = () => {
      const language = localStorage.getItem('language') || 'ar';
      document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.body.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    };

    // Listen for language changes
    window.addEventListener('languageChange', handleLanguageChange);
    
    // Set initial language
    handleLanguageChange();

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  return (
    <div id="home" className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;