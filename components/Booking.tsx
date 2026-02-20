import React, { useEffect } from 'react';

const Booking: React.FC = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.setAttribute('type', 'text/javascript');
    script.async = true;
    head?.appendChild(script);

    return () => {
      head?.removeChild(script);
    };
  }, []);
  return (
    <section className="py-12 md:py-16 px-6 md:px-16 bg-background-light" id="booking">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-50 text-red-600 text-xs font-black uppercase tracking-[0.2em] mb-4 border border-red-100">
          <span className="material-symbols-outlined text-sm font-black">schedule</span>
          Limited strategy slots available weekly
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Book Your Free Growth Call</h2>
        <p className="text-lg md:text-xl text-background-dark/50 font-semibold mb-6 max-w-2xl mx-auto leading-relaxed">
          Let's analyze your current brand performance and map out a path to $100k+ months. No pressure, just value.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] overflow-hidden min-h-[600px] flex items-center flex-col p-4 relative w-full shadow-lg">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10"></div>
        
        {/* Meeting Scheduler */}
        <div className="w-full">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/meeting-sprkcreative/30min?hide_gdpr_banner=1" 
            style={{ minWidth: '320px', height: '750px' }}
          ></div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full border-t border-gray-100 pt-6">
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
