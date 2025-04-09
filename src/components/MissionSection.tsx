
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const MissionSection: React.FC = () => {
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
    
    const section = document.getElementById('mission');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  const missionItems = [
    {
      title: "Объединение",
      description: "Создание единой экосистемы для технологических компаний Казахстана",
      icon: "🌐",
      delay: 100,
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-800"
    },
    {
      title: "Продвижение",
      description: "Представление интересов IT-индустрии на всех уровнях власти",
      icon: "📈",
      delay: 200,
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800"
    },
    {
      title: "Развитие",
      description: "Формирование благоприятной среды для развития технологического сектора",
      icon: "🚀",
      delay: 300,
      color: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-800"
    }
  ];
  
  const goals = [
    {
      title: "Формирование цифрового суверенитета",
      description: "Развитие отечественных технологий и защита цифрового пространства Казахстана",
      delay: 200
    },
    {
      title: "Привлечение инвестиций",
      description: "Создание благоприятного инвестиционного климата для технологических проектов",
      delay: 300
    },
    {
      title: "Развитие экспорта",
      description: "Поддержка выхода казахстанских IT-компаний на международные рынки",
      delay: 400
    },
    {
      title: "Развитие кадрового потенциала",
      description: "Создание программ обучения и повышения квалификации для специалистов",
      delay: 500
    }
  ];

  return (
    <section id="mission" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold text-center mb-16",
          "relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-qaztech-blue after:left-1/2 after:-bottom-4 after:-translate-x-1/2",
          isVisible ? "opacity-100 translate-y-0 transition-all duration-700" : "opacity-0 translate-y-10"
        )}>
          Миссия и цели <span className="text-qaztech-blue">Альянса</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Mission */}
          <div className={cn(
            isVisible ? "opacity-100 translate-x-0 transition-all duration-700 delay-200" : "opacity-0 -translate-x-10"
          )}>
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-qaztech-blue to-qaztech-lightBlue bg-clip-text text-transparent">
              Наша миссия
            </h3>
            
            <div className="space-y-6">
              {missionItems.map((item, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "p-6 rounded-lg border-l-4 transform transition-all",
                    item.color,
                    item.borderColor,
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  )}
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">{item.icon}</div>
                    <div>
                      <h4 className={cn("text-xl font-semibold mb-2", item.textColor)}>{item.title}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Goals */}
          <div className={cn(
            isVisible ? "opacity-100 translate-x-0 transition-all duration-700 delay-200" : "opacity-0 translate-x-10"
          )}>
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-qaztech-blue to-qaztech-lightBlue bg-clip-text text-transparent">
              Наши цели
            </h3>
            
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <div className="space-y-8">
                {goals.map((goal, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "relative pl-10",
                      isVisible ? "opacity-100 translate-y-0 transition-all duration-500" : "opacity-0 translate-y-10",
                      index < goals.length - 1 ? "pb-8 border-l-2 border-dashed border-qaztech-blue/30" : ""
                    )}
                    style={{ transitionDelay: `${goal.delay}ms` }}
                  >
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-qaztech-blue flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <h4 className="text-lg font-semibold text-qaztech-blue mb-2">{goal.title}</h4>
                    <p className="text-gray-700">{goal.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
