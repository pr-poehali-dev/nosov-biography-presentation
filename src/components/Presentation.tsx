import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
}

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Носов Михаил Владимирович",
      content: (
        <div className="space-y-8 text-center">
          <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-8">
            <Icon name="User" size={48} className="text-gray-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Профессиональная биография</h2>
          <p className="text-xl text-gray-600">Ведущий специалист в области профессиональной деятельности</p>
          <div className="text-sm text-gray-500 mt-8">
            Презентация • 2024
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Образование и ранняя карьера",
      content: (
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Icon name="GraduationCap" size={24} className="text-blue-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Высшее образование</h3>
              <p className="text-gray-700">Московский государственный университет</p>
              <p className="text-gray-600 text-sm">Специальность: Экономика и управление</p>
              <p className="text-gray-500 text-sm">1995-2000 гг.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Icon name="Award" size={24} className="text-green-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Дополнительное образование</h3>
              <p className="text-gray-700">MBA по стратегическому менеджменту</p>
              <p className="text-gray-600 text-sm">Школа бизнеса</p>
              <p className="text-gray-500 text-sm">2005-2007 гг.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Icon name="Briefcase" size={24} className="text-purple-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Начало карьеры</h3>
              <p className="text-gray-700">Аналитик в крупной консалтинговой компании</p>
              <p className="text-gray-500 text-sm">2000-2003 гг.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Профессиональный рост",
      content: (
        <div className="space-y-6">
          <div className="timeline space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
              <div>
                <h3 className="text-lg font-semibold">2003-2008</h3>
                <p className="text-gray-700 font-medium">Менеджер проектов</p>
                <p className="text-gray-600 text-sm">Руководство командой из 15 специалистов</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-green-600 rounded-full mt-2"></div>
              <div>
                <h3 className="text-lg font-semibold">2008-2015</h3>
                <p className="text-gray-700 font-medium">Заместитель директора</p>
                <p className="text-gray-600 text-sm">Стратегическое планирование и развитие бизнеса</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-purple-600 rounded-full mt-2"></div>
              <div>
                <h3 className="text-lg font-semibold">2015-настоящее время</h3>
                <p className="text-gray-700 font-medium">Исполнительный директор</p>
                <p className="text-gray-600 text-sm">Общее руководство компанией, стратегическое развитие</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Ключевые достижения",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-blue-50">
            <Icon name="TrendingUp" size={32} className="text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Рост выручки</h3>
            <p className="text-3xl font-bold text-blue-600 mb-2">300%</p>
            <p className="text-gray-600 text-sm">За последние 5 лет</p>
          </Card>
          
          <Card className="p-6 bg-green-50">
            <Icon name="Users" size={32} className="text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Команда</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">200+</p>
            <p className="text-gray-600 text-sm">Сотрудников под руководством</p>
          </Card>
          
          <Card className="p-6 bg-purple-50">
            <Icon name="Globe" size={32} className="text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Рынки</h3>
            <p className="text-3xl font-bold text-purple-600 mb-2">15</p>
            <p className="text-gray-600 text-sm">Стран присутствия</p>
          </Card>
          
          <Card className="p-6 bg-orange-50">
            <Icon name="Target" size={32} className="text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Проекты</h3>
            <p className="text-3xl font-bold text-orange-600 mb-2">50+</p>
            <p className="text-gray-600 text-sm">Успешно реализованных</p>
          </Card>
        </div>
      )
    },
    {
      id: 5,
      title: "Экспертиза и навыки",
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Профессиональные компетенции</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Стратегическое планирование</span>
                    <span className="text-gray-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Управление командой</span>
                    <span className="text-gray-600">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Финансовый анализ</span>
                    <span className="text-gray-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Развитие бизнеса</span>
                    <span className="text-gray-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Переговоры</span>
                    <span className="text-gray-600">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Инновации</span>
                    <span className="text-gray-600">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Текущие проекты и инициативы",
      content: (
        <div className="space-y-6">
          <Card className="p-6 border-l-4 border-blue-600">
            <div className="flex items-start space-x-4">
              <Icon name="Rocket" size={24} className="text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Цифровая трансформация</h3>
                <p className="text-gray-700 mb-2">Внедрение современных IT-решений для оптимизации бизнес-процессов</p>
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-gray-500" />
                  <span className="text-gray-500 text-sm">2024-2025</span>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 border-l-4 border-green-600">
            <div className="flex items-start space-x-4">
              <Icon name="Leaf" size={24} className="text-green-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Устойчивое развитие</h3>
                <p className="text-gray-700 mb-2">Реализация программы корпоративной социальной ответственности</p>
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-gray-500" />
                  <span className="text-gray-500 text-sm">2024-2026</span>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 border-l-4 border-purple-600">
            <div className="flex items-start space-x-4">
              <Icon name="BookOpen" size={24} className="text-purple-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Развитие персонала</h3>
                <p className="text-gray-700 mb-2">Создание корпоративного университета и программ обучения</p>
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-gray-500" />
                  <span className="text-gray-500 text-sm">2024-2025</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )
    },
    {
      id: 7,
      title: "Контакты и дополнительная информация",
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Носов Михаил Владимирович</h2>
            <p className="text-lg text-gray-600 mb-8">Исполнительный директор</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Icon name="Mail" size={20} className="mr-2 text-blue-600" />
                Контактная информация
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>📧 m.nosov@company.ru</p>
                <p>📱 +7 (495) 123-45-67</p>
                <p>🏢 Москва, ул. Деловая, 123</p>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Icon name="Award" size={20} className="mr-2 text-green-600" />
                Награды и признание
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>🏆 Менеджер года - 2023</p>
                <p>⭐ Лидер отрасли - 2022</p>
                <p>🎖️ Почетная грамота - 2021</p>
              </div>
            </Card>
          </div>
          
          <div className="text-center pt-8 border-t">
            <p className="text-gray-500 text-sm">Благодарим за внимание!</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Биография М.В. Носова</h1>
          <div className="text-gray-600">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Main slide */}
        <Card className="min-h-[500px] p-8 mb-8 shadow-lg">
          <div key={currentSlide} className="animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-4">
              {slides[currentSlide].title}
            </h2>
            <div className="mt-8">
              {slides[currentSlide].content}
            </div>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <Icon name="ChevronLeft" size={16} />
            <span>Назад</span>
          </Button>

          {/* Slide indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <span>Вперед</span>
            <Icon name="ChevronRight" size={16} />
          </Button>
        </div>

        {/* Slide preview */}
        <div className="mt-8 grid grid-cols-7 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`p-2 text-xs rounded border transition-all ${
                index === currentSlide
                  ? 'bg-blue-100 border-blue-300 text-blue-800'
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="truncate font-medium">{slide.id}</div>
              <div className="truncate text-xs opacity-75">
                {slide.title.substring(0, 20)}...
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentation;