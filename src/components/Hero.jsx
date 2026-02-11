import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Hero = ({ onOpenReservation }) => {
  const images = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", // Restaurant ambient
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", // Food close up
    "https://images.unsplash.com/photo-1514362545857-3bc16549766b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", // Dark mood
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"  // Food styling
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Slider */}
      {images.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={img} 
            alt={`Slide ${index + 1}`} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/30"></div>
        </div>
      ))}

      <RevealOnScroll className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <span className="block text-brand-yellow font-bold tracking-widest text-lg mb-4 uppercase">
          Welcome to
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          Grilax Restaurant
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Experience the authentic flavors of Kerala in the heart of Vellarimala.
          Where tradition meets taste in every bite.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#menu" 
            className="px-8 py-3.5 bg-brand-yellow text-brand-dark rounded-full font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/30 flex items-center justify-center gap-2"
          >
            View Menu <ArrowRight size={18} />
          </a>
          <button 
            onClick={onOpenReservation}
            className="px-8 py-3.5 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-brand-red transition-all hover:scale-105 hover:shadow-lg shadow-black/20"
          >
            Book a Table
          </button>
        </div>
      </RevealOnScroll>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-brand-yellow scale-125' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

