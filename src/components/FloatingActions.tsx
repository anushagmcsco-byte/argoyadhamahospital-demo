import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  ChevronUp, 
  Ambulance 
} from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const { openAppointmentModal, openEmergencyModal } = useNavigation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent('Hello Arogyadhama Hospital, I would like to inquire about doctor consultation / treatment.');
  const whatsappUrl = `https://wa.me/917411200102?text=${whatsappMessage}`;

  return (
    <div id="floating-actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 bg-white/90 hover:bg-white text-slate-800 rounded-full shadow-lg border border-slate-200 flex items-center justify-center transition-all hover:-translate-y-0.5 focus:outline-none"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Chat Floating Trigger */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2.5 rounded-full shadow-xl transition-all hover:scale-105 group"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="text-xs font-bold hidden sm:inline-block pr-1">WhatsApp Chat</span>
      </a>

      {/* Emergency Hotline Trigger */}
      <button
        onClick={openEmergencyModal}
        aria-label="Emergency 24x7 Hotline"
        className="flex items-center space-x-2 bg-rose-600 hover:bg-rose-700 text-white px-4 py-3 rounded-full shadow-xl transition-all hover:scale-105 pulse-ring"
      >
        <Ambulance className="w-5 h-5 animate-pulse" />
        <span className="text-xs font-bold tracking-wide">24x7 Emergency</span>
      </button>

      {/* Book Appointment Floating Quick CTA on Mobile */}
      <button
        onClick={() => openAppointmentModal()}
        aria-label="Book Appointment"
        className="sm:hidden flex items-center space-x-2 bg-blue-900 hover:bg-blue-800 text-white px-4 py-2.5 rounded-full shadow-xl text-xs font-bold"
      >
        <Calendar className="w-4 h-4 text-blue-200" />
        <span>Book Doctor</span>
      </button>

    </div>
  );
};
