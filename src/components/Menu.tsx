import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Sparkles, 
  Plus, 
  Minus, 
  ShoppingBag, 
  HelpCircle, 
  X, 
  Check, 
  Coffee, 
  Flame, 
  PlusCircle, 
  DollarSign, 
  Send,
  MessageCircle
} from 'lucide-react';
import { MENU_ITEMS, STORE_INFO } from '../data';
import { MenuItem, CartItem } from '../types';

interface MenuProps {
  onAddToCart: (item: MenuItem, quantity: number, sugar: string, ice: string, variation?: { name: string; price: number }) => void;
  cartItems: CartItem[];
  onUpdateCartQty: (index: number, newQty: number) => void;
  onRemoveCartItem: (index: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

export default function Menu({ 
  onAddToCart, 
  cartItems, 
  onUpdateCartQty, 
  onRemoveCartItem, 
  isCartOpen, 
  setIsCartOpen 
}: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'milktea' | 'kfood' | 'other' | 'coffee'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Customization dialog state
  const [selectedCustomizeItem, setSelectedCustomizeItem] = useState<MenuItem | null>(null);
  const [itemQty, setItemQty] = useState(1);
  const [selectedSugar, setSelectedSugar] = useState<'0%' | '25%' | '50%' | '70%' | '100%'>('100%');
  const [selectedIce, setSelectedIce] = useState<'No Ice' | 'Less Ice' | 'Normal Ice'>('Normal Ice');
  const [selectedVariation, setSelectedVariation] = useState<{ name: string; price: number } | null>(null);

  // Order slip state (final slip summary popup)
  const [showSlip, setShowSlip] = useState(false);
  const [orderSlipId, setOrderSlipId] = useState('');

  // Filtering menu items
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenCustomize = (item: MenuItem) => {
    setSelectedCustomizeItem(item);
    setItemQty(1);
    setSelectedSugar('100%');
    setSelectedIce('Normal Ice');
    setSelectedVariation(item.variations && item.variations.length > 0 ? item.variations[0] : null);
  };

  const handleConfirmAdd = () => {
    if (selectedCustomizeItem) {
      onAddToCart(
        selectedCustomizeItem, 
        itemQty, 
        (selectedCustomizeItem.category === 'milktea' || selectedCustomizeItem.category === 'coffee') ? selectedSugar : '', 
        (selectedCustomizeItem.category === 'milktea' || selectedCustomizeItem.category === 'coffee') ? selectedIce : '',
        selectedVariation || undefined
      );
      setSelectedCustomizeItem(null);
    }
  };

  const handleGenerateSlip = () => {
    const randomId = 'POCHA-' + Math.floor(1000 + Math.random() * 9000);
    setOrderSlipId(randomId);
    setShowSlip(true);
  };

  const cartTotal = cartItems.reduce((acc, curr) => acc + ((curr.selectedVariation ? curr.selectedVariation.price : curr.menuItem.price) * curr.quantity), 0);

  const categories = [
    { id: 'all', name: 'Show All' },
    { id: 'milktea', name: 'Milk Tea' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'kfood', name: 'Finger Foods' },
    { id: 'other', name: 'Other Beverages' }
  ];

  return (
    <section id="menu" className="py-24 bg-[#F9FAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#52B447] text-xs font-bold uppercase tracking-widest bg-[#EBF6EB] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Pure Indulgence
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1E3F16] tracking-tight">
            Our Digital Menu
          </h2>
          <p className="font-sans text-sm text-gray-500 mt-2">
            Brewed individually, fried crisply. Click any item to customize sweetness, toppings, and arrange your pickup slip!
          </p>
          <div className="h-1.5 w-16 bg-[#52B447] mx-auto rounded-full mt-4" />
        </div>

        {/* Filter controls + Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Categories Tab selectors */}
          <div className="flex flex-wrap gap-2.5 items-center justify-center bg-white p-1.5 rounded-full border border-gray-150 shadow-sm w-full lg:w-auto overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`font-display font-semibold text-xs px-5 py-2.5 rounded-full transition-all shrink-0 focus:outline-none ${
                  activeCategory === cat.id 
                    ? 'bg-[#52B447] text-white shadow-md' 
                    : 'text-gray-600 hover:text-[#52B447] hover:bg-gray-50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search box styling */}
          <div className="relative w-full lg:max-w-xs shrink-0 shadow-sm rounded-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-4.5 top-1/2 transform -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search coffee, milktea, fries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 pl-11 pr-5 py-3 rounded-full text-xs font-sans font-medium text-gray-700 placeholder-gray-450 focus:outline-none focus:ring-2 focus:ring-[#52B447] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Menu grid item listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              {/* Image box */}
              <div className="relative overflow-hidden aspect-[4/3] bg-stone-100 border-b border-gray-50">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallbacks for broken links
                    if (item.category === 'kfood') {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400";
                    } else if (item.category === 'milktea') {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=400";
                    } else if (item.category === 'coffee') {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400";
                    } else {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=400";
                    }
                  }}
                />

                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-[#FF4500] text-white text-[10px] font-sans font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 animate-spin duration-3000" />
                    <span>BEST SELLER</span>
                  </div>
                )}

                {/* Price Display */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm shadow-md rounded-xl py-1.5 px-3.5 border border-stone-200">
                  <span className="font-display font-black text-base text-[#1E3F16]">
                    {item.variations && item.variations.length > 0
                      ? `₱${Math.min(...item.variations.map(v => v.price))}+`
                      : `₱${item.price}.00`
                    }
                  </span>
                </div>
              </div>

              {/* Text Segment */}
              <div className="p-6 flex flex-col flex-1 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                    item.category === 'milktea' 
                      ? 'bg-blue-50 text-blue-600' 
                      : item.category === 'coffee'
                      ? 'bg-amber-100/75 text-[#5D4037]'
                      : item.category === 'kfood' 
                      ? 'bg-amber-50 text-amber-600' 
                      : 'bg-teal-50 text-teal-600'
                  }`}>
                    {item.category === 'milktea' ? 'Milk Tea' : item.category === 'coffee' ? 'Coffee' : item.category === 'kfood' ? 'Finger Foods' : 'Other Beverages'}
                  </span>
                  
                  {item.category === 'kfood' && item.name.includes('Spicy') && (
                    <span className="bg-red-50 text-red-600 text-[9px] font-extrabold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                      <Flame className="w-2.5 h-2.5" /> Spicy
                    </span>
                  )}

                  {item.vegetarian && (
                    <span className="bg-emerald-50 text-emerald-600 text-[9px] font-extrabold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                      🥬 Vegetarian
                    </span>
                  )}
                </div>

                <h3 className="font-display font-black text-[#1E3F16] text-lg mb-2 group-hover:text-[#52B447] transition-colors">
                  {item.name}
                </h3>
                
                <p className="font-sans text-xs text-gray-500 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.dietaryInfo && (
                  <div className="mb-4 mt-1 p-3 bg-emerald-50/40 border border-emerald-100 rounded-2xl">
                    <span className="text-[9px] font-black text-emerald-800 uppercase tracking-widest block mb-0.5">
                      Dietary Information
                    </span>
                    <p className="text-[10px] text-emerald-700 font-medium leading-relaxed">
                      {item.dietaryInfo}
                    </p>
                  </div>
                )}

                {item.variations && item.variations.length > 0 && (
                  <div className="mb-6 p-4 bg-[#FAFDF9] border border-[#DEEDE0] rounded-2xl">
                    <span className="font-display font-extrabold text-[10px] text-[#224F18] uppercase tracking-wider block mb-2">
                      Variations:
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 text-left">
                      {item.variations.map((v) => (
                        <div key={v.name} className="flex flex-col p-2 bg-white border border-gray-100 rounded-xl shadow-xs">
                          <span className="font-sans text-[10px] font-bold text-gray-500 leading-tight">
                            {v.name}
                          </span>
                          <span className="font-display font-black text-xs text-[#224F18] mt-0.5">
                            ₱{v.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add trigger */}
                <button
                  onClick={() => handleOpenCustomize(item)}
                  className="w-full mt-auto flex items-center justify-center gap-2 bg-[#F2F7F2] hover:bg-[#52B447] text-[#1E3F16] hover:text-white font-display font-extrabold text-xs py-3 rounded-2xl transition-all border border-[#CBDDC7] hover:border-transparent cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Configure & Add</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty layout filter handler */}
        {filteredItems.length === 0 && (
          <div className="bg-white rounded-3xl p-16 border border-gray-100 shadow-sm text-center max-w-xl mx-auto my-12">
            <span className="text-4xl">🍵</span>
            <h3 className="font-display font-bold text-lg text-gray-800 mt-4">We couldn't find matches</h3>
            <p className="font-sans text-xs text-gray-400 mt-1.5">
              Try readjusting your search spelling or clean the keyword to view the complete food catalog.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-6 bg-[#52B447] text-white font-display font-bold text-xs px-5 py-2.5 rounded-full"
            >
              Show Complete Menu
            </button>
          </div>
        )}

      </div>

      {/* Cart Drawer sheet overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop click handler */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
              onClick={() => setIsCartOpen(false)}
            />

            {/* Sidebar drawer container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:max-w-md bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* Header drawer */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-left">
                  <div className="p-2 bg-[#EEF8EE] rounded-xl text-[#52B447]">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-[#1E3F16] text-lg">My Order Draft</h3>
                    <p className="text-[10px] text-gray-400 font-sans">Compile your items for pickup pre-ordering</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-full hover:bg-gray-100 text-gray-450 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items listing core */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.map((item, idx) => (
                  <div 
                    key={item.menuItem.id + '-' + idx}
                    className="flex gap-4 items-start p-4 bg-gray-50/70 rounded-2xl border border-gray-100 flex-1 relative group"
                  >
                    {/* Tiny representation image */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone-100 border border-gray-100 shrink-0">
                      <img 
                        src={item.menuItem.image} 
                        alt={item.menuItem.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Meta descriptions */}
                    <div className="flex-1 text-left min-w-0">
                      <h4 className="font-display font-black text-sm text-[#1E3F16] truncate">
                        {item.menuItem.name}
                      </h4>
                      <p className="font-display font-extrabold text-[#52B447] text-xs mt-0.5">
                        ₱{item.selectedVariation ? item.selectedVariation.price : item.menuItem.price}.00 x {item.quantity}
                      </p>
                      
                      {/* Cust attributes */}
                      {(item.sweetness || item.ice || item.selectedVariation) && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {item.selectedVariation && (
                            <span className="text-[9px] font-bold bg-[#F2F7F2] text-[#1E3F16] px-1.5 py-0.5 rounded border border-[#CBDDC7]">
                              Size: {item.selectedVariation.name}
                            </span>
                          )}
                          {item.sweetness && (
                            <span className="text-[9px] font-bold bg-[#EBF6EB] text-[#224F18] px-1.5 py-0.5 rounded">
                              Sugar: {item.sweetness}
                            </span>
                          )}
                          {item.ice && (
                            <span className="text-[9px] font-bold bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">
                              Ice: {item.ice}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Qty controller + Delete trigger */}
                    <div className="flex flex-col items-end justify-between self-stretch gap-2 shrink-0">
                      <button
                        onClick={() => onRemoveCartItem(idx)}
                        className="text-stone-300 hover:text-red-500 p-0.5 font-bold text-xs"
                        title="Remove item"
                      >
                        Remove
                      </button>

                      <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-lg p-0.5 shadow-sm">
                        <button
                          onClick={() => onUpdateCartQty(idx, item.quantity - 1)}
                          className="p-1 rounded text-gray-500 hover:bg-gray-50 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs font-black min-w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateCartQty(idx, item.quantity + 1)}
                          className="p-1 rounded text-gray-500 hover:bg-gray-50 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                  </div>
                ))}

                {cartItems.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-20 text-center text-gray-400">
                    <span className="text-3xl mb-4">🛒</span>
                    <span className="font-display font-bold text-sm text-gray-600">Your draft order sheet is empty</span>
                    <span className="text-xs text-gray-400 max-w-xs mt-1 leading-normal">
                      Browse our list, click "Configure & Add", then customize your drink level ratios!
                    </span>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 bg-[#52B447] text-white font-display font-medium text-xs px-5 py-2.5 rounded-full shadow-md cursor-pointer"
                    >
                      Browse Milk Teas
                    </button>
                  </div>
                )}
              </div>

              {/* Order total & checkout slip generator */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-gray-100 space-y-4">
                  <div className="flex justify-between items-center text-left">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-gray-400 font-sans">ESTIMATED TOTAL</span>
                      <span className="text-[10px] text-gray-400">No hidden service tax fees</span>
                    </div>
                    <span className="font-display font-black text-2xl text-[#1E3F16]">
                      ₱{cartTotal}.00
                    </span>
                  </div>

                  <button
                    onClick={handleGenerateSlip}
                    className="w-full bg-[#52B447] hover:bg-[#469d3c] active:bg-[#3d8934] text-white font-display font-black text-sm py-4 rounded-2xl shadow-lg shadow-green-100 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                  >
                    <span>Pre-Order for Counter Pick-up</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="relative flex items-center justify-center py-1">
                    <span className="absolute inset-x-0 h-px bg-gray-100" />
                    <span className="relative bg-white px-3.5 text-[9px] text-gray-400 font-bold uppercase tracking-widest">or</span>
                  </div>

                  <a 
                    href={STORE_INFO.socials.foodpanda}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#D70F64] hover:bg-[#c20d5a] text-white font-display font-black text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2 focus:outline-none transition-all shadow shadow-pink-50 text-center"
                  >
                    <span>Instant Delivery via Foodpanda</span>
                  </a>

                  <p className="text-[10px] text-center text-gray-400 font-sans leading-normal">
                    Pick-up compiles a free Messenger voucher. Choose Foodpanda for premier hot delivery straight to your door!
                  </p>
                </div>
              )}

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cust/Add dialog modal */}
      <AnimatePresence>
        {selectedCustomizeItem && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
              onClick={() => setSelectedCustomizeItem(null)}
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 bg-white rounded-3xl p-6 shadow-2xl z-50 max-w-md w-full max-h-[85vh] overflow-y-auto flex flex-col text-left"
            >
              {/* Header customize */}
              <div className="flex items-start justify-between pb-4 border-b border-gray-100 mb-5">
                <div className="flex flex-col text-left">
                  <span className="text-[#52B447] text-[10px] font-sans font-black uppercase tracking-widest mb-1">
                    Customization Config
                  </span>
                  <h3 className="font-display font-black text-xl text-[#1E3F16] leading-snug">
                    {selectedCustomizeItem.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCustomizeItem(null)}
                  className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Setup options scroll area */}
              <div className="space-y-6 flex-1 pr-1.5 overflow-y-auto">
                {/* Visual item pricing stats */}
                <div className="flex gap-4 items-center p-3 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-gray-100">
                    <img 
                      src={selectedCustomizeItem.image} 
                      alt="" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="font-display font-black text-base text-[#1E3F16]">
                      ₱{selectedVariation ? selectedVariation.price : selectedCustomizeItem.price}.00
                    </span>
                    <p className="font-sans text-[11px] text-gray-400 mt-0.5">
                      {selectedVariation ? `Active selected size: ${selectedVariation.name}` : 'Base price of product category'}
                    </p>
                  </div>
                </div>

                {/* Dietary Information */}
                {selectedCustomizeItem.dietaryInfo && (
                  <div className="p-4 bg-emerald-50/65 border border-emerald-100 rounded-2xl">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-display font-black text-xs uppercase tracking-wider mb-1.5">
                      <span>🥬 Dietary Information</span>
                    </div>
                    <p className="font-sans text-xs text-emerald-800 font-black mb-0.5">
                      Vegetarian
                    </p>
                    <p className="font-sans text-[11px] text-emerald-700 leading-relaxed">
                      {selectedCustomizeItem.dietaryInfo}
                    </p>
                  </div>
                )}

                {/* Display sweet levels, sizes, and ice ratio if it is a milktea or coffee beverage */}
                {(selectedCustomizeItem.category === 'milktea' || selectedCustomizeItem.category === 'coffee') ? (
                  <>
                    {/* Variations selection */}
                    {selectedCustomizeItem.variations && selectedCustomizeItem.variations.length > 0 && (
                      <div>
                        <h4 className="font-display font-black text-xs text-[#1E3F16] uppercase tracking-wider mb-3">
                          Select Variation / Size:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedCustomizeItem.variations.map((v) => (
                            <button
                              key={v.name}
                              onClick={() => setSelectedVariation(v)}
                              className={`p-3 rounded-2xl text-left border transition-all ${
                                selectedVariation?.name === v.name
                                  ? 'bg-[#EBF6EB] border-[#52B447] text-[#1E3F16]'
                                  : 'bg-white border-gray-200 text-gray-700 hover:border-[#52B447]'
                              }`}
                            >
                              <div className="text-[10px] font-bold font-sans uppercase tracking-tight">{v.name}</div>
                              <div className="text-xs font-black font-display text-[#52B447] mt-1">₱{v.price}.00</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Sugar portion */}
                    <div>
                      <h4 className="font-display font-black text-xs text-[#1E3F16] uppercase tracking-wider mb-3">
                        Adjust Sugar sweetness level:
                      </h4>
                      <div className="grid grid-cols-5 gap-1.5">
                        {(['0%', '25%', '50%', '70%', '100%'] as const).map((lvl) => (
                          <button
                            key={lvl}
                            onClick={() => setSelectedSugar(lvl)}
                            className={`py-2 px-1 rounded-xl text-xs font-mono font-bold transition-all border ${
                              selectedSugar === lvl
                                ? 'bg-[#52B447] text-white border-transparent shadow shadow-green-150'
                                : 'bg-white border-gray-200 text-gray-600 hover:border-[#52B447]'
                            }`}
                          >
                            {lvl}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Ice Portion */}
                    <div>
                      <h4 className="font-display font-black text-xs text-[#1E3F16] uppercase tracking-wider mb-3">
                        Ice Ratio:
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {(['No Ice', 'Less Ice', 'Normal Ice'] as const).map((lvl) => (
                          <button
                            key={lvl}
                            onClick={() => setSelectedIce(lvl)}
                            className={`py-2.5 px-1 rounded-xl text-xs font-sans font-semibold transition-all border ${
                              selectedIce === lvl
                                ? 'bg-[#52B447] text-white border-transparent shadow shadow-green-150'
                                : 'bg-white border-gray-200 text-gray-500 hover:border-[#52B447]'
                            }`}
                          >
                            {lvl}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-xs text-gray-400 italic bg-amber-50/50 border border-amber-100 p-3.5 rounded-2xl">
                    💡 This food/topping item is pre-seasoned and prepared with optimal kitchen values to guarantee crispiness and taste profile.
                  </div>
                )}

                {/* Portion Quantity */}
                <div>
                  <h4 className="font-display font-black text-xs text-[#1E3F16] uppercase tracking-wider mb-3">
                    Quantity Portions:
                  </h4>
                  <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-150 rounded-2xl p-1 shadow-inner">
                    <button
                      onClick={() => setItemQty(Math.max(1, itemQty - 1))}
                      className="p-2 bg-white rounded-xl shadow-sm hover:bg-gray-150 text-gray-600 focus:outline-none"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-mono text-sm font-black min-w-8 text-center">
                      {itemQty}
                    </span>
                    <button
                      onClick={() => setItemQty(itemQty + 1)}
                      className="p-2 bg-white rounded-xl shadow-sm hover:bg-gray-150 text-gray-600 focus:outline-none"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Subtotal confirm bar */}
              <div className="pt-4 border-t border-gray-100 mt-6 flex justify-between items-center">
                <div className="text-left">
                  <span className="text-[10px] text-gray-400 font-sans block">ITEM SUB-TOTAL</span>
                  <span className="font-display font-black text-lg text-[#1E3F16]">
                    ₱{((selectedVariation ? selectedVariation.price : selectedCustomizeItem.price) * itemQty)}.00
                  </span>
                </div>
                <button
                  onClick={handleConfirmAdd}
                  className="bg-[#52B447] hover:bg-[#469d3c] text-white font-display font-black text-xs px-6 py-3.5 rounded-2xl shadow-lg transition-all transform active:scale-95"
                >
                  Confirm Add to Draft
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Slip Modal Popup */}
      <AnimatePresence>
        {showSlip && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
              onClick={() => setShowSlip(false)}
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 bg-white rounded-3xl p-6.5 shadow-2xl z-51 max-w-md w-full overflow-y-auto max-h-[90vh] flex flex-col text-left"
            >
              <div className="flex items-center justify-between pb-3 border-b border-dashed border-gray-200 mb-4">
                <span className="font-display font-extrabold text-xs text-[#52B447] uppercase tracking-wide">
                  📋 Draft Slip Generated
                </span>
                <button
                  onClick={() => setShowSlip(false)}
                  className="p-1 hover:bg-gray-100 rounded-full text-gray-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Simulated Slip graphic */}
              <div className="bg-[#FAFDF9] border border-[#DEEDE0] rounded-2xl p-5.5 font-mono text-xs text-gray-700 leading-normal mb-6 relative overflow-hidden">
                {/* Thermal card graphics */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#52B447] via-[#224F18] to-[#52B447]" />
                
                <div className="text-center pb-4 border-b border-dashed border-gray-200 mb-4 flex flex-col items-center">
                  <span className="font-display font-black text-sm text-[#1E3F16]">POCHA FOOD HUB</span>
                  <span className="text-[9px] text-gray-400 mt-0.5">{STORE_INFO.address.slice(0, 36)}...</span>
                  <span className="text-[10px] bg-[#EBF6EB] text-[#224F18] font-bold px-2 py-0.5 rounded mt-2">
                    CODE: {orderSlipId}
                  </span>
                </div>

                <div className="space-y-3 pb-4 border-b border-dashed border-gray-200">
                  {cartItems.map((c, i) => (
                    <div key={i} className="flex justify-between items-start text-left">
                      <div className="pr-4">
                        <div className="font-bold">{c.menuItem.name}</div>
                        {(c.sweetness || c.ice || c.selectedVariation) && (
                          <div className="text-[10px] text-gray-400 font-medium">
                            {c.selectedVariation ? `Size:${c.selectedVariation.name}` : ''} {c.sweetness ? ` Sgr:${c.sweetness}` : ''} {c.ice ? ` Ice:${c.ice}` : ''}
                          </div>
                        )}
                      </div>
                      <div className="shrink-0 font-bold text-right">
                        {c.quantity}x ₱{c.selectedVariation ? c.selectedVariation.price : c.menuItem.price}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-between items-center font-bold text-sm">
                  <span>TOTAL BILL:</span>
                  <span className="text-red-500 font-black">₱{cartTotal}.00</span>
                </div>

                {/* Simulated barcode */}
                <div className="mt-5 flex flex-col items-center gap-1.5 opacity-50">
                  <div className="h-7 bg-stone-800 w-44 flex gap-1 items-stretch justify-center">
                    {[1,2,4,1,3,2,1,4,1,2,3,1,4,1,3,2,1,4].map((w, ii) => (
                      <span key={ii} className="bg-stone-900 shrink-0" style={{ width: `${w * 1.5}px` }} />
                    ))}
                  </div>
                  <span className="text-[9px] text-gray-400">#9821-2026-618</span>
                </div>

              </div>

              {/* Instructions */}
              <div className="bg-[#FAFDF9] border border-[#DEEDE0] p-4.5 rounded-2xl mb-6">
                <h4 className="font-display font-black text-xs text-[#1E3F16] mb-1.5 flex items-center gap-1">
                  <span>🚀 Next Step to Order:</span>
                </h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  We are currently operating via <strong>Cash Pick-up</strong>. Copy this order summary or barcode ID, click the button below to open our <strong>Messenger Chat</strong>, and paste it to our kitchen staff. We will begin preparing!
                </p>
              </div>

              {/* Action */}
              <a
                href={STORE_INFO.socials.messenger}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#1E3F16] text-[#52B447] hover:text-white hover:bg-[#52B447] font-display font-black text-sm py-4 rounded-2xl shadow shadow-green-100 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Submit Slip via Messenger Chat</span>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
