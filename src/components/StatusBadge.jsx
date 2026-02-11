import { useState, useEffect } from 'react';

const StatusBadge = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      // Open between 7 AM (7) and 10 PM (22)
      const open = hours >= 7 && hours < 22;
      setIsOpen(open);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`
      relative group overflow-hidden px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-white/20
      ${isOpen ? 'bg-green-500/10' : 'bg-red-500/10'}
    `}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
      
      <div className="flex items-center gap-3 relative z-10">
        <span className="relative flex h-3 w-3">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-green-400' : 'bg-red-400'}`}></span>
          <span className={`relative inline-flex rounded-full h-3 w-3 shadow-[0_0_10px_rgba(0,0,0,0.5)] ${isOpen ? 'bg-green-500 shadow-green-500/50' : 'bg-red-500 shadow-red-500/50'}`}></span>
        </span>
        
        <div className="flex flex-col leading-none">
          <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isOpen ? 'text-green-400' : 'text-red-400'}`}>
            Currently
          </span>
          <span className={`text-sm font-bold tracking-wide ${isOpen ? 'text-white' : 'text-white/80'}`}>
            {isOpen ? 'Open Now' : 'Closed'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatusBadge;
