import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { FACILITIES, HOSPITAL_INFO } from '../data/hospitalData';
import { 
  Building2, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Phone, 
  Ambulance,
  Sparkles
} from 'lucide-react';

export const FacilitiesPage: React.FC = () => {
  const { navigate, openEmergencyModal } = useNavigation();

  return (
    <div id="facilities-page" className="w-full bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
              Hospital Infrastructure
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-3">
              Advanced Clinical Facilities
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              Equipped with modern medical infrastructure including digital flat-panel Cath Lab, cleanroom modular OTs, 30-bed intensive care unit, 24/7 hemodialysis, automated laboratory, and advanced life support ambulances.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FACILITIES.map((fac) => (
              <div
                key={fac.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-60 bg-slate-200 overflow-hidden relative">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-blue-900/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md backdrop-blur-sm shadow">
                      {fac.tag}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-slate-950/80 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-md backdrop-blur-sm flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{fac.operatingHours}</span>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {fac.shortDescription}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                        Key Infrastructure Highlights:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {fac.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="leading-tight">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <button
                    onClick={() => navigate(`/facilities/${fac.slug}`)}
                    className="w-full py-3 bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 text-xs font-bold rounded-xl transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>View Detailed Infrastructure Specifications</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
