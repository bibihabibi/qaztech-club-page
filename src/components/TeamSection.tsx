
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const TeamSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBio, setShowBio] = useState(false);
  
  // Team member data based on provided content
  const teamMember = {
    name: "Исекешев Асет Орентаевич",
    position: "Председатель Попечительского совета Альянс технологических компаний «QAZTECH»",
    photo: "👨‍💼", // Placeholder for photo
    bio: "Обладает более чем 25-летним опытом государственной службы. Возглавлял Министерство Индустрии Казахстана семь лет, работал Вице-премьер-министром, помощником и руководителем администрации Президента РК, Акимом г. Астаны, членом СД Самрук Казына, Байтерек, Банка Развития, член КС Союза машиностроителей. Курировал разработку и реализации программ индустриально - инновационного развития, развития национальной инновационной системы, а также вопросы развития промышленности, энергетики, транспорта и других отраслей. Координировал запуск программ сотрудничества по инвестициям и инновациям с такими странами как США, Франция, Германия, Корея, ОАЭ, Великобритания и др."
  };
  
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
    
    const section = document.getElementById('team');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="team" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-qaztech-blue -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-qaztech-blue translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold text-center mb-16",
          isVisible ? "opacity-100 translate-y-0 transition-all duration-700" : "opacity-0 translate-y-10"
        )}>
          Команда <span className="text-qaztech-blue">QAZTECH</span>
        </h2>
        
        <div className={cn(
          "flex flex-col items-center max-w-2xl mx-auto",
          isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-300" : "opacity-0 translate-y-10"
        )}>
          <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center mb-6 border-4 border-white shadow-lg">
            <span className="text-7xl">{teamMember.photo}</span>
          </div>
          
          <h3 className="text-2xl font-bold text-center">{teamMember.name}</h3>
          <p className="text-lg text-gray-600 text-center mt-2 mb-6">{teamMember.position}</p>
          
          <div className={cn(
            "w-full transition-all duration-500 overflow-hidden",
            showBio ? "max-h-[500px]" : "max-h-0"
          )}>
            <div className="bg-gray-50 p-6 rounded-lg my-4">
              <ScrollArea className="h-[200px]">
                <p className="text-gray-700 leading-relaxed">{teamMember.bio}</p>
              </ScrollArea>
            </div>
          </div>
          
          <Button 
            onClick={() => setShowBio(!showBio)}
            variant="outline"
            className="mt-4 group border-qaztech-blue text-qaztech-blue hover:bg-qaztech-blue hover:text-white transition-all duration-300"
          >
            {showBio ? "Скрыть биографию" : "Показать биографию"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
