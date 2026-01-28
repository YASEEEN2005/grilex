import { Clock, MapPin } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant Interior" 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <span className="text-brand-red font-bold tracking-wider uppercase">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-6">
              Flavor of <span className="text-brand-yellow">Kerala</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Located in the scenic Vellarimala, Grilax Restaurant brings you the authentic taste of Kerala cuisine. 
              We are a family-friendly destination offering a wide range of dishes, from traditional favorites to 
              modern delights, all prepared with fresh, locally sourced ingredients.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you are looking for a quick bite, a hearty meal with family, or a takeaway for your journey, 
              we serve happiness on every plate. Join us for a memorable dining experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 rounded-lg text-brand-red">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Opening Hours</h4>
                  <p className="text-gray-600 text-sm">7:00 AM – 10:00 PM</p>
                  <p className="text-gray-600 text-sm">Every day</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 rounded-lg text-brand-red">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600 text-sm">Meppadi – Chooralmala Road,</p>
                  <p className="text-gray-600 text-sm">Vellarimala, Kerala 673577</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
