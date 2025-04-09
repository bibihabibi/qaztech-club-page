
import React, { useState, useEffect } from 'react';
import { Mail, MapPin, PhoneCall, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('contacts');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be form submission logic
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({
      name: '',
      email: '',
      message: ''
    });
    // Show success message (in a real app)
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес",
      content: "г. Астана, проспект Мангилик Ел, 55/20",
      delay: 100
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@qaztech.org",
      delay: 200
    },
    {
      icon: PhoneCall,
      title: "Телефон",
      content: "+7 (7172) 123-456",
      delay: 300
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold text-center mb-16",
          isVisible ? "opacity-100 translate-y-0 transition-all duration-700" : "opacity-0 translate-y-10"
        )}>
          Контакты
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className={cn(
              "mb-10",
              isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-200" : "opacity-0 translate-y-10"
            )}>
              <h3 className="text-2xl font-bold mb-4">Свяжитесь с нами</h3>
              <p className="text-gray-600 mb-6">
                Если у вас есть вопросы о вступлении в Альянс или предложения по сотрудничеству, 
                заполните форму или используйте контактные данные ниже.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className={cn(
                    "flex items-start",
                    isVisible ? "opacity-100 translate-x-0 transition-all duration-700" : "opacity-0 -translate-x-10"
                  )}
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-qaztech-blue/10 flex items-center justify-center mr-4">
                    <item.icon size={20} className="text-qaztech-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={cn(
              "mt-10 flex space-x-4",
              isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-500" : "opacity-0 translate-y-10"
            )}>
              {/* Social Media Links - placeholders */}
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social, index) => (
                <a 
                  key={social} 
                  href="#" 
                  className={cn(
                    "w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center",
                    "hover:bg-qaztech-blue hover:text-white transition-colors duration-300",
                    "text-qaztech-blue", 
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  )}
                  style={{ transitionDelay: `${index * 100 + 600}ms` }}
                  aria-label={`${social} link`}
                >
                  {/* Replace with actual icons if needed */}
                  {social.charAt(0).toUpperCase()}
                </a>
              ))}
            </div>
          </div>
          
          <div className={cn(
            "bg-white rounded-xl p-6 md:p-8 shadow-sm",
            isVisible ? "opacity-100 translate-y-0 transition-all duration-700 delay-400" : "opacity-0 translate-y-10"
          )}>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Введите ваше имя"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Введите ваш email"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Введите ваше сообщение"
                    required
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-qaztech-blue hover:bg-qaztech-darkBlue transition-colors"
                >
                  Отправить сообщение
                  <Send size={16} className="ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
