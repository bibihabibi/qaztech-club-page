
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const counterCompaniesRef = useRef<HTMLDivElement>(null);
  const counterExpertsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Canvas animation for neural network background
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;

    // Track mouse position for interactive background
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Particles for network effect
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(
        x: number,
        y: number,
        size: number = Math.random() * 3 + 1,
        speedX = (Math.random() - 0.5) * 0.5,
        speedY = (Math.random() - 0.5) * 0.5
      ) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = '#0047FF';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Boundary check with bounce effect
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create particle network
    const particlesArray: Particle[] = [];
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 12000));

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particlesArray.push(new Particle(x, y));
    }

    // Connect particles with lines if they're close enough
    function connect() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = canvas.width * 0.15;

          if (distance < maxDistance) {
            if (!ctx) return;
            ctx.strokeStyle = `rgba(0, 71, 255, ${1 - distance / maxDistance})`; 
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Countup animation for statistics
    const animateCounter = (
      element: HTMLElement | null, 
      targetValue: number, 
      duration: number = 2000
    ) => {
      if (!element) return;
      
      let startTime: number | null = null;
      const startValue = 0;
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentValue = Math.floor(progress * (targetValue - startValue) + startValue);
        
        element.textContent = currentValue.toString();
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          element.textContent = targetValue.toString();
        }
      };
      
      window.requestAnimationFrame(step);
    };

    // Start counter animations when elements become visible
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === counterCompaniesRef.current) {
            animateCounter(counterCompaniesRef.current, 77);
          } else if (entry.target === counterExpertsRef.current) {
            animateCounter(counterExpertsRef.current, 23);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });
    
    if (counterCompaniesRef.current) observer.observe(counterCompaniesRef.current);
    if (counterExpertsRef.current) observer.observe(counterExpertsRef.current);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
    };
  }, []);

  const scrollToNextSection = () => {
    const clubSection = document.getElementById('club');
    if (clubSection) {
      clubSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      
      <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-0">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Sequenced element appearances */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-scale-in" style={{ animationDelay: '300ms' }}>
            <span className="text-gradient">Альянс технологических компаний</span>
            <br />
            <span>QAZTECH</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 max-w-2xl opacity-0 animate-slide-up" style={{ animationDelay: '800ms' }}>
            Объединяем ведущие технологические компании Казахстана, 
            формируем цифровое будущее страны и поддерживаем развитие инноваций.
          </p>
          
          <Button
            size="lg"
            className={cn(
              "opacity-0 bg-qaztech-blue hover:bg-qaztech-darkBlue text-white px-8 py-6 text-lg",
              "relative overflow-hidden transition-all duration-300",
              "before:absolute before:inset-0 before:bg-white/10",
              "before:translate-y-full before:transition-transform before:duration-300",
              "hover:before:translate-y-0 animate-scale-in"
            )}
            style={{ animationDelay: '1200ms' }}
          >
            Вступить в Клуб QAZTECH
          </Button>
          
          {/* Statistics with count-up animation */}
          <div className="flex flex-wrap justify-center gap-10 mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '1600ms' }}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-qaztech-blue mb-2">
                <span ref={counterCompaniesRef}>0</span>
              </div>
              <p className="text-gray-600">компаний</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-qaztech-blue mb-2">
                <span ref={counterExpertsRef}>0</span>
              </div>
              <p className="text-gray-600">эксперта</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-0 animate-fade-in animate-bounce-soft"
        style={{ animationDelay: '2000ms' }}
        onClick={scrollToNextSection}
      >
        <ChevronDown size={30} className="text-qaztech-blue" />
      </div>
    </section>
  );
};

export default HeroSection;
