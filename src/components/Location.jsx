import { MapPin, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div>
              <span className="text-brand-yellow font-bold tracking-wider uppercase">Find Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 leading-tight">
                Visit <span className="text-brand-red">Grilax</span>
              </h2>
              <div className="w-20 h-1.5 bg-brand-red mt-6 rounded-full"></div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Nestled in the scenic beauty of Vellarimala, we offer the perfect stop for travelers and foodies alike. Come for the food, stay for the view.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-brand-red/50 transition-colors">
                 <div className="bg-brand-red/20 p-3 rounded-full text-brand-red">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-white mb-1">Our Location</h4>
                   <p className="text-gray-400">Meppadi – Chooralmala Road, Vellarimala, Kerala 673577</p>
                 </div>
              </div>

               <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-brand-red/50 transition-colors">
                 <div className="bg-brand-yellow/20 p-3 rounded-full text-brand-yellow">
                   <Navigation size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-white mb-1">Opening Hours</h4>
                   <p className="text-gray-400">Mon - Sun: 11:00 AM - 10:00 PM</p>
                 </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/dir//Grilax+Restaurant,+Vellarimala,+Kerala/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white rounded-full font-bold shadow-lg shadow-brand-red/30 hover:bg-red-700 hover:scale-105 transition-all w-full sm:w-auto justify-center"
            >
              <Navigation size={20} /> Get Directions
            </a>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-brand-red/20 rounded-2xl transform rotate-3 scale-105 blur-sm"></div>
             <div className="relative h-[500px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800">
                <iframe 
                  width="100%" 
                  height="100%" 
                  title="Grilax Restaurant Location"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight="0" 
                  marginWidth="0" 
                  src="https://maps.google.com/maps?q=Grilax+Restaurant,+Vellarimala,+Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                ></iframe>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
