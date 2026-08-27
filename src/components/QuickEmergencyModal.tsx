import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { 
  X, 
  Phone, 
  Ambulance, 
  MapPin, 
  Heart, 
  Activity, 
  ShieldAlert, 
  Zap, 
  Navigation,
  Clock
} from 'lucide-react';

export const QuickEmergencyModal: React.FC = () => {
  const { isEmergencyModalOpen, closeEmergencyModal } = useNavigation();

  if (!isEmergencyModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border-2 border-rose-500 relative">
        
        {/* Header with emergency alert */}
        <div className="bg-gradient-to-r from-rose-700 via-rose-800 to-red-950 text-white p-6 rounded-t-3xl relative">
          <button
            onClick={closeEmergencyModal}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
              <Ambulance className="w-7 h-7 text-white animate-bounce" />
            </div>
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-rose-500/50 text-rose-100 text-[11px] font-bold uppercase tracking-wider rounded-md mb-1">
                24x7 Critical Emergency Hotline
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">Emergency & Trauma Center</h3>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Main Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
              className="flex flex-col items-center justify-center p-4 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group"
            >
              <Phone className="w-7 h-7 text-white mb-1.5 group-hover:scale-110 transition-transform" />
              <span className="text-xs uppercase font-bold text-rose-200 tracking-wider">Emergency Doctor Line</span>
              <span className="text-lg font-black tracking-tight mt-0.5">{HOSPITAL_INFO.emergencyPhone}</span>
              <span className="text-[11px] text-rose-100 mt-1">Tap to Call Instantly</span>
            </a>

            <a
              href={`tel:${HOSPITAL_INFO.ambulancePhone}`}
              className="flex flex-col items-center justify-center p-4 bg-blue-900 hover:bg-blue-950 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group"
            >
              <Ambulance className="w-7 h-7 text-sky-300 mb-1.5 group-hover:scale-110 transition-transform" />
              <span className="text-xs uppercase font-bold text-sky-200 tracking-wider">24/7 Ambulance Dispatch</span>
              <span className="text-lg font-black tracking-tight mt-0.5">{HOSPITAL_INFO.ambulancePhone}</span>
              <span className="text-[11px] text-sky-200 mt-1">Oxygen & Ventilator on board</span>
            </a>
          </div>

          {/* Quick First Aid & Triage Guidance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1.5">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>Immediate Golden Hour Protocols:</span>
            </h4>

            <div className="grid grid-cols-1 gap-2.5 text-xs text-slate-700">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start space-x-2.5">
                <Heart className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Chest Pain / Heart Attack:</strong>
                  <span>Keep the patient sitting upright, calm, do not allow physical exertion, rush to our 24/7 Cath Lab immediately.</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start space-x-2.5">
                <Zap className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Brain Stroke (Face/Arm Weakness, Slurred Speech):</strong>
                  <span>Note the exact time of onset. Bring patient within 4.5 hours for IV clot buster injection.</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start space-x-2.5">
                <Activity className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Accident & Head Trauma:</strong>
                  <span>Do not move the neck abruptly. Apply direct pressure to bleeding sites with clean cloth.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Directions */}
          <div className="bg-slate-100 rounded-2xl p-4 flex items-center justify-between gap-4">
            <div className="flex items-start space-x-2.5 text-xs text-slate-700">
              <MapPin className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Hospital Location:</strong>
                <span>{HOSPITAL_INFO.address}</span>
              </div>
            </div>
            <a
              href={HOSPITAL_INFO.googleMapsLink}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center space-x-1.5 flex-shrink-0"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Map GPS</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
