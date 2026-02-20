import { useState, useEffect, useCallback } from 'react';
import { MapPin, Navigation, X, Loader2, Compass } from 'lucide-react';
import { calculateDistance } from '../utils/distance';

const RESTAURANT_COORDS = {
  lat: 11.522818,
  lng: 76.133748
};

const STORAGE_KEY = 'grilex_location_prompt_shown';

const LocationModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | requesting | success | denied | unsupported | timeout
  const [distance, setDistance] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Show after 3 seconds for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); 
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setStatus('unsupported');
      setError('Geolocation is not supported on this device.');
      return;
    }

    setStatus('requesting');
    setError('');

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        
        const dist = calculateDistance(
          userLat, 
          userLng, 
          RESTAURANT_COORDS.lat, 
          RESTAURANT_COORDS.lng
        );
        
        setDistance(dist.toFixed(1));
        setStatus('success');
      },
      (err) => {
        console.error('Geolocation error:', err);
        if (err.code === 1) {
          setStatus('denied');
          setError('Location permission was denied.');
        } else if (err.code === 3) {
          setStatus('timeout');
          setError('Location request timed out.');
        } else {
          setStatus('error');
          setError('Unable to detect your location.');
        }
      },
      options
    );
  }, []);

  const handleGetDirections = () => {
    window.open("https://maps.app.goo.gl/KyQ1Z2TxiwQjCzQUA", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform animate-scale-up border border-white/20">
        {/* Header/Close Icon */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors z-10 p-1 rounded-full hover:bg-gray-100"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {/* Icon Area */}
          <div className="flex justify-center mb-6">
            <div className={`p-4 rounded-2xl shadow-inner ${
              status === 'success' ? 'bg-green-50 text-green-600' : 
              status === 'denied' || status === 'error' || status === 'timeout' ? 'bg-red-50 text-red-600' :
              'bg-brand-red/5 text-brand-red'
            }`}>
              {status === 'requesting' ? (
                <Loader2 size={32} className="animate-spin" />
              ) : status === 'success' ? (
                <Navigation size={32} />
              ) : (
                <Compass size={32} />
              )}
            </div>
          </div>

          {/* Content */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {status === 'success' ? '📍 Found Us!' : '📍 Find Our Restaurant'}
            </h3>
            
            <p className="text-gray-600 text-base leading-relaxed">
              {status === 'idle' && "We can show how far you are from our restaurant and help you get directions instantly."}
              {status === 'requesting' && "Detecting your location…"}
              {status === 'success' && (
                <>
                  You are <span className="font-bold text-brand-red">{distance} km</span> away from us.
                </>
              )}
              {(status === 'denied' || status === 'error' || status === 'unsupported' || status === 'timeout') && error}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            {status === 'success' ? (
              <button
                onClick={handleGetDirections}
                className="w-full bg-brand-red text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-red-700 transition-all active:scale-[0.98] shadow-lg shadow-brand-red/20 flex items-center justify-center gap-2"
              >
                <Navigation size={20} />
                Get Directions
              </button>
            ) : status === 'requesting' ? (
              <button
                disabled
                className="w-full bg-gray-100 text-gray-400 py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2"
              >
                <Loader2 size={20} className="animate-spin" />
                Processing...
              </button>
            ) : (
              <button
                onClick={requestLocation}
                className="w-full bg-brand-red text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-red-700 transition-all active:scale-[0.98] shadow-lg shadow-brand-red/20 flex items-center justify-center gap-2"
              >
                <MapPin size={20} />
                Allow Location
              </button>
            )}

            <button
              onClick={handleClose}
              className="w-full py-3 px-6 text-gray-500 font-semibold hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
