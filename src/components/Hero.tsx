
import logoImage from '../assets/logo.png';
import { getCurrentLanguage, getDirectionalClass } from '../utils/rtlUtils';

const Hero = () => {
  const language = getCurrentLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-light/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className={`${language === 'ar' ? 'text-right' : 'text-left'} space-y-8`}>
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
              <span className="text-white text-sm font-medium">🚀 تقنية الذكاء الاصطناعي المتطورة</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              <span className="block">مساعدك</span>
              <span className="block bg-gradient-to-r from-light to-white bg-clip-text text-transparent">
                الإفتراضي
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl">في رحلة علاجك الطبيعي</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              باستخدام تقنية الذكاء الاصطناعي المتطورة، نساعدك لأداء تمارين علاجك الطبيعي في منزلك بدقة عالية.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 pt-4 ${getDirectionalClass('space-x-6', 'space-x-6')}`}>
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative bg-white text-primary px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-white/25 cursor-pointer"
              >
                <span className="relative z-10">ابدأ الآن مجاناً</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex items-center justify-center font-bold">ابدأ الآن مجاناً</span>
              </button>
              
              <button className="group bg-transparent border-2 border-white/50 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                <span className={`flex items-center justify-center ${getDirectionalClass('gap-3', 'gap-3')}`}>
                  شاهد العرض التوضيحي
                  <span className="group-hover:translate-x-2 transition-transform duration-300">▶️</span>
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-white/70 text-sm">مستخدم نشط</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-white/70 text-sm">معدل الدقة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/70 text-sm">متاح دائماً</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            {/* Main Phone/Device Mockup */}
            <div className="relative mx-auto w-80 h-[600px]">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-4 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2.5rem] relative overflow-hidden">
                  {/* App Interface Mockup */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <div className="w-2 h-2 bg-secondary/50 rounded-full"></div>
                        <div className="w-2 h-2 bg-secondary/25 rounded-full"></div>
                      </div>
                      <img src={logoImage} alt="Physaio" className="h-4 w-auto" />
                      <div className="text-white text-xs">100%</div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 space-y-6">
                      {/* Exercise Card */}
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-white font-bold">تمرين الكتف</span>
                          <span className="text-secondary text-sm">3/10</span>
                        </div>
                        <div className="space-y-3">
                          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full bg-secondary rounded-full w-3/10 animate-pulse"></div>
                          </div>
                          <div className="text-white/80 text-sm">اتبع الحركة كما هو موضح</div>
                        </div>
                      </div>

                      {/* AI Feedback */}
                      <div className="bg-gradient-to-r from-secondary/30 to-primary/30 backdrop-blur-sm rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">🤖</span>
                          </div>
                          <span className="text-white font-semibold">ملاحظة الذكاء الاصطناعي</span>
                        </div>
                        <p className="text-white/90 text-sm">ممتاز! الحركة صحيحة 100%</p>
                      </div>

                      {/* Progress Circle */}
                      <div className="flex justify-center">
                        <div className="relative w-32 h-32">
                          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none"/>
                            <circle cx="60" cy="60" r="50" stroke="#1AD84B" strokeWidth="8" fill="none" 
                                    strokeDasharray="314" strokeDashoffset="157" strokeLinecap="round"
                                    className="animate-pulse"/>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">75%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="flex justify-around pt-6 border-t border-white/20">
                      <div className="text-secondary text-lg">🏠</div>
                      <div className="text-white/50 text-lg">📊</div>
                      <div className="text-white/50 text-lg">👤</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white text-2xl animate-bounce">
                🎯
              </div>
              <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-light rounded-full flex items-center justify-center text-primary text-xl animate-bounce delay-500">
                💪
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white animate-pulse">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">اكتشف المزيد</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
