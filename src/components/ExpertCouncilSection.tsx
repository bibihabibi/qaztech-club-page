
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// Placeholder experts data (you'll need to replace with actual data)
const experts = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  name: `Эксперт ${i + 1}`,
  position: 'Должность эксперта',
  photo: '👤', // Placeholder for photo
  bio: 'Информация об эксперте. Здесь будет размещена полная биография эксперта, включая образование, опыт работы, достижения и другую релевантную информацию.'
}));

const ExpertCouncilSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState<typeof experts[0] | null>(null);
  const [showAllExperts, setShowAllExperts] = useState(false);
  
  const displayedExperts = showAllExperts ? experts : experts.slice(0, 8);
  
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
    
    const section = document.getElementById('expert-council');
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
    <section id="expert-council" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold text-center mb-12",
          isVisible ? "opacity-100 translate-y-0 transition-all duration-700" : "opacity-0 translate-y-10"
        )}>
          Экспертный Совет <span className="text-qaztech-blue">QAZTECH</span>
        </h2>
        
        <div className={cn(
          "overflow-x-auto pb-6",
          isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-200" : "opacity-0 translate-y-10"
        )}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 min-w-full">
            {displayedExperts.map((expert, index) => (
              <div 
                key={expert.id}
                className={cn(
                  "flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300",
                  "border border-gray-100 hover:border-qaztech-blue cursor-pointer",
                  "transform hover:-translate-y-1"
                )}
                style={{ transitionDelay: `${Math.min(index * 50, 1000)}ms` }}
                onClick={() => setSelectedExpert(expert)}
              >
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <span className="text-4xl">{expert.photo}</span>
                </div>
                <h3 className="font-bold text-center">{expert.name}</h3>
                <p className="text-sm text-gray-600 text-center mt-1">{expert.position}</p>
              </div>
            ))}
          </div>
        </div>
        
        {experts.length > 8 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllExperts(!showAllExperts)}
              className="px-6 py-2 bg-white border-2 border-qaztech-blue text-qaztech-blue rounded-full hover:bg-qaztech-blue hover:text-white transition-all duration-300"
            >
              {showAllExperts ? "Показать меньше" : "Показать всех экспертов"}
            </button>
          </div>
        )}
        
        {/* Expert Detail Dialog */}
        <Dialog open={!!selectedExpert} onOpenChange={(open) => !open && setSelectedExpert(null)}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-center">
                {selectedExpert?.name}
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">{selectedExpert?.photo}</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-lg mb-2">{selectedExpert?.position}</h4>
                <ScrollArea className="h-[300px] pr-4">
                  <p className="text-gray-700">{selectedExpert?.bio}</p>
                </ScrollArea>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ExpertCouncilSection;
