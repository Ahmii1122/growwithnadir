
import React from 'react';

const valueItems = [
  {
    icon: 'search_check',
    title: 'Growth Audit',
    desc: 'A deep dive into your current metrics, tracking setup, and funnel leaks to identify immediate win opportunities.'
  },
  {
    icon: 'ads_click',
    title: 'Paid Ads Strategy',
    desc: 'Full-funnel Meta & Google ad strategies focused on ROAS and sustainable customer acquisition costs.'
  },
  {
    icon: 'conversion_path',
    title: 'Funnel Insights',
    desc: 'Optimization of your landing pages and checkout flow to maximize every dollar spent on traffic.'
  },
  {
    icon: 'map',
    title: 'Scaling Roadmap',
    desc: 'A step-by-step 90-day execution plan to take your brand from its current state to its revenue target.'
  }
];

const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-white" id="strategy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">What You Get</h2>
          <p className="text-background-dark/50 text-xl font-semibold">A comprehensive growth infrastructure designed for high-ticket results.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valueItems.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-8 p-10 rounded-3xl border border-gray-100 hover:border-primary/40 hover:bg-primary/[0.01] transition-all group">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                <span className="material-symbols-outlined text-3xl font-bold">{item.icon}</span>
              </div>
              <div>
                <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-background-dark/60 text-lg leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
