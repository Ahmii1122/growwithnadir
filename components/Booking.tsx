
import React from 'react';

const Booking: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-background-light" id="booking">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-50 text-red-600 text-xs font-black uppercase tracking-[0.2em] mb-8 border border-red-100">
          <span className="material-symbols-outlined text-sm font-black">schedule</span>
          Limited strategy slots available weekly
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Book Your Free Growth Call</h2>
        <p className="text-xl text-background-dark/50 font-semibold mb-10 max-w-2xl mx-auto leading-relaxed">
          Let's analyze your current brand performance and map out a path to $100k+ months. No pressure, just value.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] border border-gray-200 shadow-2xl overflow-hidden min-h-[600px] flex items-center justify-center flex-col p-8 md:p-16 relative">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10"></div>
        
        {/* Placeholder for Meeting Scheduler */}
        <div className="w-full max-w-2xl aspect-[16/9] rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center bg-gray-50/50 group hover:border-primary/50 transition-colors cursor-pointer">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-black/5 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-5xl text-gray-300 group-hover:text-primary transition-colors">calendar_today</span>
          </div>
          <p className="font-bold text-background-dark/30 text-center px-10 text-lg">
            [Your Calendar Scheduler Widget Will Appear Here]
          </p>
          <p className="text-sm text-primary/40 mt-4 font-black tracking-widest uppercase">Click to Configure</p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 w-full border-t border-gray-100 pt-12">
          {[
            { label: '1-on-1 Strategy', icon: 'person' },
            { label: 'Custom Audit', icon: 'settings_suggest' },
            { label: 'Revenue Roadmap', icon: 'map' }
          ].map((feature, i) => (
            <div key={i} className="flex items-center justify-center gap-4 group">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary text-xl font-bold group-hover:text-white transition-colors">verified</span>
              </div>
              <span className="text-base font-black text-background-dark/80 tracking-tight">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Booking;
