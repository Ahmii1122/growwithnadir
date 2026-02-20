
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Results from './components/Results';
import TargetAudience from './components/TargetAudience';
import ValueProposition from './components/ValueProposition';
import Booking from './components/Booking';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Results />
        <TargetAudience />
        <ValueProposition />
        <Booking />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
