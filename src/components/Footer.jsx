const Footer = () => {
    return (
      <footer className="bg-[#111] text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold text-white">
              Grilax<span className="text-brand-yellow">.</span>
            </h2>
            <p className="text-sm mt-1">Authentic Kerala Restaurant</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm">&copy; {new Date().getFullYear()} Grilax Restaurant. All Rights Reserved.</p>
            <p className="text-xs mt-1">Vellarimala, Kerala | 070121 81829</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
