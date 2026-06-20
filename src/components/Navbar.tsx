import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, MapPin, Sparkles, HelpCircle } from 'lucide-react';
import { STORE_INFO } from '../data';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Digital Menu', href: '#menu' },
    { name: 'Services', href: '#services' },
    { name: 'Our Location', href: '#location' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100/80 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center group focus:outline-none" aria-label="Pocha Food Hub Home">
            <div className="h-14 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img 
                src={STORE_INFO.logo} 
                alt="Pocha Food Hub" 
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if logo of Pocha is unavailable
                  e.currentTarget.src = "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=100";
                }}
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="font-sans font-medium text-gray-700 hover:text-[#52B447] transition-colors text-sm px-1 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#52B447] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action buttons (Order tray + Call action) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative p-2.5 rounded-full text-gray-700 hover:bg-[#F2F7F2] hover:text-[#52B447] transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#52B447]"
              title="Draft Order Tray"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#EE3B3B] text-white font-sans text-xs font-bold leading-none w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
            <a 
              href={STORE_INFO.socials.foodpanda}
              target="_blank"
              rel="noreferrer"
              className="bg-[#52B447] hover:bg-[#469d3c] active:bg-[#3d8934] text-white font-display font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-green-200 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Order Online
            </a>
          </div>

          {/* Mobile responsive buttons */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full text-gray-700 focus:outline-none"
            >
              <ShoppingBag className="w-5.5 h-5.5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#EE3B3B] text-white font-sans text-[10px] font-bold leading-none w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out">
          <div className="px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl font-sans font-semibold text-gray-800 hover:bg-[#F2F7F2] hover:text-[#52B447] transition-all text-base"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onCartClick();
                }}
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 text-gray-800 font-sans font-semibold"
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#52B447]" />
                  <span>Draft Order Sheet</span>
                </div>
                <span className="bg-[#52B447] text-white text-xs px-2.5 py-1 rounded-full font-bold">
                  {cartCount} Items
                </span>
              </button>
              <a 
                href={STORE_INFO.socials.foodpanda}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#52B447] text-white font-display font-bold py-3.5 rounded-xl shadow-md"
              >
                Order Online Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
