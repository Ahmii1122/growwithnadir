
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-background-light border-t border-gray-200 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-lg font-black">trending_up</span>
          </div>
          <h2 className="text-background-dark text-xl font-black tracking-tight">Grow with Nadir</h2>
        </div>
        
        <p className="text-base text-background-dark/40 mb-10 font-medium">
          © {new Date().getFullYear()} Nadir Mahmood. All rights reserved. <br/>
          Empowering brands to achieve global dominance through performance marketing.
        </p>
        
        <div className="flex justify-center flex-wrap gap-10 text-sm font-black uppercase tracking-widest text-background-dark/80">
          <a className="hover:text-primary transition-all flex items-center gap-2 group" href="#">
            <span className="w-1 h-1 bg-gray-300 rounded-full group-hover:bg-primary transition-colors"></span>
            LinkedIn
          </a>
          <a className="hover:text-primary transition-all flex items-center gap-2 group" href="#">
            <span className="w-1 h-1 bg-gray-300 rounded-full group-hover:bg-primary transition-colors"></span>
            Twitter
          </a>
          <a className="hover:text-primary transition-all flex items-center gap-2 group" href="#">
            <span className="w-1 h-1 bg-gray-300 rounded-full group-hover:bg-primary transition-colors"></span>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
