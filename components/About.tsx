
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-16 border-y border-gray-100" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8 text-background-dark tracking-tight">The Strategy Behind <br/>the Success</h2>
            <div className="space-y-6 text-xl text-background-dark/70 leading-relaxed font-medium">
              <p>
                I am Nadir Mahmood, a performance marketer & growth strategist focused on one thing: <span className="text-background-dark font-black border-b-2 border-primary/20">Scalable Revenue.</span>
              </p>
              <p>
                Unlike "agencies" that focus on vanity metrics like clicks and impressions, I build systems that turn traffic into profit. My approach integrates deep funnel psychology with technical ad stack optimization.
              </p>
              <p>
                Currently helping brands dominate in key global markets including <span className="font-bold text-primary hover:underline cursor-pointer">Pakistan, UK, UAE & USA</span>.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-10 rounded-2xl bg-background-light border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-4xl">public</span>
              </div>
              <h4 className="font-black text-xl mb-3">Global Scale</h4>
              <p className="text-base text-background-dark/50 font-medium">Expertise in navigating diverse consumer behaviors across 4 major global markets.</p>
            </div>
            
            <div className="p-10 rounded-2xl bg-background-light border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-4xl">analytics</span>
              </div>
              <h4 className="font-black text-xl mb-3">Data First</h4>
              <p className="text-base text-background-dark/50 font-medium">Decisions driven by attribution and hard ROI, not guesswork or intuition.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
