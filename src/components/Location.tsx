import { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Send, ExternalLink, MessageCircle, Star, Navigation } from 'lucide-react';
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
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#EEF8EE] rounded-xl text-[#52B447]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-[#1E3F16] text-lg">{STORE_INFO.googleMapsPlaceName}</h3>
                    <span className="text-[11px] text-gray-400 font-sans">Bacolod City, Negros Occidental</span>
                  </div>
                </div>
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#52B447] hover:underline flex items-center gap-1 bg-[#EEF8EE] px-3 py-1.5 rounded-full"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              
              <div className="mb-4">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">Exact Address</span>
                <p className="font-sans text-sm font-semibold text-gray-700 leading-relaxed">
                  {STORE_INFO.address}
                </p>
                <span className="inline-block mt-1 font-mono text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                  Plus Code: {STORE_INFO.plusCode}
                </span>
              </div>
              
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
                  <span>Call {STORE_INFO.phone}</span>
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

          {/* Card Right: Live Interactive Map */}
          <div className="lg:col-span-7 flex">
            
            <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm w-full h-full flex flex-col min-h-[460px]">
              
              {/* Map drawing header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 mb-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
                  <span>Live Store GPS: Fuentebella St, Bacolod</span>
                </div>
                <a 
                  href={STORE_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#52B447] hover:underline flex items-center gap-1.5 focus:outline-none bg-[#EEF8EE] px-3 py-1 rounded-full"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map embed container with Google Maps place card overlay */}
              <div className="relative flex-1 rounded-2xl overflow-hidden border border-gray-200 bg-stone-100 min-h-[320px]">
                
                {/* Live OpenStreetMap iframe showing exact coordinates for Fuentebella St */}
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=122.956%2C10.641%2C122.965%2C10.649&amp;layer=mapnik&amp;marker=10.645265%2C122.96072"
                  className="w-full h-full border-0 min-h-[320px]"
                  title="Po'Cha Food Hub Location Map"
                  loading="lazy"
                />

                {/* Floating Google Maps Place Card Banner */}
                <a 
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-stone-200/90 text-left transition-all hover:bg-white hover:scale-[1.02] cursor-pointer group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display font-black text-sm text-[#1E3F16] group-hover:text-[#52B447] transition-colors flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-red-500 shrink-0 fill-red-500" />
                        <span>{STORE_INFO.googleMapsPlaceName}</span>
                      </h4>
                      <div className="flex items-center gap-1 mt-1 text-xs">
                        <span className="font-bold text-amber-500">4.3</span>
                        <div className="flex text-amber-400">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <Star className="w-3 h-3 fill-amber-400" />
                          <Star className="w-3 h-3 fill-amber-400" />
                          <Star className="w-3 h-3 fill-amber-400" />
                          <Star className="w-3 h-3 fill-amber-200" />
                        </div>
                        <span className="text-gray-400 text-[10px]">(9) · Fast food</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#52B447] shrink-0 mt-0.5" />
                  </div>
                  
                  <p className="font-sans text-[11px] text-gray-600 mt-2 line-clamp-2">
                    {STORE_INFO.address}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] font-bold text-[#52B447]">
                    <span className="flex items-center gap-1">
                      <Navigation className="w-3 h-3" /> Click to view on Google Maps
                    </span>
                    <span className="underline">&rarr;</span>
                  </div>
                </a>

                {/* Bottom interactive button overlay */}
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-[#1E3F16]/90 hover:bg-[#1E3F16] text-white backdrop-blur-sm px-3.5 py-2 rounded-xl text-xs font-display font-bold shadow-lg flex items-center gap-1.5 transition-all hover:scale-105"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>View Exact Pin in Google Maps</span>
                </a>
              </div>

              {/* Get Direction helper */}
              <div className="pt-3 px-1 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-500 text-left font-sans">
                  * Located directly along Fuentebella Street in Bacolod. High motor parking space available!
                </span>
                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                  <a 
                    href={STORE_INFO.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#EEF8EE] text-[#1E3F16] hover:bg-[#E1F2E0] font-display font-black text-xs px-4 py-3 rounded-xl transition-all border border-[#CBDDC7]"
                  >
                    <ExternalLink className="w-4 h-4 text-[#52B447]" />
                    <span>Open in Maps</span>
                  </a>
                  <a 
                    href={STORE_INFO.directionsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#1E3F16] text-[#52B447] hover:text-white hover:bg-[#52B447] font-display font-black text-xs px-5 py-3 rounded-xl transition-all shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
