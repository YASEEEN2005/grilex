import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80", alt: "Chicken Biryani" },
    { src: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80", alt: "South Indian Thali" },
    { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80", alt: "Vegetable Salad" },
    { src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", alt: "Samosas" },
    { src: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80", alt: "Fried Chicken" },
    { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80", alt: "Curry" }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <span className="text-brand-red font-bold tracking-wider uppercase">Visual Feast</span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">
              Our <span className="text-brand-yellow">Gallery</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div 
                className="relative group aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" size={32} />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-brand-yellow transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt} 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-fade-in-up" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
