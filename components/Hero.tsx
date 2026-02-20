
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-24 px-6 md:px-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Performance Growth Partner
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-background-dark leading-[1.05] tracking-tight mb-8">
            Turn Your Marketing Into a <span className="text-primary">Revenue Machine</span>
          </h1>
          
          <p className="text-lg md:text-xl text-background-dark/60 leading-relaxed mb-10 max-w-xl font-medium">
            I help ecommerce brands & founders scale using performance marketing & growth systems. Join the elites generating millions in trackable sales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#booking"
              className="bg-primary text-white text-lg font-black py-4 px-10 rounded-lg hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-primary/30 text-center"
            >
              Book Your Free Strategy Call
            </a>
          </div>
          
          <div className="flex items-center gap-8 py-6 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-primary">$3M+</span>
              <span className="text-[10px] font-bold text-background-dark/40 uppercase tracking-[0.2em] mt-1">Revenue Generated</span>
            </div>
            <div className="h-10 w-px bg-gray-100"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-primary">15+</span>
              <span className="text-[10px] font-bold text-background-dark/40 uppercase tracking-[0.2em] mt-1">Brands Scaled</span>
            </div>
            <div className="h-10 w-px bg-gray-100"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-primary">Global</span>
              <span className="text-[10px] font-bold text-background-dark/40 uppercase tracking-[0.2em] mt-1">Market Reach</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] bg-gray-100 overflow-hidden shadow-2xl relative group">
            <img 
              alt="Nadir Mahmood Professional Portrait" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBidJhWWOBUif00Vfh1GfKuz3L5pPR9I73pM9gO_CkeuMdRFt-nC3hcHpqeLc96EJgMK3Em1v1-AkWJ4AxFAFrVfxe3ndREHS1i634eOD3vJCRtPMsWd7Whm6mDO5OoC5RNjfB75xmH8Q1zXsdutLA7sscqwPduNPkeRfN8lQBMbFkMB8VZ-9aAaxdJfAjapHj3wSaONYuXO2MJ7nQAl7VIs4uev-To2sUoj2Fvh_cQpZh3szvk1_HUgOrR2BOtBsLPvvCXeF1aM80" 
            />
            <div className="absolute bottom-6 left-6 right-6 p-8 glass-card rounded-2xl shadow-xl">
              <p className="text-background-dark text-lg italic font-semibold leading-snug">
                "Nadir didn't just manage our ads; he rebuilt our entire growth engine from the ground up."
              </p>
              <p className="mt-4 text-sm font-black text-primary tracking-wide">— E-commerce Founder, UK Market</p>
            </div>
          </div>
          {/* Decorative Blooms */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
