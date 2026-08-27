import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { INSURANCE_PARTNERS, HOSPITAL_INFO } from '../data/hospitalData';
import { 
  CreditCard, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  Phone, 
  Search,
  Building2,
  Calendar,
  AlertCircle
} from 'lucide-react';

export const CashlessInsurancePage: React.FC = () => {
  const { openAppointmentModal } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredInsurers = INSURANCE_PARTNERS.filter((ins) => {
    const matchesType = selectedType === 'all' || ins.type === selectedType;
    const matchesSearch = ins.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div id="cashless-insurance-page" className="w-full bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
              Government Schemes & TPAs
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-3">
              Ayushman Bharat & Cashless Mediclaim
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              Arogyadhama Heart & Super Specialty Hospital is an empanelled hospital for Ayushman Bharat (PM-JAY), Arogya Karnataka, and all major private health insurance Third Party Administrators (TPAs).
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Government Health Schemes Highlight Box */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider bg-rose-600 px-3 py-1 rounded-full inline-block">
              Government Beneficiary Schemes
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ayushman Bharat (PM-JAY) & Arogya Karnataka
            </h2>
            <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
              Patients holding valid Ayushman Bharat cards (Golden Cards) or BPL ration cards can avail cashless inpatient treatments, cardiology interventions, angioplasties, dialyses, and major surgeries as per Government of Karnataka and GoI empanelment guidelines.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs">
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Cash Deposit for Covered Procedures</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Dedicated On-Site Ayushman Mitra Desk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Cashless Process */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Admission Guide
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              4 Easy Steps to Avail Cashless Hospitalization
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-900 text-white font-black text-sm flex items-center justify-center">
                1
              </div>
              <h4 className="font-bold text-sm text-slate-900">Show ID & Policy Card</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Present your health insurance E-card / Ayushman Bharat card along with Aadhaar card at the hospital TPA desk.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-900 text-white font-black text-sm flex items-center justify-center">
                2
              </div>
              <h4 className="font-bold text-sm text-slate-900">Pre-Authorization</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our insurance coordinators submit medical pre-authorization request with doctor diagnosis directly to your TPA.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-900 text-white font-black text-sm flex items-center justify-center">
                3
              </div>
              <h4 className="font-bold text-sm text-slate-900">Approval & Admission</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Initial approval received within 1-3 hours. Treatment commences smoothly without out-of-pocket cash deposit.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-900 text-white font-black text-sm flex items-center justify-center">
                4
              </div>
              <h4 className="font-bold text-sm text-slate-900">Cashless Discharge</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Final claim settled directly between hospital and insurer upon doctor discharge summary signoff.
              </p>
            </div>

          </div>
        </div>

        {/* Required Documents Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-bold text-base text-slate-900 flex items-center space-x-2">
              <FileText className="w-5 h-5 text-blue-900" />
              <span>Private Insurance / TPA Documents Checklist</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Original Mediclaim Health Card / E-Card copy</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Patient Aadhaar Card / Driving License / Voter ID</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Doctor Consultation Prescription & Diagnosis notes</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Previous investigation reports (ECG, 2D Echo, Blood reports)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-bold text-base text-slate-900 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-rose-600" />
              <span>Ayushman Bharat / Govt Scheme Checklist</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Ayushman Bharat PM-JAY Card / Golden Card</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Ration Card (BPL / Priority Household Card)</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Aadhaar Card linked to Mobile Number for biometric OTP</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Referral slip (if applicable from taluk/district hospital)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Empanelled Insurance Partners & TPAs Directory */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-black text-slate-900">
                Empanelled Insurance Companies & TPAs
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Search or filter through our empanelled network</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${selectedType === 'all' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700'}`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedType('government')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${selectedType === 'government' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700'}`}
              >
                Government
              </button>
              <button
                onClick={() => setSelectedType('tpa')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${selectedType === 'tpa' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700'}`}
              >
                TPAs
              </button>
              <button
                onClick={() => setSelectedType('private')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${selectedType === 'private' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700'}`}
              >
                Private Insurers
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredInsurers.map((ins) => (
              <div
                key={ins.id}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-blue-300 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-blue-100/60 px-2 py-0.5 rounded">
                    {ins.type}
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 mt-2">{ins.name}</h4>
                </div>
                <span className="text-[11px] text-emerald-700 font-semibold mt-3 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Cashless Active</span>
                </span>
              </div>
            ))}
          </div>

          {/* TPA Helpdesk Support Callout */}
          <div className="p-6 bg-slate-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-700 space-y-1">
              <strong className="text-slate-900 block text-sm">Need Help with Your Insurance Pre-Auth?</strong>
              <span>Our TPA Desk is open 24/7 in the hospital ground floor lobby.</span>
            </div>
            <a
              href={`tel:${HOSPITAL_INFO.receptionPhone}`}
              className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call TPA Desk: {HOSPITAL_INFO.receptionPhone}</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
