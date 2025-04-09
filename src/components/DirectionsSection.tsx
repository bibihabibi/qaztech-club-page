
import React, { useState, useEffect } from 'react';
import { Brain, Scale, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const DirectionsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const directions = [
    {
      id: 1,
      title: "Think-Tank",
      description: "Аналитический центр, разрабатывающий стратегические решения для развития технологического сектора Казахстана.",
      icon: Brain,
      color: "from-blue-500 to-purple-600",
      features: [
        "Исследования и аналитика",
        "Разработка стратегий",
        "Подготовка аналитических отчетов",
        "Формирование дорожных карт развития"
      ]
    },
    {
      id: 2,
      title: "Центр цифрового права",
      description: "Экспертиза законодательных инициатив и защита интересов технологического сектора.",
      icon: Scale,
      color: "from-green-500 to-teal-600",
      features: [
        "Разработка законодательных инициатив",
        "Правовая защита интересов IT-компаний",
        "Регуляторная экспертиза",
        "Консультации по цифровому праву"
      ]
    },
    {
      id: 3,
      title: "Клуб компаний",
      description: "Сообщество лидеров технологического рынка, объединенных общими целями и задачами.",
      icon: Users,
      color: "from-qaztech-blue to-qaztech-lightBlue",
      features: [
        "Нетворкинг и обмен опытом",
        "Совместные проекты и инициативы",
        "Доступ к экспертизе и ресурсам",
        "Продвижение на международных рынках"
      ]
    }
  ];

  return (
    <section id="directions" className="py-24 bg-gray-50 clip-path-slant">
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold text-center mb-16",
          isVisible ? "opacity-100 translate-y-0 transition-all duration-700" : "opacity-0 translate-y-10"
        )}>
          Ключевые <span className="text-qaztech-blue">направления</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {directions.map((direction, index) => (
            <div
              key={direction.id}
              className={cn(
                "relative bg-white rounded-xl overflow-hidden shadow-sm group",
                "hover:shadow-xl transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveCard(direction.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="p-8">
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-6",
                  "bg-gradient-to-br", direction.color
                )}>
                  <direction.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{direction.title}</h3>
                
                <p className="text-gray-600 mb-6">
                  {direction.description}
                </p>
                
                <div className={cn(
                  "grid grid-cols-1 gap-3 pt-4 border-t border-gray-100",
                  activeCard === direction.id || activeCard === null ? "opacity-100" : "opacity-50"
                )}>
                  {direction.features.map((feature, fIndex) => (
                    <div 
                      key={fIndex}
                      className={cn(
                        "flex items-center text-sm",
                        isVisible ? "opacity-100 translate-x-0 transition-all" : "opacity-0 -translate-x-4"
                      )}
                      style={{ transitionDelay: `${index * 200 + fIndex * 100}ms` }}
                    >
                      <div className={cn(
                        "w-2 h-2 rounded-full mr-2",
                        "bg-gradient-to-r", direction.color
                      )}></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                direction.color
              )}></div>
              
              <div className={cn(
                "absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100",
                "transition-transform duration-500 origin-left",
                "bg-gradient-to-r", direction.color
              )}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectionsSection;
