import { Star } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Specials = () => {
  const specials = [
    {
      name: "Meen Pollichathu",
      price: "₹320",
      description: "Pearl Spot fish marinated in spicy masala, wrapped in banana leaf and slow-roasted.",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80", 
      tag: "Chef's Choice"
    },
    {
      name: "Bamboo Biryani",
      price: "₹280",
      description: "Aromatic biryani steamed inside a bamboo shell to infuse a unique woody flavor.",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
      tag: "Signature Dish"
    }
  ];

  return (
    <section id="specials" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-brand-yellow font-bold tracking-wider uppercase">Exclusive Tastes</span>
            <h2 className="text-4xl font-serif font-bold mt-2">Chef's Specials</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mt-4 rounded-full"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {specials.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 200}>
              <div className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-brand-red/20 transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    {item.tag}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold font-serif text-white group-hover:text-brand-yellow transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-brand-yellow">{item.price}</span>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <button className="flex items-center gap-2 text-white font-medium group-hover:text-brand-red transition-colors">
                    Order Now <Star size={16} className="fill-brand-yellow text-brand-yellow" />
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
