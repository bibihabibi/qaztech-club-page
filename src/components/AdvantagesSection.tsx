
import React, { useState, useEffect } from 'react';
import { Globe, Users, Buildings, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const AdvantagesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('advantages');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const advantages = [
    {
      title: "Узнаваемость",
      description: "Повышение статуса компании на рынке, присоединение к сообществу лидеров технологической отрасли Казахстана",
      icon: Award,
      delay: 100
    },
    {
      title: "Доступ к госструктурам",
      description: "Прямой диалог с государственными органами, влияние на формирование отраслевых политик и законодательства",
      icon: Buildings,
      delay: 300
    },
    {
      title: "Нетворкинг",
      description: "Уникальная возможность для установления деловых связей с лидерами отрасли и создания совместных проектов",
      icon: Users,
      delay: 500
    },
    {
      title: "Международное сотрудничество",
      description: "Доступ к глобальным партнерствам и возможности для выхода на международные рынки",
      icon: Globe,
      delay: 700
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-qaztech-blue/20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-qaztech-blue/20 translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6",
            isVisible ? "opacity-100 translate-y-0 transition-all duration-700" : "opacity-0 translate-y-10"
          )}>
            Почему технологические компании выбирают <span className="text-qaztech-blue">QAZTECH</span>
          </h2>
          
          <p className={cn(
            "text-lg text-gray-600",
            isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-200" : "opacity-0 translate-y-10"
          )}>
            Преимущества, которые получают члены Альянса для развития своего бизнеса и укрепления позиций на рынке
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className={cn(
                "relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300",
                "border border-gray-100 hover:border-qaztech-blue/20 hover:-translate-y-2",
                isVisible ? "opacity-100 translate-y-0 transition-all duration-700" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${advantage.delay}ms` }}
            >
              <div className="mb-5 relative overflow-hidden">
                <div className="w-14 h-14 rounded-lg bg-qaztech-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon size={28} className="text-qaztech-blue" />
                </div>
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-qaztech-blue/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
              
              <p className="text-gray-600 text-sm">
                {advantage.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-qaztech-blue to-qaztech-lightBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
