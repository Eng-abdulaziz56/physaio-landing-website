import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Logo size="lg" className="text-white" />
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                مساعدك الإفتراضي في رحلة علاجك الطبيعي. نحن نستخدم أحدث تقنيات الذكاء الاصطناعي لمساعدتك في الحصول على أفضل نتائج العلاج الطبيعي في منزلك.
              </p>

              {/* Newsletter Signup */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-bold mb-3">ابق على اطلاع</h4>
                <p className="text-gray-300 text-sm mb-4">احصل على آخر التحديثات والتطورات</p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300">
                    اشترك
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    الصفحة الرئيسية
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    كيف يعمل
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    تواصل معنا
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    الأسئلة الشائعة
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    سياسة الخصوصية
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6">تواصل معنا</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">البريد الإلكتروني</p>
                    <p className="text-white">info@physaio.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-secondary to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white">📱</span>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">الهاتف</p>
                    <p className="text-white">+966 XX XXX XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">الموقع</p>
                    <p className="text-white">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h5 className="text-lg font-semibold mb-4">تابعنا</h5>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                    <span className="text-white text-xl">📘</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                    <span className="text-white text-xl">📷</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                    <span className="text-white text-xl">🐦</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-red-500/25">
                    <span className="text-white text-xl">📺</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-right">
              <p className="text-gray-400">
                © 2024 فيزايو. جميع الحقوق محفوظة.
              </p>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-2xl">🇸🇦</span>
                <span>صنع في السعودية بكل فخر</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">متاح 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
