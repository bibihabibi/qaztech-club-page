
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Mock news data
const newsData = [
  {
    id: 1,
    title: "QAZTECH представил стратегию развития IT-отрасли Казахстана до 2030 года",
    excerpt: "Документ включает ключевые направления и меры поддержки технологического сектора страны на ближайшее десятилетие",
    date: "12 апреля 2025",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=60",
    category: "Стратегия"
  },
  {
    id: 2,
    title: "Подписан меморандум о сотрудничестве между QAZTECH и Министерством цифрового развития",
    excerpt: "Соглашение направлено на совместную работу по цифровизации государственных услуг и развитию IT-образования",
    date: "5 апреля 2025",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=60",
    category: "Сотрудничество"
  },
  {
    id: 3,
    title: "QAZTECH запускает программу поддержки стартапов в сфере искусственного интеллекта",
    excerpt: "Программа предусматривает финансовую и менторскую поддержку для перспективных проектов в области AI",
    date: "27 марта 2025",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=60",
    category: "Инновации"
  },
  {
    id: 4,
    title: "Ежегодная конференция QAZTECH Digital Summit пройдет в Астане в мае",
    excerpt: "Крупнейшее событие в сфере информационных технологий соберет более 2000 участников из Казахстана и стран СНГ",
    date: "15 марта 2025",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=60",
    category: "События"
  },
  {
    id: 5,
    title: "QAZTECH озвучил предложения по развитию кадрового потенциала IT-сферы",
    excerpt: "Инициативы включают обновление образовательных программ и создание специализированных центров компетенций",
    date: "5 марта 2025",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=60",
    category: "Образование"
  }
];

const NewsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('news');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
      setActiveSlide(index);
    }
  };
  
  const handlePrevSlide = () => {
    const newIndex = Math.max(activeSlide - 1, 0);
    scrollToSlide(newIndex);
  };
  
  const handleNextSlide = () => {
    const newIndex = Math.min(activeSlide + 1, newsData.length - 1);
    scrollToSlide(newIndex);
  };
  
  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const slideWidth = sliderRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / slideWidth);
      
      if (newIndex !== activeSlide) {
        setActiveSlide(newIndex);
      }
    }
  };

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-4",
              isVisible ? "opacity-100 translate-y-0 transition-all duration-700" : "opacity-0 translate-y-10"
            )}>
              Новости <span className="text-qaztech-blue">QAZTECH</span>
            </h2>
            
            <p className={cn(
              "text-gray-600 max-w-2xl",
              isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-200" : "opacity-0 translate-y-10"
            )}>
              Актуальные события и инициативы Альянса технологических компаний
            </p>
          </div>
          
          <div className={cn(
            "flex space-x-2 mt-6 md:mt-0",
            isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-400" : "opacity-0 translate-y-10"
          )}>
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevSlide}
              disabled={activeSlide === 0}
              className="border border-gray-200 hover:bg-qaztech-blue hover:text-white transition-colors"
            >
              <ChevronLeft size={18} />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={handleNextSlide}
              disabled={activeSlide === newsData.length - 1}
              className="border border-gray-200 hover:bg-qaztech-blue hover:text-white transition-colors"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
        
        <div
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
          onScroll={handleScroll}
        >
          {newsData.map((news, index) => (
            <div
              key={news.id}
              className="min-w-full snap-center"
            >
              <div className={cn(
                "bg-white rounded-xl shadow-sm overflow-hidden",
                "transform transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                activeSlide === index ? "scale-100" : "scale-95 opacity-70"
              )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="md:flex">
                  <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-qaztech-blue text-white px-3 py-1 rounded-full text-xs font-medium">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
                    <div>
                      <p className="text-gray-500 text-sm mb-2">{news.date}</p>
                      <h3 className="text-xl md:text-2xl font-bold mb-4 line-clamp-2">{news.title}</h3>
                      <p className="text-gray-600 mb-6 line-clamp-3">{news.excerpt}</p>
                    </div>
                    
                    <div className="mt-auto">
                      <Button
                        variant="ghost"
                        className="group text-qaztech-blue hover:bg-qaztech-blue/10 transition-colors py-2 px-4 rounded-lg"
                      >
                        Читать подробнее
                        <ExternalLink size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          {newsData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full mx-1 transition-all duration-300",
                activeSlide === index
                  ? "bg-qaztech-blue w-8"
                  : "bg-gray-300 hover:bg-gray-400",
                isVisible ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
