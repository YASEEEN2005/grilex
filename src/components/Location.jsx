import { MapPin, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-red font-bold tracking-wider uppercase">Find Us</span>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">
            Visit <span className="text-brand-yellow">Grilax</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <MapPin size={18} className="text-brand-red" />
            Meppadi – Chooralmala Road, Vellarimala, Kerala 673577
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
          <div className="relative w-full h-[450px] rounded-xl overflow-hidden bg-gray-200">
            <iframe 
              width="100%" 
              height="100%" 
              title="Grilax Restaurant Location"
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0" 
              src="https://maps.google.com/maps?q=Grilax+Restaurant,+Vellarimala,+Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            
            <a 
              href="https://www.google.com/maps/dir//Grilax+Restaurant,+Vellarimala,+Kerala/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-6 right-6 px-6 py-3 bg-brand-red text-white rounded-full font-bold shadow-lg hover:bg-red-700 transition-colors flex items-center gap-2 z-10"
            >
              <Navigation size={18} /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
