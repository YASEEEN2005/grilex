import { UtensilsCrossed, ShoppingBag, Truck } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Services = () => {
  const services = [
    {
      icon: <UtensilsCrossed size={40} />,
      title: 'Dine-In',
      description: 'Enjoy a warm and welcoming ambiance perfect for family gatherings and friendly catch-ups.'
    },
    {
      icon: <ShoppingBag size={40} />,
      title: 'Takeaway',
      description: 'Grab your favorite meals on the go. Perfectly packed to ensure freshness and taste.'
    },
    {
      icon: <Truck size={40} />,
      title: 'No-Contact Delivery',
      description: 'Safety first. Get your food delivered to your doorstep with our contactless delivery service.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-red text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-yellow font-bold tracking-wider uppercase">Our Services</span>
          <h2 className="text-4xl font-serif font-bold mt-2">How We Serve You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div 
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors h-full"
              >
                <div className="w-20 h-20 mx-auto bg-brand-yellow rounded-full flex items-center justify-center text-brand-red mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif">{service.title}</h3>
                <p className="text-gray-200 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
