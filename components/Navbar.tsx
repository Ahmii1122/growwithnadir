
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-white py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-xl font-bold">trending_up</span>
          </div>
          <h2 className="text-background-dark text-xl font-black tracking-tight">Grow with Nadir</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-background-dark text-sm font-bold hover:text-primary transition-colors" href="#about">About</a>
          <a className="text-background-dark text-sm font-bold hover:text-primary transition-colors" href="#results">Results</a>
          <a className="text-background-dark text-sm font-bold hover:text-primary transition-colors" href="#strategy">Strategy</a>
          <a 
            href="#booking"
            className="bg-primary text-white text-sm font-extrabold py-2.5 px-6 rounded-lg hover:bg-primary/90 transition-all shadow-md active:scale-95"
          >
            Book Free Call
          </a>
        </nav>
        
        <button className="md:hidden text-background-dark">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
