
import React from 'react';

const results = [
  {
    icon: 'payments',
    title: 'Revenue Boost',
    desc: 'Significant increase in ecommerce revenue through funnel optimization.',
    stat: '+140% avg',
    statIcon: 'trending_up'
  },
  {
    icon: 'filter_alt',
    title: 'ROAS Focus',
    desc: 'Improving return on ad spend by refining targeting and creative strategy.',
    stat: '4.5x - 8x',
    statIcon: 'trending_up'
  },
  {
    icon: 'hub',
    title: 'Lead Systems',
    desc: 'Built scalable lead generation systems for service-based founders.',
    stat: 'Consistent Flow',
    statIcon: 'trending_up'
  },
  {
    icon: 'language',
    title: 'Market Expansion',
    desc: 'Successful cross-border expansion into USA and UAE markets.',
    stat: 'Global Ready',
    statIcon: 'done_all'
  }
];

const Results: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-background-light" id="results">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Proven Growth Across Markets</h2>
          <p className="text-background-dark/50 max-w-2xl mx-auto text-lg font-semibold">Real results for real businesses. No fluff, just consistent upward trajectories.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">{item.icon}</span>
              </div>
              <h3 className="font-black text-xl mb-4">{item.title}</h3>
              <p className="text-sm text-background-dark/60 font-medium leading-relaxed mb-6">{item.desc}</p>
              <div className="flex items-center gap-2 text-green-600 font-black text-sm tracking-wide bg-green-50 w-fit px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-sm font-bold">{item.statIcon}</span>
                {item.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
