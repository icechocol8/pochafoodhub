import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Services from './components/Services';
import Location from './components/Location';
import About from './components/About';
import { CartItem, MenuItem } from './types';
import { STORE_INFO } from './data';
import { Facebook, Instagram, Phone, MapPin, Clock, MessageSquare, Coffee } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (item: MenuItem, quantity: number, sugar: string, ice: string, variation?: { name: string; price: number }) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (c) => 
          c.menuItem.id === item.id && 
          c.sweetness === sugar && 
          c.ice === ice &&
          c.selectedVariation?.name === variation?.name
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      }

      return [
        ...prev, 
        { 
          menuItem: item, 
          quantity, 
          sweetness: sugar as any, 
          ice: ice as any,
          selectedVariation: variation
        }
      ];
    });
    // Open cart drawer immediately to give instant visual feedback
    setIsCartOpen(true);
  };

  const handleUpdateCartQty = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, idx) => idx !== index));
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F9FAF6] text-gray-800 font-sans selection:bg-[#52B447]/20 selection:text-[#224F18] flex flex-col">
      
      {/* Absolute brand header bar to cover details */}
      <Navbar 
        cartCount={totalCartCount} 
        onCartClick={() => setIsCartOpen(!isCartOpen)} 
      />

      {/* Main visual blocks */}
      <main className="flex-grow">
        
        {/* Landing Section */}
        <Hero />

        {/* Dynamic Digital Menu (featuring categories + cart compile) */}
        <Menu 
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
          onUpdateCartQty={handleUpdateCartQty}
          onRemoveCartItem={handleRemoveCartItem}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />

        {/* Highlighted Services segment */}
        <Services />

        {/* Location + Live Hours Map segment */}
        <Location />

        {/* Concept Story / Heritage */}
        <About />

      </main>

      {/* Solid, elegant Footer */}
      <footer className="bg-[#1C331A] text-white pt-16 pb-8 border-t border-green-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-green-900/60">
            
            {/* Logo/Description brand segment */}
            <div className="flex flex-col items-start text-left md:col-span-1.5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white overflow-hidden p-0.5 border border-green-800 shrink-0">
                  <img 
                    src={STORE_INFO.logo} 
                    alt="Pocha Food Hub" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=80";
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-xl tracking-tight leading-none text-[#52B447]">
                    Pocha
                  </span>
                  <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest mt-0.5 leading-none">
                    Food Hub
                  </span>
                </div>
              </div>
              <p className="font-sans text-xs text-gray-400 leading-relaxed mb-6">
                Warm Pojangmacha street food recipes meets carefully cooled, brown-sugar boba teas. Crafted fresh for Bacolod City sweet-tooth adventurers.
              </p>
              
              {/* Simple Human Brand Socials */}
              <div className="flex items-center gap-3">
                <a 
                  href={STORE_INFO.socials.facebook} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 rounded-full bg-green-900/60 hover:bg-[#52B447] text-gray-200 hover:text-white transition-all focus:outline-none"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href={STORE_INFO.socials.instagram} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 rounded-full bg-green-900/60 hover:bg-[#52B447] text-gray-200 hover:text-white transition-all focus:outline-none"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-left">
              <h4 className="font-display font-bold text-sm uppercase tracking-widest text-gray-300 mb-4.5">
                Our Sections
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400 font-sans font-medium">
                <li><a href="#menu" className="hover:text-white hover:underline transition-colors">&rarr; Digital Menu</a></li>
                <li><a href="#services" className="hover:text-white hover:underline transition-colors">&rarr; Store Services</a></li>
                <li><a href="#location" className="hover:text-white hover:underline transition-colors">&rarr; Location & Maps</a></li>
                <li><a href="#about" className="hover:text-white hover:underline transition-colors">&rarr; Story & Philosophy</a></li>
              </ul>
            </div>

            {/* Direct Contacts */}
            <div className="text-left">
              <h4 className="font-display font-bold text-sm uppercase tracking-widest text-gray-300 mb-4.5">
                Contact Details
              </h4>
              <ul className="space-y-3 text-xs text-gray-400 font-sans">
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#52B447] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-gray-300 font-medium">{STORE_INFO.phone}</span>
                    <span className="text-[10px] text-gray-500">Mobile Support</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-xs text-[#52B447]">✉</span>
                  <div>
                    <span className="block text-gray-300 font-medium">{STORE_INFO.email}</span>
                    <span className="text-[10px] text-gray-500">Inbound emails</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Store Information Summary */}
            <div className="text-left">
              <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#52B447] mb-4.5">
                Store Status
              </h4>
              <p className="text-xs text-gray-400 mb-3 leading-normal">
                Open Daily from 11:00 AM. Dine-in seats available with direct study charging units.
              </p>
              <div className="flex items-center gap-2 bg-green-950/60 p-3 rounded-xl border border-green-900">
                <Clock className="w-4 h-4 text-[#52B447]" />
                <span className="text-[10px] font-mono text-gray-300 font-medium font-semibold tracking-wide">Bacolod Branch Code: PB-610</span>
              </div>
            </div>

          </div>

          {/* Under footer */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-left text-[11px] text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Pocha Food Hub Bacolod. All Rights Reserved.
            </p>
            <p className="mt-2.5 sm:mt-0 font-sans">
              Authentic Gochujang and Premium Handshaken Boba Teas.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
