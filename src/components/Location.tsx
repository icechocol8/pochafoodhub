import { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Send, ExternalLink, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data';

export default function Location() {
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Simple script to estimate if open based on current local time
  useEffect(() => {
    try {
      const now = new Date();
      const hours = now.getHours();
      // Pocha is open 11 AM to 9 PM or 10 PM.
      if (hours >= 11 && hours < 21) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    } catch {
      setIsOpenNow(true);
    }
  }, []);

  return (
    <section id="location" className="py-24 bg-gradient-to-b from-[#FAFDF9] to-[#F2F7F2]/40 relative overflow-hidden">
      
      {/* Absolute backgrounds */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#52B447]/5 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#52B447] text-xs font-bold uppercase tracking-widest bg-[#EBF6EB] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Find Us
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1E3F16] tracking-tight">
            Our Location & Hours
          </h2>
          <div className="h-1.5 w-16 bg-[#52B447] mx-auto rounded-full mt-4" />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card Left: Hours & Contacts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Hours card */}
            <div className="bg-white rounded-3xl p-6.5 border border-gray-100 shadow-sm text-left relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#EEF8EE] rounded-xl text-[#52B447]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-black text-[#1E3F16] text-lg">Hours of Operation</h3>
                </div>

                {/* Status indicator */}
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                  isOpenNow 
                    ? 'bg-green-150 text-green-700 animate-pulse bg-green-100' 
                    : 'bg-red-50 text-red-600'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-green-500' : 'bg-red-500'}`} />
                  {isOpenNow ? 'OPENS NOW' : 'CLOSED NOW'}
                </span>
              </div>

              <div className="space-y-4">
                {STORE_INFO.hours.map((h) => (
                  <div key={h.days} className="flex justify-between items-center py-2.5 border-b border-gray-50 last:border-0">
                    <span className="font-sans font-semibold text-gray-700 text-sm">{h.days}</span>
                    <span className="font-mono text-xs text-gray-500 font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address and directions card */}
            <div className="bg-white rounded-3xl p-6.5 border border-gray-100 shadow-sm text-left flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-[#EEF8EE] rounded-xl text-[#52B447]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-display font-black text-[#1E3F16] text-lg">Store Address</h3>
              </div>
              
              <p className="font-sans text-sm text-gray-600 mb-4 leading-relaxed">
                {STORE_INFO.address}
              </p>
              
              <div className="bg-[#FAFDF9] border border-[#DEEDE0] p-4 rounded-2xl mb-6">
                <h4 className="font-display font-bold text-xs text-[#224F18] uppercase tracking-wide mb-1 flex items-center gap-1">
                  💡 Helpful Landmark
                </h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  {STORE_INFO.directionsHelp}
                </p>
              </div>

              {/* Action grid (Direct phone, Message) */}
              <div className="mt-auto grid grid-cols-2 gap-4">
                <a 
                  href={`tel:${STORE_INFO.phone}`}
                  className="flex items-center justify-center gap-2 bg-[#F2F7F2] hover:bg-[#E1F2E0] text-[#1E3F16] font-display font-extrabold text-xs py-3.5 rounded-2xl transition-all border border-[#CBDDC7]"
                >
                  <Phone className="w-4 h-4 text-[#52B447]" />
                  <span>Call Mobile</span>
                </a>
                <a 
                  href={STORE_INFO.socials.messenger}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#52B447] hover:bg-[#469d3c] text-white font-display font-extrabold text-xs py-3.5 rounded-2xl shadow-md shadow-green-100 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Messenger</span>
                </a>
              </div>
            </div>

          </div>

          {/* Card Right: Mock Map container */}
          <div className="lg:col-span-7 flex">
            
            <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm w-full h-full flex flex-col min-h-[350px]">
              
              {/* Map drawing header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 mb-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
                  <span>Live Store GPS Tracker (Bacolod City)</span>
                </div>
                <a 
                  href={`https://google.com/maps/search/?api=1&query=${encodeURIComponent(STORE_INFO.address)}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs font-bold text-[#52B447] hover:underline flex items-center gap-1 focus:outline-none"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Graphical representation of Quezon City grid */}
              <div className="bg-[#EBF1E9] rounded-2xl flex-1 relative overflow-hidden border border-gray-100 group flex items-center justify-center">
                
                {/* SVG Mock Map details */}
                <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                  {/* Street network paths */}
                  <line x1="0" y1="100" x2="1000" y2="100" stroke="#FFFFFF" strokeWidth="18" />
                  <line x1="0" y1="300" x2="1000" y2="300" stroke="#FFFFFF" strokeWidth="24" />
                  <line x1="300" y1="0" x2="300" y2="600" stroke="#FFFFFF" strokeWidth="16" />
                  <line x1="750" y1="0" x2="750" y2="600" stroke="#FFFFFF" strokeWidth="20" />
                  <line x1="0" y1="0" x2="1000" y2="500" stroke="#FFFFFF" strokeWidth="10" strokeDasharray="5,5" />
                  
                  {/* Rivers / parks */}
                  <rect x="10" y="10" width="180" height="70" fill="#CFE3CC" rx="10" />
                  <rect x="420" y="150" width="200" height="110" fill="#CFE3CC" rx="15" />
                  
                  {/* Surrounding Landmarks */}
                  <text x="50" y="45" fill="#4B6E47" fontFamily="sans-serif" fontSize="10" fontWeight="bold">BACOLOD PLAZA</text>
                  <text x="320" y="80" fill="#888888" fontFamily="sans-serif" fontSize="10">FUENTEBELLA STREET</text>
                  <text x="560" y="325" fill="#888888" fontFamily="sans-serif" fontSize="10">ARANETA STREET</text>
                  <text x="780" y="180" fill="#555555" fontFamily="sans-serif" fontSize="10" fontWeight="bold">SM CITY BACOLOD (SHORT DRIVE)</text>
                </svg>

                {/* Simulated Grid Landmarks */}
                <div className="absolute top-1/4 left-1/3 bg-white border border-stone-200 px-3 py-1.5 rounded-full shadow-md text-[10px] font-bold text-gray-600 flex items-center gap-1">
                  <span>⛪ San Sebastian Cathedral</span>
                </div>
                
                <div className="absolute bottom-1/3 right-1/4 bg-white border border-stone-200 px-3 py-1.5 rounded-full shadow-md text-[10px] font-bold text-gray-600 flex items-center gap-1">
                  <span>🛍️ SM City Bacolod</span>
                </div>

                {/* Our Central Hub Marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#52B447] text-white rounded-full flex items-center justify-center shadow-xl border-4 border-white animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="bg-[#224F18] text-white text-xs font-display font-black py-1.5 px-3.5 rounded-full mt-2.5 shadow-xl flex items-center gap-1.5 border border-green-800">
                    <span className="w-1.5 h-1.5 bg-[#52B447] rounded-full animate-ping" />
                    <span>Pocha Food Hub</span>
                  </div>
                </div>

                {/* Scale HUD */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-mono text-gray-500 font-bold border border-stone-200">
                  SCALE: 100m
                </div>
              </div>

              {/* Get Direction helper */}
              <div className="pt-3 px-1 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-500 text-left font-sans">
                  * Located directly along Fuentebella Street in Bacolod. High motor parking space available!
                </span>
                <a 
                  href={`https://google.com/maps/search/?api=1&query=${encodeURIComponent(STORE_INFO.address)}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="shrink-0 flex items-center gap-1.5 bg-[#1E3F16] text-[#52B447] hover:text-white hover:bg-[#52B447] font-display font-black text-xs px-5 py-3 rounded-xl transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Calculate Real Route</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
