
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: "О нас", href: "#about" },
    { name: "Клуб", href: "#club" },
    { name: "Миссия", href: "#mission" },
    { name: "Направления", href: "#directions" },
    { name: "Новости", href: "#news" },
    { name: "Команда", href: "#team" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a 
            href="#" 
            className="text-2xl font-bold text-qaztech-blue flex items-center"
            aria-label="QAZTECH Alliance home"
          >
            <span className="opacity-0 animate-fade-in">QAZ</span>
            <span className="text-black opacity-0 animate-delay-200">TECH</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium relative transition-colors hover:text-qaztech-blue",
                "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0",
                "after:bg-qaztech-blue after:origin-bottom-right after:transition-transform after:duration-300",
                "hover:after:scale-x-100 hover:after:origin-bottom-left",
                "opacity-0"
              )}
              style={{ animationDelay: `${index * 100 + 300}ms` }}
              onAnimationEnd={(e) => e.currentTarget.classList.remove("opacity-0")}
            >
              <span className="animate-fade-in" style={{ animationDelay: `${index * 100 + 300}ms` }}>
                {item.name}
              </span>
            </a>
          ))}
        </div>

        <div className="hidden md:block opacity-0 animate-delay-800">
          <Button className="bg-qaztech-blue hover:bg-qaztech-darkBlue transition-colors">
            Вступить в Клуб
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-700 hover:text-qaztech-blue focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-4 md:hidden transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium hover:text-qaztech-blue"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button 
            className="bg-qaztech-blue hover:bg-qaztech-darkBlue w-full mt-4 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Вступить в Клуб
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
