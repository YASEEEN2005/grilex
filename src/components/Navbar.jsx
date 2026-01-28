import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import StatusBadge from './StatusBadge';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'menu', 'services', 'reviews', 'location', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveLink(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Location', href: '#location', id: 'location' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-4">
            <h1 className={`text-3xl font-serif font-bold ${scrolled ? 'text-brand-red' : 'text-white'}`}>
              Grilax<span className="text-brand-yellow">.</span>
            </h1>
            <div className="hidden sm:block">
              <StatusBadge />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors relative group ${
                  activeLink === link.id 
                    ? 'text-brand-yellow font-bold' 
                    : (scrolled ? 'text-brand-dark hover:text-brand-red' : 'text-white hover:text-brand-yellow')
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform ${activeLink === link.id ? 'scale-x-100' : ''}`} />
              </a>
            ))}
            <a 
              href="tel:07012181829"
              className="bg-brand-red text-white px-5 py-2 rounded-full font-bold hover:bg-red-700 transition-colors flex items-center gap-2 shadow-md animate-pulse"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#c6a87c] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:07012181829"
              className="block w-full text-center mt-4 bg-brand-red text-white px-5 py-3 rounded-lg font-bold hover:bg-red-700"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
