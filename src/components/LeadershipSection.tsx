
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// Leadership data based on the provided content
const leaders = [
  {
    id: 1,
    name: "Рахметов Нурлан Кусаинович",
    position: "Исполнительный директор",
    photo: "👨‍💼", // Placeholder for photo
    bio: "Имеет более чем 20-летний опыт работы в государственном и квазигосударственном секторе Казахстана. Возглавлял Налоговый Комитет Казахстана, работал вице-министром государственных доходов, финансов, управляющим директором АО «НК»Казмунайгаз» по финансам и экономике. В течении 10,5 лет (2008-2019) был топ-менеджером АО «Самрук-Казына» - курировал блок финансов и бизнес-планирования, отвечал за взаимодействие с Правительством, был управляющим директором по Трансформации, Приватизации и Реструктуризации. Являлся членом Совета директоров АО «НК «Казмунайгаз», АО «Самрук-Энерго», АО «Казпочта» и др. В рамках возглавляемого Премьер-Министром РК Проектного Офиса участвовал в разработке Стратегии достижения углеродной нейтральности РК до 2060 года. Окончил механико-математический факультет МГУ им. М.В.Ломоносова, атакже IE (Instituto de Empresa) Business School (Madrid) по программе Global Executive MBA.Кандидат физико-математических наук. С 2019 года Нурлан в качестве консультанта участвовал в ряде проектов Всемирного банка, связанных с созданием и управлением государственных холдингов и компаний в Кыргызстане, Азербайджане, Узбекистане, Казахстане, Черногории."
  },
  {
    id: 2,
    name: "Ракишева Алия Галимжановна",
    position: "Советник Председателя Высшего совета Альянс технологических компаний «QAZTECH» - секретарь Управляющего комитета по правовому обеспечению развития цифровой экономики",
    photo: "👩‍💼", // Placeholder for photo
    bio: "Алия обладает значительным опытом работы в Министерстве юстиции, Администрации Президента и Сенате Парламента, специализируясь на нормотворческой деятельности. Она участвует в разработке и анализе правовых актов, законодательных инициатив и нормативных документов, обеспечивая соответствие национального законодательства международным стандартам. Алия также занимается подготовкой законодательных предложений, координацией и контролем за выполнением правовых норм, содействует реализации политик и программ, направленных на совершенствование законодательства и правопорядка. Её работа включает анализ и рассмотрение законопроектов, участие в обсуждениях и дебатах, а также внесение предложений и поправок для улучшения законодательной базы страны."
  },
  {
    id: 3,
    name: "Манасова Аяна Токтагановна",
    position: "Управляющий Директор по стратегии и аналитике Ассоциации Альянс технологических компаний «QAZTECH»",
    photo: "👩‍💼", // Placeholder for photo
    bio: "Аяна имеет опыт в разработке и анализе социально-экономических политик, оценке эффективности государственных органов, управлении исследовательскими проектами, межведомственной координации и взаимодействии с международными организациями. Выпускница Нархоза, Ланкастерского университета (UK). Возглавляла Национальный аналитический центр при Правительстве РК; Холдинг \"Касипкор\"; Центр стратегических исследований и анализа Администрации Президента РК; выступала координатором сотрудничества Казахстана с Организацией экономического сотрудничества и развития (OECD)"
  },
  {
    id: 4,
    name: "Дауранов Александр Шамилевич",
    position: "Представитель Ассоциации Альянс технологических компаний «QAZTECH» в г. Алматы",
    photo: "👨‍💼", // Placeholder for photo
    bio: "Александр обладает значительным опытом в области аналитики и исследований. В руководстве Jusan Analytics он занимался внедрением data-driven аналитики в таких направлениях, как экономика, демография, анализ рынков и технологические тренды. Работая в исследовательском центре Назарбаев Университета, он проводил исследования в области глобальных цепочек добавленной стоимости. На посту заместителя заведующего Центра стратегических разработок и анализа Администрации Президента, он курировал вопросы стратегического планирования и формирования экономической политики. Также Александр работал в руководстве ключевых аналитических центров правительства и Национального банка, обладая компетенциями в областях макроэкономики, развития рынка труда, профессионально-технического образования, малого и среднего бизнеса, а также повышения конкурентоспособности."
  }
];

const LeadershipSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<typeof leaders[0] | null>(null);
  
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
    
    const section = document.getElementById('leadership');
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
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold text-center mb-12",
          isVisible ? "opacity-100 translate-y-0 transition-all duration-700" : "opacity-0 translate-y-10"
        )}>
          Руководство <span className="text-qaztech-blue">QAZTECH</span>
        </h2>
        
        <div className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
          isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-200" : "opacity-0 translate-y-10"
        )}>
          {leaders.map((leader, index) => (
            <div 
              key={leader.id}
              className={cn(
                "flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300",
                "border border-gray-100 hover:border-qaztech-blue cursor-pointer",
                "transform hover:-translate-y-1"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => setSelectedLeader(leader)}
            >
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <span className="text-5xl">{leader.photo}</span>
              </div>
              <h3 className="font-bold text-center text-lg">{leader.name}</h3>
              <p className="text-sm text-gray-600 text-center mt-2 line-clamp-2">{leader.position}</p>
              <button 
                className="mt-4 text-qaztech-blue hover:underline text-sm font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedLeader(leader);
                }}
              >
                Подробнее
              </button>
            </div>
          ))}
        </div>
        
        {/* Leader Detail Dialog */}
        <Dialog open={!!selectedLeader} onOpenChange={(open) => !open && setSelectedLeader(null)}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-center">
                {selectedLeader?.name}
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">{selectedLeader?.photo}</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-lg mb-2">{selectedLeader?.position}</h4>
                <ScrollArea className="h-[300px] pr-4">
                  <p className="text-gray-700">{selectedLeader?.bio}</p>
                </ScrollArea>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default LeadershipSection;
