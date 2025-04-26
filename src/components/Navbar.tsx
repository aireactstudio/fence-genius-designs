
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="text-wood-dark font-serif font-bold text-2xl">Fence Genius</span>
          <span className="text-tech hidden md:inline-block">Designs</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-foreground hover:text-wood transition-colors">Services</a>
          <a href="#process" className="text-foreground hover:text-wood transition-colors">Our Process</a>
          <a href="#about" className="text-foreground hover:text-wood transition-colors">About Us</a>
          <a href="#contact">
            <Button variant="primary">Contact Us</Button>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <a href="#services" className="text-foreground hover:text-wood py-2 transition-colors" onClick={toggleMenu}>
              Services
            </a>
            <a href="#process" className="text-foreground hover:text-wood py-2 transition-colors" onClick={toggleMenu}>
              Our Process
            </a>
            <a href="#about" className="text-foreground hover:text-wood py-2 transition-colors" onClick={toggleMenu}>
              About Us
            </a>
            <a href="#contact" onClick={toggleMenu}>
              <Button variant="primary" className="w-full">Contact Us</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
