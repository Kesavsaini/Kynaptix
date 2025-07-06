import { useState, useEffect } from 'react';
import { Menu, X, Zap, Bot, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GetStarted from './other/GetStarted';
import SpinLogo from './other/SpinLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 rounded-lg z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect neon-glow' : 'glass-effect'
      } w-max`}
    >
      <div className="px-6 py-3 rounded-lg border border-white/10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 mr-8">
            <div className="relative">
              {/* <Bot className="h-8 w-8 text-neon-blue animate-glow" />
              <Sparkles className="h-3 w-3 text-neon-pink absolute -top-1 -right-1 animate-pulse" /> */}
              <img
                src="/logo.svg"
                alt="AI Agency Logo"
                className="h-8 w-8"
              />
              {/* <SpinLogo/> */}
            </div>
            <span className="text-xl font-bold text-white">
              Kynaptix
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-200 hover:scale-105 transform"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block ml-8">
            {/* <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/25">
              <Zap className="w-4 h-4 mr-2" />
              Get Started
            </Button> */}
             <GetStarted/>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {/* <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white w-full mt-4 rounded-full">
                <Zap className="w-4 h-4 mr-2" />
                Get Started
              </Button> */}
              <GetStarted/>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
