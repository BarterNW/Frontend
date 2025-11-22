"use client";

import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const Testimonials: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const testimonials = [
    {
      image: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/94f25d8852b21926a068fddc5ecd801cc73ddd20?placeholderIfAbsent=true",
      title: "Smooth Onboarding Process",
      text: "The onboarding process was smooth and intuitive — I didn't need a tutorial. BarterNow just gets it. I loved how fast I could match with verified sponsors.",
      author: "Aviral Mittal",
      role: "Organiser GDG ABESEC"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/44e09c4056c0865fc8ea29008e6b6b25808038cf?placeholderIfAbsent=true",
      title: "Game Changer for Events",
      text: "BarterNow transformed how we find sponsors. The AI matching is incredibly accurate and saved us weeks of outreach. The zero commission model is refreshing.",
      author: "Sarah Johnson",
      role: "Event Director at TechConf"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/199bf16c5d21d129650cb8f71ba8f0ec662bb9fc?placeholderIfAbsent=true",
      title: "Trustworthy Platform",
      text: "Finally, a platform that prioritizes transparency. The verified profiles and escrow system give us peace of mind. Highly recommend to any event organizer.",
      author: "Michael Chen",
      role: "Founder, Innovation Summit"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/a79f38fdcb2ce4b00d6c25f5527cfe6fcd3e9bcb?placeholderIfAbsent=true",
      title: "Perfect Match Every Time",
      text: "The AI matching is spot-on. We've connected with sponsors that perfectly align with our brand values. BarterNow has become essential to our event planning.",
      author: "Emily Rodriguez",
      role: "Marketing Manager, StartupWeek"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/acf6202fca0dc79a3d08f55f66882f454c3ea690?placeholderIfAbsent=true",
      title: "Efficient and Reliable",
      text: "As a sponsor, BarterNow helps us find events that matter to our audience. The dashboard is intuitive and the verified organizers give us confidence.",
      author: "David Park",
      role: "Brand Manager, TechCorp"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/91557a3304121dd8bab50bce11105fefefd3bf40?placeholderIfAbsent=true",
      title: "No Hidden Fees",
      text: "The zero commission model means we keep 100% of our sponsorship. No surprises, no hidden fees. Just honest, transparent collaboration.",
      author: "Lisa Thompson",
      role: "CEO, Community Events Co"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/8564288c4bd4f8edcf79cc7af695151b6a7e4773?placeholderIfAbsent=true",
      title: "Outstanding Support",
      text: "The BarterNow team is incredibly responsive and helpful. They've made sponsorship management stress-free and actually enjoyable.",
      author: "James Wilson",
      role: "Director, Digital Summit"
    }
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 rounded-full bg-blue-50/50 border-2 border-blue-300 text-blue-700 mb-4 sm:mb-6 hover-scale">
          <span className="w-2 h-2 rounded-full bg-blue-700 animate-glow"></span>
          TESTIMONIALS
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-8 leading-tight px-4">
          See What Our <br />
          Customers Have To Say
        </h2>
      </div>
      
      {/* Person Images with Active State */}
      <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 mb-8 md:mb-10 overflow-x-auto pb-2">
        {testimonials.map((testimonial, index) => {
          const isActive = index === selectedIndex;
          const distance = Math.abs(index - selectedIndex);
          
          let sizeClass = 'w-8 h-8 sm:w-10 sm:h-10';
          if (isActive) {
            sizeClass = 'w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32';
          } else if (distance === 1) {
            sizeClass = 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20';
          } else if (distance === 2) {
            sizeClass = 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14';
          }
          
          return (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`${sizeClass} flex-shrink-0 aspect-square object-cover rounded-full shadow-md transition-all duration-500 ease-out cursor-pointer hover:scale-110 ${
                isActive ? 'ring-2 sm:ring-4 ring-blue-400 ring-offset-1 sm:ring-offset-2' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={testimonial.image}
                className="w-full h-full object-cover rounded-full"
                alt={testimonial.author}
              />
            </button>
          );
        })}
      </div>
      
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-2 sm:px-4">
              <article 
                className="border bg-blue-50/50 max-w-2xl mx-auto rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border-blue-200/50 shadow-sm transition-all duration-300 hover-card cursor-pointer"
                onClick={() => {
                  const nextIndex = (index + 1) % testimonials.length;
                  emblaApi?.scrollTo(nextIndex);
                }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground text-center mb-4 sm:mb-6 leading-snug">
                  {testimonial.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  {testimonial.text}
                </p>
                <div className="text-base sm:text-lg md:text-xl font-bold text-foreground text-center mb-1">
                  {testimonial.author}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground text-center">
                  {testimonial.role}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6 sm:mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 hover-scale ${
              index === selectedIndex 
                ? 'bg-blue-600 w-6 sm:w-8' 
                : 'w-2 bg-blue-200 hover:bg-blue-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
