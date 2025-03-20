import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Portfolio />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;