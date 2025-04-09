
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">QAZTECH</h3>
            <p className="text-gray-400 mb-6">
              Альянс технологических компаний Казахстана, объединяющий лидеров IT-индустрии.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">О нас</a>
              </li>
              <li>
                <a href="#club" className="text-gray-400 hover:text-white transition-colors">Клуб QAZTECH</a>
              </li>
              <li>
                <a href="#mission" className="text-gray-400 hover:text-white transition-colors">Миссия и цели</a>
              </li>
              <li>
                <a href="#directions" className="text-gray-400 hover:text-white transition-colors">Направления</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li>
                <a href="#news" className="text-gray-400 hover:text-white transition-colors">Новости</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Мероприятия</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Исследования</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors">Команда</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">г. Астана, проспект Мангилик Ел, 55/20</p>
              <p className="mb-2">info@qaztech.org</p>
              <p>+7 (7172) 123-456</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} QAZTECH. Все права защищены.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
