import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { 
  Heart, 
  Building2, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Users, 
  AlertCircle, 
  CreditCard,
  Phone
} from 'lucide-react';

export const PatientGuidePage: React.FC = () => {
  const { openAppointmentModal } = useNavigation();

  return (
    <div id="patient-guide-page" className="w-full bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">
              Patient & Visitor Information
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-3">
              Patient Guide & Inpatient Care
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              Everything you need to know about OPD registration, admission procedures, room categories, visiting hours, and discharge processes at Arogyadhama Hospital.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* 4 Cards: Admission, Room Categories, Visiting Rules, Discharge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Admission Guide */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Hospital Admission Process</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Admissions are coordinated via our 24/7 Front Desk upon advice from your consulting specialist doctor or the emergency trauma officer.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Submit Doctor’s Admission Slip & ID Proof (Aadhaar / Passport).</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Select room category based on preference and insurance eligibility.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>For Cashless/Ayushman Bharat patients, visit the adjacent TPA desk.</span>
              </li>
            </ul>
          </div>

          {/* Room Categories */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Room Categories & Accommodation</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We offer sterile, well-ventilated, and clean inpatient accommodation designed for patient comfort and speedy recovery.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <div className="p-3 bg-slate-50 rounded-xl">
                <strong className="block text-slate-900">General Ward</strong>
                <span className="text-[11px] text-slate-500">Clean multi-bed ward with nurse call buttons.</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <strong className="block text-slate-900">Semi-Private Room</strong>
                <span className="text-[11px] text-slate-500">Twin sharing with partition curtains and attendant chair.</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <strong className="block text-slate-900">Private AC Deluxe</strong>
                <span className="text-[11px] text-slate-500">Single patient room with TV, attached bath & attendant sofa.</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <strong className="block text-slate-900">30-Bed ICU / CCU</strong>
                <span className="text-[11px] text-slate-500">Intensive cardiac & critical care telemetry beds.</span>
              </div>
            </div>
          </div>

          {/* Visiting Hours & Rules */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Visiting Hours & Hospital Rules</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To minimize infection risks and ensure uninterrupted patient rest, visiting hours are strictly monitored.
            </p>
            <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                <span className="font-semibold text-slate-800">General & Private Wards:</span>
                <span className="font-bold text-blue-900">05:00 PM – 07:00 PM</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                <span className="font-semibold text-slate-800">ICU / CCU Patient Meeting:</span>
                <span className="font-bold text-rose-700">11:00 AM – 12:00 PM & 05:00 PM – 06:00 PM (1 Attendant)</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Children under 12 years are not permitted in ICU areas for infection control safety.
              </p>
            </div>
          </div>

          {/* Discharge Process */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Discharge & Medication Counseling</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Discharges are finalized during morning doctor rounds. Our nursing team provides clear medication explanation and follow-up advice.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Doctor prepares comprehensive Discharge Summary with medication prescription.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Final billing clearance (or TPA discharge approval for insurance cases).</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Clinical dietitian & pharmacist guidance on diet, physical activity & follow-up OPD date.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
};
