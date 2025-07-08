import { useState, useEffect } from 'react';
import { Menu, X} from 'lucide-react';
import GetStarted from './other/GetStarted';
import SpinLogo from './other/SpinLogo';
import logo from "@/assets/logo.svg"

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
              <img
                src={logo}
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
              <GetStarted/>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
