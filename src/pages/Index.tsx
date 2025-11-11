import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import InterceptionAnimation from '@/components/InterceptionAnimation';

export default function Index() {
  const [activeThreats, setActiveThreats] = useState(0);
  const [detectionRange, setDetectionRange] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveThreats(Math.floor(Math.random() * 5));
      setDetectionRange(Math.floor(Math.random() * 20) + 80);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={32} className="text-primary" />
            <span className="text-2xl font-bold tracking-wider">AEGIS DEFENSE</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">ГЛАВНАЯ</a>
            <a href="#tech" className="hover:text-primary transition-colors">ТЕХНОЛОГИИ</a>
            <a href="#solutions" className="hover:text-primary transition-colors">РЕШЕНИЯ</a>
            <a href="#specs" className="hover:text-primary transition-colors">ХАРАКТЕРИСТИКИ</a>
            <a href="#contact" className="hover:text-primary transition-colors">КОНТАКТЫ</a>
          </div>
          <Button variant="outline" size="sm">
            <Icon name="Menu" size={20} className="md:hidden" />
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 grid-bg relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-3 py-1 bg-destructive/20 text-destructive border border-destructive rounded text-sm font-bold threat-blink">
                СИСТЕМА АКТИВНА
              </div>
              <h1 className="text-5xl md:text-7xl leading-tight">
                АНТИДРОНОВАЯ <span className="text-primary">ЗАЩИТА</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Автоматическое обнаружение и нейтрализация воздушных угроз в режиме реального времени
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <Card className="bg-card/80 backdrop-blur border-primary/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-mono">{detectionRange}%</CardTitle>
                    <CardDescription>Эффективность обнаружения</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-card/80 backdrop-blur border-destructive/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-mono">{activeThreats}</CardTitle>
                    <CardDescription>Активных угроз</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="Zap" size={20} className="mr-2" />
                  ЗАПРОСИТЬ ДЕМО
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="FileText" size={20} className="mr-2" />
                  ТЕХНИЧЕСКИЕ ДАННЫЕ
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full radar-pulse"></div>
              <img 
                src="https://cdn.poehali.dev/projects/cb0d965a-8220-41f1-8968-514110f7bc9c/files/34b8a44c-501c-4c74-b8e0-7b049e70bf6b.jpg"
                alt="Radar System"
                className="relative z-10 rounded-lg border border-primary/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="tech" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">ТЕХНОЛОГИИ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Передовые алгоритмы машинного обучения и автоматизированные системы реагирования
            </p>
          </div>

          <div className="mb-16">
            <InterceptionAnimation />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all">
              <CardHeader>
                <Icon name="Radar" size={48} className="text-primary mb-4" />
                <CardTitle>ОБНАРУЖЕНИЕ</CardTitle>
                <CardDescription className="text-base">
                  Многоканальная радиолокационная система с дальностью обнаружения до 10 км. 
                  Распознавание объектов размером от 0.3 м.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-accent/20 hover:border-accent/50 transition-all">
              <CardHeader>
                <Icon name="Target" size={48} className="text-accent mb-4" />
                <CardTitle>КЛАССИФИКАЦИЯ</CardTitle>
                <CardDescription className="text-base">
                  ИИ-алгоритмы распознают тип угрозы за 0.5 сек. 
                  Точность определения целей 98.7%.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-destructive/20 hover:border-destructive/50 transition-all">
              <CardHeader>
                <Icon name="Zap" size={48} className="text-destructive mb-4" />
                <CardTitle>НЕЙТРАЛИЗАЦИЯ</CardTitle>
                <CardDescription className="text-base">
                  Автоматическое реагирование без оператора. 
                  Время реакции 2-4 секунды от обнаружения до перехвата.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/cb0d965a-8220-41f1-8968-514110f7bc9c/files/493ab859-c9ec-424f-ba95-603e0a986db4.jpg"
                alt="Defense System"
                className="rounded-lg border border-primary/30 shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl">РЕШЕНИЯ</h2>
              <p className="text-lg text-muted-foreground">
                Комплексная защита для различных объектов и сценариев применения
              </p>
              
              <div className="space-y-4">
                <Card className="bg-card/80 border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Building2" size={24} className="text-primary" />
                      КРИТИЧЕСКАЯ ИНФРАСТРУКТУРА
                    </CardTitle>
                    <CardDescription>
                      Защита энергетических объектов, аэропортов, промышленных комплексов
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-card/80 border-l-4 border-l-accent">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Users" size={24} className="text-accent" />
                      МАССОВЫЕ МЕРОПРИЯТИЯ
                    </CardTitle>
                    <CardDescription>
                      Мобильные системы для обеспечения безопасности крупных событий
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-card/80 border-l-4 border-l-destructive">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="Flag" size={24} className="text-destructive" />
                      ВОЕННЫЕ ОБЪЕКТЫ
                    </CardTitle>
                    <CardDescription>
                      Стационарные и полевые комплексы для защиты периметра
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="specs" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">ХАРАКТЕРИСТИКИ</h2>
            <p className="text-xl text-muted-foreground">
              Технические параметры системы AEGIS DEFENSE
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-primary/30">
              <CardHeader>
                <CardTitle className="text-primary">ОБНАРУЖЕНИЕ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Дальность</span>
                  <span className="font-bold">10 км</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Угол обзора</span>
                  <span className="font-bold">360°</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Мин. размер цели</span>
                  <span className="font-bold">0.3 м</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Точность</span>
                  <span className="font-bold">98.7%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-accent/30">
              <CardHeader>
                <CardTitle className="text-accent">СИСТЕМА</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Время реакции</span>
                  <span className="font-bold">2-4 сек</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Одновременных целей</span>
                  <span className="font-bold">до 50</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Время работы</span>
                  <span className="font-bold">24/7</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Автономность</span>
                  <span className="font-bold">72 часа</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-destructive/30">
              <CardHeader>
                <CardTitle className="text-destructive">НЕЙТРАЛИЗАЦИЯ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Эффективная дальность</span>
                  <span className="font-bold">5 км</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Методы подавления</span>
                  <span className="font-bold">РЭБ / Кинетика</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Боекомплект</span>
                  <span className="font-bold">120 единиц</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Успешных перехватов</span>
                  <span className="font-bold">96%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/30">
              <CardHeader>
                <CardTitle className="text-primary">РАЗМЕЩЕНИЕ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Вес системы</span>
                  <span className="font-bold">850 кг</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Время развертывания</span>
                  <span className="font-bold">15 мин</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Защищенность</span>
                  <span className="font-bold">IP67</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Температура работы</span>
                  <span className="font-bold">-40°C до +60°C</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/cb0d965a-8220-41f1-8968-514110f7bc9c/files/56b2f957-5bb8-41a0-916a-83b8f377d03d.jpg"
                alt="Command Center"
                className="rounded-lg border border-primary/30 shadow-xl"
              />
            </div>
            
            <Card className="bg-card border-primary/30">
              <CardHeader>
                <CardTitle className="text-3xl">КОНТАКТЫ</CardTitle>
                <CardDescription className="text-base">
                  Свяжитесь с нами для получения консультации и коммерческого предложения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">ИМЯ</label>
                    <Input placeholder="Ваше имя" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">ОРГАНИЗАЦИЯ</label>
                    <Input placeholder="Название организации" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">EMAIL</label>
                    <Input type="email" placeholder="your@email.com" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">ТЕЛЕФОН</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">СООБЩЕНИЕ</label>
                    <Textarea placeholder="Опишите ваши задачи..." className="bg-background border-border min-h-[100px]" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    ОТПРАВИТЬ ЗАПРОС
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card/50 border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" size={28} className="text-primary" />
                <span className="text-xl font-bold">AEGIS DEFENSE</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Передовые технологии защиты от беспилотных угроз
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">НАВИГАЦИЯ</h3>
              <div className="space-y-2 text-sm">
                <a href="#home" className="block hover:text-primary transition-colors">Главная</a>
                <a href="#tech" className="block hover:text-primary transition-colors">Технологии</a>
                <a href="#solutions" className="block hover:text-primary transition-colors">Решения</a>
                <a href="#specs" className="block hover:text-primary transition-colors">Характеристики</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">КОНТАКТЫ</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@aegisdefense.tech
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 000-00-00
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 AEGIS DEFENSE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}