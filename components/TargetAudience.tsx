
import React from 'react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-background-dark text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-12 text-white tracking-tight">Who This Is For</h2>
            <ul className="space-y-10">
              {[
                {
                  title: 'E-commerce brands struggling to scale',
                  desc: "You've hit a revenue ceiling and can't figure out how to break past it without losing profit."
                },
                {
                  title: 'Founders tired of inconsistent sales',
                  desc: 'One day is great, the next is dead. You need a predictable growth engine, not a rollercoaster.'
                },
                {
                  title: 'Businesses wasting money on ads',
                  desc: "You are spending thousands on Meta or Google but the ROI just isn't there. Something is broken."
                }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-6 group">
                  <div className="mt-1 w-10 h-10 shrink-0 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                    <span className="material-symbols-outlined text-primary group-hover:text-white">warning</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black mb-2 text-white">{item.title}</h4>
                    <p className="text-gray-400 text-lg font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-primary/5 border border-primary/20 rounded-[2.5rem] p-12 lg:p-16 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px]"></div>
              
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-primary/20 animate-pulse">
                <span className="material-symbols-outlined text-primary text-6xl">lightbulb</span>
              </div>
              
              <h3 className="text-3xl font-black mb-6 text-white">Sound Like You?</h3>
              <p className="text-gray-400 text-lg font-medium mb-10">Stop guessing and start scaling with a proven growth framework.</p>
              
              <a 
                href="#booking"
                className="w-full bg-primary text-white font-black py-5 rounded-2xl hover:bg-primary/90 transition-all text-xl shadow-xl shadow-primary/20 active:scale-95"
              >
                Get Your Free Strategy Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
