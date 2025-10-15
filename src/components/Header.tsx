import { useState, useEffect } from 'react';
import Logo from './Logo';
import { getCurrentLanguage, isRTL, getDirectionalClass } from '../utils/rtlUtils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or default to Arabic
    return localStorage.getItem('language') || 'ar';
  });

  const translations = {
    ar: {
      home: 'الصفحة الرئيسية',
      howItWorks: 'كيف يعمل',
      contact: 'تواصل معنا',
      tryNow: `جرب الآن`
    },
    en: {
      home: 'Home',
      howItWorks: 'How It Works',
      contact: 'Contact Us',
      tryNow: 'Try Now'
    }
  };

  const currentTranslations = translations[language as keyof typeof translations];

  const toggleLanguage = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLanguage);
    
    // Save to localStorage
    localStorage.setItem('language', newLanguage);
    
    // Update body direction
    document.body.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.body.setAttribute('dir', newLanguage === 'ar' ? 'rtl' : 'ltr');
    
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('languageChange', { 
      detail: { language: newLanguage } 
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Set initial language direction
  useEffect(() => {
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-xl border-b border-gray-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center ${getDirectionalClass('space-x-8', 'space-x-8')}`}>
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group px-3 py-2 cursor-pointer"
            >
              {currentTranslations.home}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('how-it-works');
              }}
              className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group px-3 py-2 cursor-pointer"
            >
              {currentTranslations.howItWorks}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group px-3 py-2 cursor-pointer"
            >
              {currentTranslations.contact}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Right Side */}
          <div className={`flex items-center ${getDirectionalClass('space-x-4', 'space-x-4')}`}>
            {/* Language Switcher */}
            <div className="hidden md:flex items-center bg-gray-50 rounded-full p-1">
              <button 
                onClick={toggleLanguage}
                className={`flex items-center ${language === 'ar' ? 'space-x-2' : 'space-x-2'} px-3 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  language === 'ar' 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-gray-600 hover:text-primary hover:bg-white/80'
                }`}
              >
                <span className="text-base">🇸🇦</span>
                <span className="hidden sm:inline">العربية</span>
              </button>
              <button 
                onClick={toggleLanguage}
                className={`flex items-center ${language === 'en' ? 'space-x-2' : 'space-x-2'} px-3 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  language === 'en' 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-gray-600 hover:text-primary hover:bg-white/80'
                }`}
              >
                <span className="text-base">🇺🇸</span>
                <span className="hidden sm:inline">English</span>
              </button>
            </div>

            {/* CTA Button */}
            <button className={`hidden md:flex bg-gradient-to-r from-primary to-secondary text-white px-6 py-2.5 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg text-sm items-center ${language === 'ar' ? 'space-x-2' : 'space-x-2'}`}>
              {currentTranslations.tryNow}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-80 opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-gray-200 bg-white/98 backdrop-blur-xl rounded-xl mt-2 shadow-lg">
            <div className={`px-4 ${language === 'ar' ? 'space-y-3' : 'space-y-3'}`}>
              <a 
                href="#home" 
                className="block text-gray-700 hover:text-primary transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                  setIsMenuOpen(false);
                }}
              >
                {currentTranslations.home}
              </a>
              <a 
                href="#how-it-works" 
                className="block text-gray-700 hover:text-primary transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('how-it-works');
                  setIsMenuOpen(false);
                }}
              >
                {currentTranslations.howItWorks}
              </a>
              <a 
                href="#contact" 
                className="block text-gray-700 hover:text-primary transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
              >
                {currentTranslations.contact}
              </a>
            </div>
            
            <div className="px-4 pt-3 border-t border-gray-200">
              <button className={`w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300 shadow-md flex items-center ${getDirectionalClass('space-x-2', 'space-x-2')}`}>
                {currentTranslations.tryNow}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
