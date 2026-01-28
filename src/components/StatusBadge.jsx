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
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border ${
      isOpen 
        ? 'bg-green-100/10 border-green-500 text-green-400' 
        : 'bg-red-100/10 border-red-500 text-red-400'
    }`}>
      <span className={`relative flex h-3 w-3`}>
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-green-400' : 'bg-red-400'}`}></span>
        <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
      </span>
      <span className="text-sm font-semibold tracking-wide uppercase">
        {isOpen ? 'Open Now' : 'Closed'}
      </span>
    </div>
  );
};

export default StatusBadge;
