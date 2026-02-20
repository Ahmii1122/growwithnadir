
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 bg-primary text-white text-center px-6 relative overflow-hidden">
      {/* Decorative Overlays */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-white rounded-full blur-[150px]"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-black rounded-full blur-[150px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-[1.1]">Let’s Build Your <br className="hidden md:block"/>Growth Engine</h2>
        <p className="text-xl md:text-2xl text-white/80 mb-12 font-medium max-w-2xl mx-auto">
          Stop leaving money on the table. Start scaling your brand to new heights today.
        </p>
        
        <a 
          href="#booking"
          className="inline-block bg-white text-primary text-xl font-black py-5 px-14 rounded-2xl hover:bg-gray-50 transition-all shadow-2xl shadow-black/20 active:scale-95 hover:scale-105"
        >
          Book Your Strategy Call Now
        </a>
        
        <div className="mt-20 pt-12 border-t border-white/20 flex flex-wrap justify-center gap-x-16 gap-y-6 text-xs md:text-sm font-black uppercase tracking-[0.25em] opacity-80">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            $3M+ Generated
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            15+ Brands Scaled
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Global Market Expertise
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
