import React, { useEffect, useState } from 'react';
import { ChevronDown, Play } from 'lucide-react';
import bgImage from '../../assets/Rafeek.jpg';


export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />
      
      <div className={`relative z-20 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 mb-4">
          Muhammed Rafeek
        </h1>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <span className="text-2xl md:text-3xl text-gray-300">Writer</span>
          <div className="w-2 h-2 rounded-full bg-gold-500" />
          <span className="text-2xl md:text-3xl text-gray-300">Director</span>
        </div>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 font-inter">
          Crafting Stories, Directing Dreams
        </p>
        <button
          onClick={scrollToPortfolio}
          className="px-8 py-3 bg-transparent border-2 border-gold-500 text-gold-500 rounded-full hover:bg-gold-500 hover:text-black transition-all duration-300 flex items-center space-x-2 mx-auto"
        >
          <span>View My Work</span>
          <Play className="w-4 h-4" />
        </button>
      </div>

      <button
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-gold-500 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </div>
  );
}