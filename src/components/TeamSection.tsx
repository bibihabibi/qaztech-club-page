
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Mock team data
const teamLead = {
  name: "Асет Орентаевич Исекешев",
  position: "Председатель Альянса QAZTECH",
  bio: "Асет Орентаевич — опытный управленец с богатым опытом работы в государственном и частном секторе. Ранее занимал должность Министра индустрии и новых технологий Республики Казахстан, а также был акимом города Астана.",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=60",
};

const expertCouncil = [
  {
    id: 1,
    name: "Алексей Сидоров",
    position: "Эксперт по кибербезопасности",
    company: "CyberSecure KZ",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 2,
    name: "Елена Ким",
    position: "Специалист по AI и ML",
    company: "TechVision Lab",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 3,
    name: "Максат Жолдыбаев",
    position: "Финтех-эксперт",
    company: "KZ Payments",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 4,
    name: "Айгуль Нурланова",
    position: "Специалист по цифровой трансформации",
    company: "Digital Qazaqstan",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=60",
  },
  // Additional experts to show scrolling capability
  {
    id: 5,
    name: "Тимур Алиев",
    position: "Эксперт по блокчейну",
    company: "Chain Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 6,
    name: "Дарья Сатпаева",
    position: "Специалист по цифровому праву",
    company: "Legal Digital",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=60",
  },
];

const management = [
  {
    id: 1,
    name: "Марат Каримов",
    position: "Исполнительный директор",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 2,
    name: "Айнур Сагинтаева",
    position: "Директор по развитию",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 3,
    name: "Бахыт Нуржанов",
    position: "Финансовый директор",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 4,
    name: "Жанар Оспанова",
    position: "PR-директор",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=200&q=60",
  },
];

const TeamSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState<number | null>(null);
  const [showAllExperts, setShowAllExperts] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold text-center mb-16",
          isVisible ? "opacity-100 translate-y-0 transition-all duration-700" : "opacity-0 translate-y-10"
        )}>
          Команда <span className="text-qaztech-blue">QAZTECH</span>
        </h2>
        
        {/* Team Lead */}
        <div className={cn(
          "mb-20 max-w-4xl mx-auto",
          isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-200" : "opacity-0 translate-y-10"
        )}>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <div className="h-64 md:h-full bg-qaztech-blue/10">
                  <img
                    src={teamLead.image}
                    alt={teamLead.name}
                    className="w-full h-full object-cover object-center opacity-90"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r"></div>
              </div>
              
              <div className="md:w-2/3 p-8 md:p-10">
                <div className="max-w-lg">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{teamLead.name}</h3>
                  <p className="text-qaztech-blue font-medium mb-6">{teamLead.position}</p>
                  <p className="text-gray-600">{teamLead.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Expert Council */}
        <div className="mb-20">
          <h3 className={cn(
            "text-2xl font-bold text-center mb-8",
            isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-300" : "opacity-0 translate-y-10"
          )}>
            Экспертный совет
          </h3>
          
          <div className={cn(
            "relative overflow-x-auto pb-6 -mx-4 px-4",
            "scrollbar-thin scrollbar-thumb-qaztech-blue scrollbar-track-transparent",
            isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-400" : "opacity-0 translate-y-10"
          )}>
            <div className="flex space-x-6">
              {expertCouncil.slice(0, showAllExperts ? expertCouncil.length : 4).map((expert, index) => (
                <div 
                  key={expert.id}
                  className={cn(
                    "flex-shrink-0 w-64 bg-white rounded-xl overflow-hidden shadow-sm",
                    "border border-transparent hover:border-qaztech-blue/30 transition-all duration-300",
                    selectedExpert === expert.id ? "border-qaztech-blue/30 shadow-md" : "",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                  onMouseEnter={() => setSelectedExpert(expert.id)}
                  onMouseLeave={() => setSelectedExpert(null)}
                >
                  <div className="relative h-64">
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <h4 className="text-white font-bold text-lg">{expert.name}</h4>
                      <p className="text-white/80 text-sm">{expert.position}</p>
                      <p className="text-qaztech-blue text-sm font-medium mt-1">{expert.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {!showAllExperts && expertCouncil.length > 4 && (
            <div className="text-center mt-6">
              <button 
                onClick={() => setShowAllExperts(true)}
                className={cn(
                  "text-qaztech-blue font-medium hover:underline",
                  isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-600" : "opacity-0 translate-y-10"
                )}
              >
                Показать всех экспертов ({expertCouncil.length})
              </button>
            </div>
          )}
        </div>
        
        {/* Management */}
        <div>
          <h3 className={cn(
            "text-2xl font-bold text-center mb-8",
            isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-500" : "opacity-0 translate-y-10"
          )}>
            Руководство
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {management.map((person, index) => (
              <div 
                key={person.id}
                className={cn(
                  "bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300",
                  "group",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold text-lg">{person.name}</h4>
                    <p className="text-white/80 text-sm">{person.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
