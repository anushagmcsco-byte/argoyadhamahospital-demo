import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SPECIALTIES, DOCTORS, HOSPITAL_INFO } from '../data/hospitalData';
import { 
  Heart, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  Clock, 
  Award, 
  HelpCircle, 
  ChevronRight, 
  ArrowLeft, 
  ShieldCheck, 
  Cpu, 
  Stethoscope,
  Activity
} from 'lucide-react';

interface Props {
  slug: string;
}

export const DepartmentDetailPage: React.FC<Props> = ({ slug }) => {
  const { navigate, openAppointmentModal, openEmergencyModal } = useNavigation();

  const specialty = SPECIALTIES.find((s) => s.slug === slug) || SPECIALTIES[0];
  const departmentDoctors = DOCTORS.filter((d) => d.departmentId === specialty.id);

  return (
    <div id="department-detail-page" className="w-full bg-slate-50 min-h-screen">
      
      {/* Breadcrumb & Navigation */}
      <div className="bg-slate-900 text-slate-300 py-3 border-b border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button onClick={() => navigate('/departments')} className="hover:text-white flex items-center space-x-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Departments</span>
            </button>
            <span>/</span>
            <span className="text-white font-semibold">{specialty.name}</span>
          </div>

          <button
            onClick={() => openAppointmentModal(undefined, specialty.id)}
            className="text-rose-400 hover:text-rose-300 font-bold flex items-center space-x-1"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-slate-950 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={specialty.heroImage}
            alt={specialty.name}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/30">
              {specialty.category.replace('-', ' ')}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              {specialty.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {specialty.shortDescription}
            </p>

            {/* Stats if any */}
            {specialty.stats && (
              <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-800">
                {specialty.stats.map((st, sIdx) => (
                  <div key={sIdx}>
                    <span className="block text-2xl font-black text-rose-400">{st.value}</span>
                    <span className="text-xs text-slate-400 font-medium">{st.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Main Column (Overview, Procedures, Tech, Conditions, Doctors, FAQs) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Comprehensive Description */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Department Overview & Clinical Scope
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {specialty.fullDescription}
                </p>
                <div className="pt-2 flex items-center space-x-2 text-xs text-blue-900 bg-blue-50 p-3 rounded-xl border border-blue-100">
                  <ShieldCheck className="w-5 h-5 text-blue-700 flex-shrink-0" />
                  <span>
                    Procedures in this department are covered under <strong>Ayushman Bharat PM-JAY</strong> and major cashless Mediclaim insurances.
                  </span>
                </div>
              </div>

              {/* Key Procedures */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-rose-600" />
                  <span>Key Clinical Procedures & Surgeries</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {specialty.keyProcedures.map((proc, pIdx) => (
                    <div key={pIdx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-800">{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment and Technology */}
              {specialty.equipmentAndTech.length > 0 && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                  <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center space-x-2">
                    <Cpu className="w-5 h-5 text-blue-800" />
                    <span>Advanced Technology & Diagnostic Equipment</span>
                  </h2>
                  <div className="grid grid-cols-1 gap-2.5 pt-2">
                    {specialty.equipmentAndTech.map((eq, eIdx) => (
                      <div key={eIdx} className="flex items-center space-x-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                        <span className="font-medium">{eq}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Conditions Treated */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center space-x-2">
                  <Stethoscope className="w-5 h-5 text-emerald-600" />
                  <span>Conditions & Diseases Treated</span>
                </h2>
                <div className="flex flex-wrap gap-2 pt-2">
                  {specialty.conditionsTreated.map((cond, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-lg text-xs font-medium border border-slate-200"
                    >
                      {cond}
                    </span>
                  ))}
                </div>
              </div>

              {/* Department Doctors */}
              {departmentDoctors.length > 0 && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h2 className="text-xl font-bold text-slate-900">
                      Specialist Doctors on Duty
                    </h2>
                    <span className="text-xs text-slate-500 font-semibold">
                      {departmentDoctors.length} Senior Consultants
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {departmentDoctors.map((doc) => (
                      <div
                        key={doc.id}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 transition-all flex flex-col justify-between"
                      >
                        <div className="flex items-start space-x-3">
                          <img
                            src={doc.image}
                            alt={doc.name}
                            referrerPolicy="no-referrer"
                            className="w-16 h-16 rounded-xl object-cover object-top border border-slate-300 flex-shrink-0"
                          />
                          <div>
                            <h3 className="text-sm font-bold text-slate-900">{doc.name}</h3>
                            <p className="text-[11px] font-semibold text-rose-700">{doc.qualifications}</p>
                            <p className="text-[11px] text-slate-600 mt-0.5 line-clamp-1">{doc.designation}</p>
                            <p className="text-[10px] text-slate-400 mt-1">{doc.experienceYears}+ Years Experience</p>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-200 flex gap-2">
                          <button
                            onClick={() => navigate(`/doctors/${doc.slug}`)}
                            className="flex-1 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-lg transition-colors text-center"
                          >
                            Profile
                          </button>
                          <button
                            onClick={() => openAppointmentModal(doc.id, specialty.id)}
                            className="flex-1 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg transition-colors text-center shadow-sm"
                          >
                            Book Slot
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {specialty.faqs && specialty.faqs.length > 0 && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                  <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center space-x-2">
                    <HelpCircle className="w-5 h-5 text-amber-500" />
                    <span>Frequently Asked Questions</span>
                  </h2>
                  <div className="space-y-4 pt-2">
                    {specialty.faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">{faq.question}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Sticky Sidebar (Quick Appointment & Emergency) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick OPD Consultation Card */}
              <div className="bg-white rounded-2xl p-6 border-2 border-blue-900 shadow-lg sticky top-20 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Book OPD Visit</h3>
                    <p className="text-xs text-slate-500">{specialty.name}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Skip the long reception waiting lines. Reserve your consultation token with senior department specialists online.
                </p>

                <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-900 flex-shrink-0" />
                    <span><strong>OPD Timings:</strong> 09:00 AM - 08:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Ayushman Bharat & Cashless Accepted</span>
                  </div>
                </div>

                <button
                  onClick={() => openAppointmentModal(undefined, specialty.id)}
                  className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment Now</span>
                </button>

                {/* Emergency Box in sidebar */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-2">
                    24/7 Department Emergency:
                  </span>
                  <a
                    href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                    className="w-full py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs rounded-xl transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4 text-rose-600" />
                    <span>Call: {HOSPITAL_INFO.emergencyPhone}</span>
                  </a>
                </div>
              </div>

              {/* Other Specialties Nav List */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Other Specialties
                </h4>
                <ul className="space-y-1 text-xs">
                  {SPECIALTIES.filter(s => s.id !== specialty.id).slice(0, 6).map((other) => (
                    <li key={other.id}>
                      <button
                        onClick={() => navigate(`/departments/${other.slug}`)}
                        className="w-full text-left py-1.5 px-2 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between"
                      >
                        <span className="truncate">{other.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
