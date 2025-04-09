
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

// Mock data for companies
const companies = [
  { id: 1, name: 'TechnoFuture', category: 'AI & ML', logo: '🔵' },
  { id: 2, name: 'QazCloud', category: 'Cloud Services', logo: '🌥️' },
  { id: 3, name: 'CyberKZ', category: 'Cybersecurity', logo: '🔒' },
  { id: 4, name: 'DataVision', category: 'Big Data', logo: '📊' },
  { id: 5, name: 'MobileFirst', category: 'Mobile Apps', logo: '📱' },
  { id: 6, name: 'WebStudio', category: 'Web Development', logo: '🌐' },
  { id: 7, name: 'AILabs', category: 'AI & ML', logo: '🤖' },
  { id: 8, name: 'BlockchainKZ', category: 'Blockchain', logo: '⛓️' },
  { id: 9, name: 'SmartSolutions', category: 'IoT', logo: '💡' },
  { id: 10, name: 'FinTechPro', category: 'FinTech', logo: '💰' },
  { id: 11, name: 'MediaTech', category: 'Media', logo: '📺' },
  { id: 12, name: 'EduTech', category: 'EdTech', logo: '📚' },
];

// Categories for filtering
const categories = [
  'All',
  'AI & ML',
  'Cloud Services',
  'Cybersecurity',
  'Big Data',
  'Mobile Apps',
  'Web Development',
  'Blockchain',
  'IoT',
  'FinTech',
  'Media',
  'EdTech',
];

const ClubSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredCompanies, setFilteredCompanies] = useState(companies);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredCompanies(companies);
    } else {
      setFilteredCompanies(companies.filter(company => company.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
              <div className="flex space-x-2">
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
            
            {/* Companies grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCompanies.map((company, index) => (
                <div 
                  key={company.id}
                  className={cn(
                    "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300",
                    "transform hover:-translate-y-1 hover:border-qaztech-blue",
                    "border-2 border-transparent",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 50 + 300}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="text-4xl mb-4">{company.logo}</div>
                    <h3 className="text-lg font-medium mb-2">{company.name}</h3>
                    <span className="text-sm text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
                      {company.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="criteria" className="mt-6">
            <div className={cn(
              "bg-white rounded-lg p-8 shadow-sm",
              isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-300" : "opacity-0 translate-y-10"
            )}>
              <h3 className="text-xl font-bold mb-6 text-center">Критерии для вступления в Клуб</h3>
              
              <div className="space-y-8">
                {/* Level 1 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-qaztech-blue text-white font-bold text-lg">
                      1
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Стартовый уровень</h4>
                      <p className="text-gray-600">Годовой оборот до 300 млн тенге</p>
                    </div>
                  </div>
                  <div className="ml-6 pl-6 border-l-2 border-dashed border-qaztech-blue mt-4 mb-4">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-qaztech-blue rounded-full mr-2"></span>
                        <span>Наличие технологического продукта или сервиса</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-qaztech-blue rounded-full mr-2"></span>
                        <span>Минимум 1 год на рынке</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-qaztech-blue rounded-full mr-2"></span>
                        <span>Команда от 5 сотрудников</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Level 2 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-qaztech-blue text-white font-bold text-lg">
                      2
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Средний уровень</h4>
                      <p className="text-gray-600">Годовой оборот от 300 млн до 1 млрд тенге</p>
                    </div>
                  </div>
                  <div className="ml-6 pl-6 border-l-2 border-dashed border-qaztech-blue mt-4 mb-4">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-qaztech-blue rounded-full mr-2"></span>
                        <span>Устойчивая бизнес-модель</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-qaztech-blue rounded-full mr-2"></span>
                        <span>Минимум 2 года на рынке</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-qaztech-blue rounded-full mr-2"></span>
                        <span>Команда от 15 сотрудников</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Level 3 */}
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-qaztech-blue text-white font-bold text-lg">
                      3
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Продвинутый уровень</h4>
                      <p className="text-gray-600">Годовой оборот свыше 1 млрд тенге</p>
                    </div>
                  </div>
                  <div className="ml-6 pl-6 border-l-2 border-transparent mt-4">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-qaztech-blue rounded-full mr-2"></span>
                        <span>Лидерская позиция на рынке</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-qaztech-blue rounded-full mr-2"></span>
                        <span>Узнаваемый бренд</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-qaztech-blue rounded-full mr-2"></span>
                        <span>Международное присутствие (опционально)</span>
                      </li>
                    </ul>
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
