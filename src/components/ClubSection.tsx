
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Full list of companies
const companies = [
  { id: 1, name: 'ОЮЛ "Центр анализа и расследования кибер атак"', category: 'Cybersecurity', logo: '🔵' },
  { id: 2, name: 'ЧК "TrustMe Limited"', category: 'IT Services', logo: '🔵' },
  { id: 3, name: 'ТОО "Digitize"', category: 'Digital Services', logo: '🔵' },
  { id: 4, name: 'ТОО "Центр информационных отраслевых решений Интегро"', category: 'Information Technology', logo: '🔵' },
  { id: 5, name: 'ТОО "Communications Kazakhstan"', category: 'Communications', logo: '🔵' },
  { id: 6, name: 'ТОО "Rocket Tech"', category: 'Technology', logo: '🔵' },
  { id: 7, name: 'ЧК "EasyTap ltd"', category: 'FinTech', logo: '🔵' },
  { id: 8, name: 'ТОО "Alan Tech"', category: 'IT Services', logo: '🔵' },
  { id: 9, name: 'ТОО "Core24/7"', category: 'Technology', logo: '🔵' },
  { id: 10, name: 'ТОО "Республиканский медицинский институт"', category: 'Healthcare Tech', logo: '🔵' },
  { id: 11, name: 'ТОО "Your Dream Tech"', category: 'IT Services', logo: '🔵' },
  { id: 12, name: 'ТОО "Tredo"', category: 'Digital Services', logo: '🔵' },
  { id: 13, name: 'ТОО "ТехКазак"', category: 'Technology', logo: '🔵' },
  { id: 14, name: 'ТОО "Сайлет"', category: 'IT Services', logo: '🔵' },
  { id: 15, name: 'ТОО "Akyl Solutions"', category: 'AI & ML', logo: '🔵' },
  { id: 16, name: 'ТОО "City Innovation Проект AI Pradavan"', category: 'AI & ML', logo: '🔵' },
  { id: 17, name: 'ТОО "Maxinum Consulting Group"', category: 'Consulting', logo: '🔵' },
  { id: 18, name: 'ЧК "TargetAI Limited"', category: 'AI & ML', logo: '🔵' },
  { id: 19, name: 'ТОО "Smart Parking Technologies"', category: 'IoT', logo: '🔵' },
  { id: 20, name: 'ТОО "Proitivity"', category: 'IT Services', logo: '🔵' },
  { id: 21, name: 'ТОО "Azimut Solutions"', category: 'IT Solutions', logo: '🔵' },
  { id: 22, name: 'ТОО "Kramtech"', category: 'Technology', logo: '🔵' },
  { id: 23, name: 'TOO "Ihs"', category: 'IT Services', logo: '🔵' },
  { id: 24, name: 'ТОО "Элтекс Алатау"', category: 'Technology', logo: '🔵' },
  { id: 25, name: 'ТОО "Интер Сервис"', category: 'Services', logo: '🔵' },
  { id: 26, name: 'ТОО "Power Media"', category: 'Media', logo: '🔵' },
  { id: 27, name: 'ТОО "ATI Projects"', category: 'IT Projects', logo: '🔵' },
  { id: 28, name: 'ТОО "Tis-servise"', category: 'Services', logo: '🔵' },
  { id: 29, name: 'ТОО "GreenDem"', category: 'Green Technology', logo: '🔵' },
  { id: 30, name: 'ТОО "Цифровые налоговые технологии"', category: 'FinTech', logo: '🔵' },
  { id: 31, name: 'ЧК "Al-Farabi Innovation Hub Ltd"', category: 'Innovation', logo: '🔵' },
  { id: 32, name: 'ТОО "Arg Group Ltd"', category: 'IT Group', logo: '🔵' },
  { id: 33, name: 'ТОО "Alta Telecom"', category: 'Telecommunications', logo: '🔵' },
  { id: 34, name: 'ТОО "Aardvark"', category: 'Technology', logo: '🔵' },
  { id: 35, name: 'ТОО "Смарт заправка"', category: 'IoT', logo: '🔵' },
  { id: 36, name: 'ТОО "Aimi automation services"', category: 'Automation', logo: '🔵' },
  { id: 37, name: 'ТОО "Ost Engineering"', category: 'Engineering', logo: '🔵' },
  { id: 38, name: 'ТОО "ZeinetSSE"', category: 'IT Services', logo: '🔵' },
  { id: 39, name: 'ТОО "Geometry"', category: 'Technology', logo: '🔵' },
  { id: 40, name: 'ТОО "It-enterprise"', category: 'Enterprise IT', logo: '🔵' },
  { id: 41, name: 'ТОО "Baiterek Engineering"', category: 'Engineering', logo: '🔵' },
  { id: 42, name: 'ТОО "Big Dream Lab"', category: 'Innovation', logo: '🔵' },
  { id: 43, name: 'ТОО "Digital geology"', category: 'Geo Tech', logo: '🔵' },
  { id: 44, name: 'ЧК "iKapitalist Ltd"', category: 'FinTech', logo: '🔵' },
  { id: 45, name: 'ТОО "Daedalus Mind Projects"', category: 'AI & ML', logo: '🔵' },
  { id: 46, name: 'ТОО "RocketTech"', category: 'Technology', logo: '🔵' },
  { id: 47, name: 'ТОО "Ag Tech"', category: 'AgriTech', logo: '🔵' },
  { id: 48, name: 'ТОО "eCapital"', category: 'FinTech', logo: '🔵' },
  { id: 49, name: 'ТОО "Kazprom avtomatika"', category: 'Automation', logo: '🔵' },
  { id: 50, name: 'ТОО "Глобал Новиком"', category: 'IT Services', logo: '🔵' },
  { id: 51, name: 'ТОО "Arta Software"', category: 'Software', logo: '🔵' },
  { id: 52, name: 'ТОО "Ordagen ERP"', category: 'ERP Systems', logo: '🔵' },
  { id: 53, name: 'Platma', category: 'FinTech', logo: '🔵' },
  { id: 54, name: 'ТОО "Codiplay"', category: 'Software', logo: '🔵' },
  { id: 55, name: 'Acf Pit', category: 'IT Services', logo: '🔵' },
  { id: 56, name: 'ТОО "Alpha.Tech.Edu"', category: 'EdTech', logo: '🔵' },
  { id: 57, name: 'ТОО "Апару"', category: 'IT Services', logo: '🔵' },
  { id: 58, name: 'ТОО "Сункар МС"', category: 'Technology', logo: '🔵' },
  { id: 59, name: 'ТОО "Formula three"', category: 'Technology', logo: '🔵' },
  { id: 60, name: 'ТОО "Arlan SI"', category: 'IT Services', logo: '🔵' },
  { id: 61, name: 'ТОО "Sheksiz Orta"', category: 'Technology', logo: '🔵' },
  { id: 62, name: 'ТОО "EmAI"', category: 'AI & ML', logo: '🔵' },
  { id: 63, name: 'ТОО "Обработка больших данных"', category: 'Big Data', logo: '🔵' },
  { id: 64, name: 'ТОО "IBecSystems"', category: 'IT Systems', logo: '🔵' },
  { id: 65, name: 'ТОО "Ids Robotics"', category: 'Robotics', logo: '🔵' },
  { id: 66, name: 'ТОО "Edge-Apps"', category: 'Mobile Apps', logo: '🔵' },
  { id: 67, name: 'ТОО "Группа Роботек"', category: 'Robotics', logo: '🔵' },
  { id: 68, name: 'ТОО "Техноробот"', category: 'Robotics', logo: '🔵' },
  { id: 69, name: 'ТОО "Ziz inc"', category: 'Technology', logo: '🔵' },
  { id: 70, name: 'TOO "Time Tracker"', category: 'Software', logo: '🔵' },
  { id: 71, name: 'ИП "Sb Dev"', category: 'Development', logo: '🔵' },
  { id: 72, name: 'ТОО "Damumed"', category: 'Healthcare Tech', logo: '🔵' },
  { id: 73, name: 'ТОО "Data Star"', category: 'Data Analytics', logo: '🔵' },
  { id: 74, name: 'ТОО "Hyperoptic Q"', category: 'Technology', logo: '🔵' },
  { id: 75, name: 'ТОО "Special Gear Kazakhstan"', category: 'Hardware', logo: '🔵' },
  { id: 76, name: 'ТОО "Office-Expert.kz"', category: 'IT Services', logo: '🔵' },
  { id: 77, name: 'ТОО "Sunrise Development"', category: 'Development', logo: '🔵' },
];

// Categories for filtering
const categories = [
  'All',
  'AI & ML',
  'Automation',
  'Big Data',
  'Cybersecurity', 
  'Development',
  'Digital Services',
  'EdTech',
  'Engineering',
  'Enterprise IT',
  'FinTech',
  'Healthcare Tech',
  'Innovation',
  'IoT',
  'IT Services',
  'IT Solutions',
  'Media',
  'Mobile Apps',
  'Robotics',
  'Software',
  'Technology',
  'Telecommunications',
];

const ClubSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredCompanies, setFilteredCompanies] = useState<typeof companies>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showAllCompanies, setShowAllCompanies] = useState(false);
  
  useEffect(() => {
    // Filter companies based on category
    const filtered = selectedCategory === 'All' 
      ? companies 
      : companies.filter(company => company.category === selectedCategory);
    
    // Show only first 12 companies unless "show all" is clicked
    setFilteredCompanies(showAllCompanies ? filtered : filtered.slice(0, 12));
  }, [selectedCategory, showAllCompanies]);
  
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
    
    const section = document.getElementById('club');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const toggleShowAll = () => {
    setShowAllCompanies(!showAllCompanies);
  };

  return (
    <section id="club" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold text-center mb-12",
          isVisible ? "opacity-100 translate-y-0 transition-all duration-700" : "opacity-0 translate-y-10"
        )}>
          Клуб <span className="text-qaztech-blue">QAZTECH</span>
        </h2>
        
        <Tabs defaultValue="members" className={cn(
          "w-full max-w-4xl mx-auto",
          isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-200" : "opacity-0 translate-y-10"
        )}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="members" className="text-lg py-3">Участники</TabsTrigger>
            <TabsTrigger value="criteria" className="text-lg py-3">Критерии</TabsTrigger>
          </TabsList>
          
          <TabsContent value="members" className="mt-6">
            {/* Category filter */}
            <div className="mb-8 overflow-x-auto whitespace-nowrap pb-2">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm transition-all duration-300",
                      selectedCategory === category 
                        ? "bg-qaztech-blue text-white" 
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Companies grid - more compact with smaller cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {filteredCompanies.map((company, index) => (
                <div 
                  key={company.id}
                  className={cn(
                    "bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300",
                    "transform hover:-translate-y-1 hover:border-qaztech-blue",
                    "border-2 border-transparent",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${Math.min(index * 30, 1000)}ms` }}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="text-2xl mb-2">{company.logo}</div>
                    <h3 className="text-xs font-medium mb-1 line-clamp-2 h-8">{company.name}</h3>
                    <span className="text-[10px] text-gray-500 px-2 py-0.5 bg-gray-50 rounded-full mt-auto">
                      {company.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Show more/less button */}
            <div className="flex justify-center mt-8">
              <Button 
                onClick={toggleShowAll}
                variant="outline" 
                className="group flex items-center gap-2 border-qaztech-blue text-qaztech-blue hover:bg-qaztech-blue hover:text-white transition-all duration-300"
              >
                {showAllCompanies ? (
                  <>
                    Показать меньше
                    <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  </>
                ) : (
                  <>
                    Показать все компании
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </>
                )}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="criteria" className="mt-6">
            <div className={cn(
              "bg-white rounded-lg p-8 shadow-sm",
              isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-300" : "opacity-0 translate-y-10"
            )}>
              <h3 className="text-xl font-bold mb-6 text-center">Критерии для вступления в Клуб</h3>
              
              <div className="space-y-8">
                {/* Point 1 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-qaztech-blue text-white font-bold text-lg">
                      1
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Функционирование компании</h4>
                      <p className="text-gray-600">– не менее 2 лет</p>
                    </div>
                  </div>
                </div>
                
                {/* Point 2 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-qaztech-blue text-white font-bold text-lg">
                      2
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Средний годовой оборот компании</h4>
                    </div>
                  </div>
                  <div className="ml-6 pl-6 border-l-2 border-dashed border-qaztech-blue mt-4 mb-4">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-qaztech-blue rounded-full mr-2 mt-2"></span>
                        <span><span className="font-medium">до 300 млн тг в год</span> - повышение совокупного дохода участников, нетворкинг и партнерства в клубе, участие в диалоговых площадках tech-to-gov</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-qaztech-blue rounded-full mr-2 mt-2"></span>
                        <span><span className="font-medium">300 млн тг и выше в год</span> - прямые переговоры с руководством крупных предприятий, специальные программы развития, участие в профильных группах</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-qaztech-blue rounded-full mr-2 mt-2"></span>
                        <span><span className="font-medium">1 млрд тг и выше в год</span> - участие в Совете по технологической политике, периодические встречи с руководством Правительства, системные решения</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Points 3-5 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-qaztech-blue text-white font-bold text-lg">
                      3
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-600">Соответствие ОКЭДу (торговля, е-commerce, научная организация и др.)</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-qaztech-blue text-white font-bold text-lg">
                      4
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-600">70% выручки от приоритетного ОКЭД</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-qaztech-blue text-white font-bold text-lg">
                      5
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-600">Наличие не менее 3 рекомендаций по выполненным проектам по заявленным ОКЭДам</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ClubSection;
