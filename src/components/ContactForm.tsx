import { useState } from 'react';
import logoImage from '../assets/logo.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: '', phone: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl text-white">✅</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              تم التسجيل بنجاح!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              شكراً لك! سنتواصل معك قريباً لإطلاعك على آخر التطورات.
            </p>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold">
              مرحباً بك في عائلة فيزايو! 🎉
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-secondary/10 text-secondary px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-secondary rounded-full mr-3 animate-pulse"></span>
            انضم إلى القائمة المبكرة
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            سجل اهتمامك
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              لتجربة خدماتنا
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            سيتم إطلاق تطبيق "فيزايو" قريباً، ويمكنك التسجيل الآن لتكون من بين أوائل المستخدمين وتجربة التكنولوجيا المستقبلية للعلاج الطبيعي.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Form */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Form Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5"></div>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    كن من الأوائل
                  </h3>
                  <p className="text-gray-600">
                    احجز مكانك في المستقبل الصحي
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-3">
                        الاسم الثلاثي *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-right bg-gray-50/50 hover:bg-white"
                          placeholder="أدخل اسمك الثلاثي"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          👤
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                        رقم الجوال *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-right bg-gray-50/50 hover:bg-white"
                          placeholder="أدخل رقم جوالك"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          📱
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                        اكتب لنا رسالة (اختياري)
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-right resize-none bg-gray-50/50 hover:bg-white"
                          placeholder="اكتب رسالتك هنا..."
                        />
                        <div className="absolute left-4 top-4 text-gray-400">
                          💬
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white py-5 px-8 rounded-2xl text-xl font-bold hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          سجل الآن
                          <span className="group-hover:translate-x-2 transition-transform duration-300">🚀</span>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">🔒</span>
                      <span>آمن ومحمي</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">⚡</span>
                      <span>رد فوري</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">🎯</span>
                      <span>مخصص لك</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            {/* Main Illustration */}
            <div className="relative mx-auto w-full max-w-lg">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center space-y-6">
                  {/* App Preview */}
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    <span className="text-5xl relative z-10">🏃‍♂️</span>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <img src={logoImage} alt="AI" className="h-5 w-auto" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    مستقبل العلاج الطبيعي
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    انضم إلى الثورة التكنولوجية في العلاج الطبيعي واستمتع بتجربة شخصية متقدمة مع الذكاء الاصطناعي.
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4">
                      <div className="text-2xl mb-2">🤖</div>
                      <div className="text-sm font-semibold text-gray-900">ذكاء اصطناعي</div>
                      <div className="text-xs text-gray-600">مراقبة ذكية</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4">
                      <div className="text-2xl mb-2">📊</div>
                      <div className="text-sm font-semibold text-gray-900">تتبع دقيق</div>
                      <div className="text-xs text-gray-600">إحصائيات مفصلة</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4">
                      <div className="text-2xl mb-2">👨‍⚕️</div>
                      <div className="text-sm font-semibold text-gray-900">أطباء متخصصون</div>
                      <div className="text-xs text-gray-600">متابعة مستمرة</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4">
                      <div className="text-2xl mb-2">🏠</div>
                      <div className="text-sm font-semibold text-gray-900">في منزلك</div>
                      <div className="text-xs text-gray-600">راحة تامة</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">1000+</div>
                      <div className="text-xs text-gray-600">مستخدم</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">95%</div>
                      <div className="text-xs text-gray-600">دقة</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-500">24/7</div>
                      <div className="text-xs text-gray-600">متاح</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-2xl flex items-center justify-center text-white text-2xl animate-bounce">
                ✨
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white animate-bounce delay-500">
                💪
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
