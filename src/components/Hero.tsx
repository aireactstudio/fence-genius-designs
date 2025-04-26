
import React from 'react';
import Button from './Button';
import { IMAGES } from '@/utils/images';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.HOME_FENCE_1})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h5 className="text-tech-dark font-medium mb-2 md:mb-4">Seattle's Most Innovative</h5>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Custom Fence Design <br className="hidden md:block" />
            <span className="text-wood">& Installation</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-muted-foreground max-w-2xl">
            Experience our revolutionary approach to custom fencing through innovative 
            off-site construction and our proprietary Fence Genius software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">
              Get A Free Quote
            </Button>
            <Button size="lg" variant="outline">
              Learn Our Process
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#services" aria-label="Scroll down">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-wood">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
