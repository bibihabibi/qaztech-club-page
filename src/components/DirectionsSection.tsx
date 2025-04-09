
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Brain, Scale, Users } from 'lucide-react';

const DirectionsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('directions');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Direction data based on content provided
  const directions = [
    {
      title: "THINK-TANK",
      subtitle: "(Data Driven Decision)",
      description: "Создание системы сбора и обработки достоверных данных, экспертных мнений и анализа, помогающих принимать взвешенные решения и достигать запланированные результаты как в государственном управлении, так и в бизнесе",
      icon: Brain,
      color: "bg-gradient-to-br from-blue-500 to-cyan-400",
      delay: 100
    },
    {
      title: "Центр права цифровой среды",
      description: "Ввиду новизны сферы, не все аспекты имеют регуляцию и наблюдается дефицит специалистов, которые могут им противостоять на практике. Есть отдельно юристы и отдельно технократы, однако специализирующихся в области цифрового права единицы. Поэтому Альянс QAZTECH поставил задачу подготовки экспертов в цифровой сфере",
      icon: Scale,
      color: "bg-gradient-to-br from-violet-500 to-indigo-500",
      delay: 300
    },
    {
      title: "Клуб QAZTECH",
      description: "Объединение выдающихся технологических компании Казахстана и помощь в налаживании диалога с крупнейшими предприятиями страны",
      icon: Users,
      color: "bg-gradient-to-br from-qaztech-blue to-qaztech-lightBlue",
      delay: 500
    }
  ];

  return (
    <section id="directions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold",
            isVisible ? "opacity-100 translate-y-0 transition-all duration-700" : "opacity-0 translate-y-10"
          )}>
            Направления <span className="text-qaztech-blue">QAZTECH</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {directions.map((direction, index) => (
            <div 
              key={direction.title}
              className={cn(
                "bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500",
                "transform hover:-translate-y-2 group",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${direction.delay}ms` }}
            >
              <div className={`h-40 ${direction.color} relative overflow-hidden flex items-center justify-center`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                      <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"></path>
                      <path d="M0,20 L100,20" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"></path>
                      <path d="M0,40 L100,40" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"></path>
                      <path d="M0,60 L100,60" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"></path>
                      <path d="M0,80 L100,80" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"></path>
                      <path d="M20,0 L20,100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"></path>
                      <path d="M40,0 L40,100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"></path>
                      <path d="M60,0 L60,100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"></path>
                      <path d="M80,0 L80,100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"></path>
                    </svg>
                  </div>
                </div>
                
                {/* Icon */}
                <div className="relative z-10 transition-transform duration-500 transform group-hover:scale-110 bg-white/10 p-4 rounded-full backdrop-blur-sm">
                  <direction.icon size={48} className="text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{direction.title}</h3>
                {direction.subtitle && (
                  <p className="text-qaztech-blue font-medium mb-3">{direction.subtitle}</p>
                )}
                <p className="text-gray-600">{direction.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional content for Клуб QAZTECH */}
        <div className={cn(
          "mt-16 bg-white rounded-xl p-8 shadow-sm",
          isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-700" : "opacity-0 translate-y-10"
        )}>
          <h3 className="text-2xl font-bold mb-6 text-center">Клуб технологических компаний <span className="text-qaztech-blue">QAZTECH</span></h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-bold mb-3">Повышение осведомленности о технологических компаниях</h4>
              <p className="text-gray-600">Вступление технологической компании в клуб QAZTECH сопровождается пресс-релизом от QAZTECH в СМИ. В пресс-релизе будет указан лучший бизнес кейс с ценностью для клиентов (ROI) и основная специализация технологической компании.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-bold mb-3">Отраслевой нетворкинг и развитие кооперации</h4>
              <p className="text-gray-600">Вступление в клуб позволит участникам воспользоваться услугой организации структурированных встреч между членам клуба как поставщиков технологий и экспертизы, так и канальных партнеров для взаимного развития бизнеса участников QAZTECH.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-bold mb-3">Прямые переговоры с крупными предприятиями</h4>
              <p className="text-gray-600">Организация эффективных переговоров между крупными предприятиями и зрелыми технологическими компаниями с целью прямой стыковки спроса и предложения на периодической основе.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectionsSection;
