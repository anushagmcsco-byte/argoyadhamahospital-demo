import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { FACILITIES, HOSPITAL_INFO } from '../data/hospitalData';
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  Phone, 
  Ambulance, 
  ShieldCheck, 
  Building2,
  Calendar
} from 'lucide-react';

interface Props {
  slug: string;
}

export const FacilityDetailPage: React.FC<Props> = ({ slug }) => {
  const { navigate, openAppointmentModal, openEmergencyModal } = useNavigation();

  const facility = FACILITIES.find((f) => f.slug === slug) || FACILITIES[0];

  return (
    <div id="facility-detail-page" className="w-full bg-slate-50 min-h-screen">
      
      {/* Breadcrumb Bar */}
      <div className="bg-slate-900 text-slate-300 py-3 border-b border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button onClick={() => navigate('/facilities')} className="hover:text-white flex items-center space-x-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Facilities</span>
            </button>
            <span>/</span>
            <span className="text-white font-semibold">{facility.title}</span>
          </div>

          <button
            onClick={openEmergencyModal}
            className="text-rose-400 hover:text-rose-300 font-bold flex items-center space-x-1"
          >
            <Ambulance className="w-3.5 h-3.5" />
            <span>24/7 Helpline</span>
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-slate-950 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={facility.image}
            alt={facility.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
              {facility.tag}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              {facility.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {facility.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Facility Overview & Clinical Standards
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {facility.detailedDescription}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Key Features & Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {facility.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ayushman & Insurance note */}
            <div className="p-5 bg-blue-50 border border-blue-200 rounded-2xl flex items-start space-x-3 text-xs text-blue-900">
              <ShieldCheck className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Cashless Insurance Support:</strong>
                <span>All treatments, surgical admissions, ICU care, and dialysis sessions are supported under Ayushman Bharat PM-JAY and leading private health insurances.</span>
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 border-2 border-slate-900 shadow-xl sticky top-20 space-y-5">
              <h3 className="text-base font-bold text-slate-900">Operational Details</h3>
              
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-700">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span><strong>Availability:</strong> {facility.operatingHours}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-blue-700 flex-shrink-0" />
                  <span><strong>Location:</strong> Hospital Main Building, Vijayapura</span>
                </div>
              </div>

              <button
                onClick={() => openAppointmentModal()}
                className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-xl shadow transition-colors"
              >
                Inquire / Book Consultation
              </button>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                  className="w-full py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs rounded-xl transition-colors flex items-center justify-center space-x-1.5 border border-rose-200"
                >
                  <Phone className="w-4 h-4 text-rose-600" />
                  <span>24/7 Hotline: {HOSPITAL_INFO.emergencyPhone}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
