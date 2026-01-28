import { Phone, MessageCircle } from 'lucide-react';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href="https://wa.me/917012181829"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
      <a
        href="tel:07012181829"
        className="bg-brand-red text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Call Now"
      >
        <Phone size={28} />
      </a>
    </div>
  );
};

export default FloatingCTA;
