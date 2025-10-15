import { useState } from 'react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'قم بإعداد جهازك',
      description: 'ضع جهازك اللوحي أو هاتفك الذكي (على بعد مترين) حتى يتمكن الذكاء الاصطناعي من مراقبة حركاتك بشكل فعال.',
      icon: '📱',
      color: 'from-blue-500 to-cyan-500',
      details: [
        'وضع الجهاز على ارتفاع مناسب',
        'تأكد من إضاءة جيدة في المكان',
        'ربط الجهاز بالإنترنت'
      ]
    },
    {
      number: '02',
      title: 'قم بأداء تمارينك',
      description: 'اتبع التعليمات التي تظهر على شاشة التطبيق، حيث تتبع خوارزميات الذكاء الاصطناعي صحة أدائك للتمرين وتقدم لك ملاحظات فورية.',
      icon: '🏃‍♂️',
      color: 'from-green-500 to-emerald-500',
      details: [
        'مراقبة الحركات في الوقت الفعلي',
        'تلقى ملاحظات فورية',
        'تتبع التقدم والتحسن'
      ]
    },
    {
      number: '03',
      title: 'تتبع التقدم لحالتك',
      description: 'يتم تتبع أدائك باستمرار، مع إرسال تقارير مفصلة مباشرة إلى أخصائي العلاج الطبيعي الخاص بك، مما يضمن لك رحلة استشفاء على الطريق الصحيحة.',
      icon: '📊',
      color: 'from-purple-500 to-pink-500',
      details: [
        'تقارير مفصلة يومية',
        'متابعة مع أخصائي العلاج',
        'خطط علاج شخصية'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
            كيف يعمل تطبيق فيزايو
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            رحلة العلاج الطبيعي
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              أصبحت أسهل
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            سواء كنت تتعافى من إصابة أو تعاني من حالة مزمنة، فإن تطبيقنا يستخدم تقنيات الذكاء الاصطناعي وكاميرا جهازك لمراقبة حركات مفاصلك أثناء أداء التمرين، مما يضمن لك أداء الحركات بشكل صحيح.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 ${
                activeStep === index ? 'scale-105' : 'hover:scale-102'
              }`}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Step Card */}
              <div className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                activeStep === index ? 'border-primary shadow-primary/20' : 'border-gray-100'
              }`}>
                {/* Step Number */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-gray-500">
                        <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full mr-3`}></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
              </div>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Demo */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-white/10"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              جاهز للبدء؟
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              انضم إلى آلاف المستخدمين الذين يحسنون من صحتهم يومياً مع فيزايو
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-primary px-10 py-4 rounded-2xl text-xl font-bold hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-white/25">
                ابدأ تجربتك المجانية
              </button>
              
              <button className="border-2 border-white/50 text-white px-10 py-4 rounded-2xl text-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                شاهد العرض التوضيحي
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-white/70 text-sm">مستخدم نشط</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <div className="text-white/70 text-sm">تقييم المستخدمين</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-white/70 text-sm">معدل النجاح</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
