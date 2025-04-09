
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MessageSquare, Shield, Lightbulb } from 'lucide-react';

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

  const missions = [
    {
      title: "«ДИАЛОГОВАЯ ПЛОЩАДКА»",
      subtitle: "Сфокусированное взаимодействие с технологическим предпринимательством",
      points: [
        "организация конструктивного диалога государства и тех секторов по важным решениям",
        "сбор и систематизация проблемных вопросов развития",
        "выработка совместных решений для органов государственной власти"
      ],
      icon: MessageSquare,
      color: "from-blue-500 to-indigo-600",
      delay: 100
    },
    {
      title: "«ОМБУДСМЕН»",
      subtitle: "Продвижение интересов технологического предпринимательства",
      points: [
        "взаимодействие с государственными органами по вопросам развития и устранения барьеров",
        "участие в формировании законодательных инициатив",
        "продвижение стимулирующего регулирования",
        "содействие в совершенствовании государственных мер поддержки"
      ],
      icon: Shield,
      color: "from-indigo-600 to-purple-600",
      delay: 300
    },
    {
      title: "«THINK-TANK»",
      subtitle: "Аналитическая и методологическая поддержка",
      points: [
        "методологические разработки по инновациям (понятия и определения, статистика, метрика и др)",
        "исследование, оценка и объективный мониторинг технологического развития",
        "разработка подходов и мер развития в том числе на базе международных практик",
        "позиционирование Казахстана, как инновационной страны в глазах международных инвесторов",
        "работа с различными международными рейтингами для справедливой оценки успехов Казахстана в области инноваций",
        "круглые столы и широкая информационно-разъяснительная работа",
        "разработка стратегических программ по развитию стартапов, экспорта технологических компаний и др."
      ],
      icon: Lightbulb,
      color: "from-purple-600 to-pink-600",
      delay: 500
    }
  ];

  return (
    <section id="mission" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50 opacity-50 rounded-bl-full transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-50 opacity-50 rounded-tr-full transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold",
            isVisible ? "opacity-100 translate-y-0 transition-all duration-700" : "opacity-0 translate-y-10"
          )}>
            Миссия и задачи <span className="text-qaztech-blue">Альянса QAZTECH</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div 
              key={mission.title}
              className={cn(
                "relative bg-white rounded-xl overflow-hidden transition-all duration-500 shadow-lg border border-gray-100",
                "hover:shadow-xl transform hover:-translate-y-2",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${mission.delay}ms` }}
            >
              {/* Top colored gradient strip */}
              <div className={`h-2 w-full bg-gradient-to-r ${mission.color}`}></div>
              
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-r mb-6 text-white shadow-md"
                     style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`, '--tw-gradient-from': mission.color.split(' ')[0].replace('from-', ''), '--tw-gradient-to': mission.color.split(' ')[1].replace('to-', '') }}>
                  <mission.icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{mission.title}</h3>
                <p className="text-gray-700 font-medium mb-4">{mission.subtitle}</p>
                
                <ul className="space-y-2">
                  {mission.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="inline-block w-2 h-2 rounded-full bg-qaztech-blue mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Bottom hover reveal line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`, '--tw-gradient-from': mission.color.split(' ')[0].replace('from-', ''), '--tw-gradient-to': mission.color.split(' ')[1].replace('to-', '') }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
