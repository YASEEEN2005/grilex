import { useState, useEffect } from 'react';
import { MapPin, Navigation, X } from 'lucide-react';

const LocationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleGetDirections = () => {
    window.open("https://www.google.com/maps/dir//Grilax+Restaurant,+Vellarimala,+Kerala/", "_blank");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-28 right-4 z-[90] max-w-sm w-full animate-slide-in-right px-4 sm:bottom-10 sm:right-6">
      <div className="bg-white rounded-xl shadow-2xl border-l-4 border-brand-red overflow-hidden relative">
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors p-1"
        >
          <X size={18} />
        </button>

        <div className="p-5 flex items-start gap-4">
          <div className="bg-red-50 p-3 rounded-full text-brand-red flex-shrink-0">
            <MapPin size={24} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">Visiting us soon?</h4>
            <p className="text-gray-600 text-sm mt-1 mb-4 leading-relaxed">
              Get direct navigation to Grilax Restaurant from your current location!
            </p>
            <div className="flex gap-3">
              <button 
                onClick={handleGetDirections}
                className="flex-1 bg-brand-red text-white py-2 px-4 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <Navigation size={16} /> Get Directions
              </button>
              <button 
                onClick={handleClose}
                className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPopup;
