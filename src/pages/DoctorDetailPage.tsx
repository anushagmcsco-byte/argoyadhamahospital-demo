import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { DOCTORS, SPECIALTIES, HOSPITAL_INFO } from '../data/hospitalData';
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  Award, 
  Calendar, 
  Phone, 
  CheckCircle2, 
  Building2, 
  Languages, 
  HeartHandshake,
  ShieldCheck
} from 'lucide-react';

interface Props {
  slug: string;
}

export const DoctorDetailPage: React.FC<Props> = ({ slug }) => {
  const { navigate, openAppointmentModal } = useNavigation();

  const doctor = DOCTORS.find((d) => d.slug === slug) || DOCTORS[0];
  const specialty = SPECIALTIES.find((s) => s.id === doctor.departmentId);

  return (
    <div id="doctor-detail-page" className="w-full bg-slate-50 min-h-screen">
      
      {/* Breadcrumb Bar */}
      <div className="bg-slate-900 text-slate-300 py-3 border-b border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button onClick={() => navigate('/doctors')} className="hover:text-white flex items-center space-x-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Doctors</span>
            </button>
            <span>/</span>
            <span className="text-white font-semibold">{doctor.name}</span>
          </div>

          <button
            onClick={() => openAppointmentModal(doctor.id, doctor.departmentId)}
            className="text-rose-400 hover:text-rose-300 font-bold flex items-center space-x-1"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Left Details */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Top Doctor Profile Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start">
              <img
                src={doctor.image}
                alt={doctor.name}
                referrerPolicy="no-referrer"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover object-top border border-slate-200 flex-shrink-0 shadow"
              />
              <div className="space-y-2.5 flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-900 border border-blue-100 px-2.5 py-0.5 rounded-md">
                    {doctor.departmentName}
                  </span>
                  <div className="flex items-center space-x-1 text-amber-500 text-xs">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="font-bold text-slate-800">{doctor.rating}</span>
                    <span className="text-slate-400">({doctor.reviewCount} verified reviews)</span>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {doctor.name}
                </h1>
                <p className="text-xs sm:text-sm font-bold text-rose-700">
                  {doctor.qualifications}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  {doctor.designation}
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-600 border-t border-slate-100 mt-2">
                  <div className="flex items-center space-x-1.5">
                    <Award className="w-4 h-4 text-blue-700" />
                    <span><strong>{doctor.experienceYears}+ Years</strong> Clinical Experience</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Languages className="w-4 h-4 text-emerald-600" />
                    <span>Languages: {doctor.languages.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Bio */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                About {doctor.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {doctor.bio}
              </p>
            </div>

            {/* Special Interests */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Clinical Expertise & Special Interests
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {doctor.specialInterests.map((interest, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            {doctor.achievements && doctor.achievements.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center space-x-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Key Achievements & Fellowships</span>
                </h2>
                <ul className="space-y-2 pt-1">
                  {doctor.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 flex-shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Right Column: OPD Timings & Direct Booking */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 border-2 border-blue-900 shadow-xl sticky top-20 space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">OPD Consultation Schedule</h3>
                  <p className="text-xs text-slate-500">Book Token Online</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-700">
                <div>
                  <span className="block font-bold text-slate-900 mb-1 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-900" />
                    <span>Daily OPD Timings:</span>
                  </span>
                  <p className="text-slate-600 bg-white p-2 rounded-lg border border-slate-200 font-medium">
                    {doctor.opdTimings}
                  </p>
                </div>

                <div>
                  <span className="block font-bold text-slate-900 mb-1">Available Days:</span>
                  <div className="flex flex-wrap gap-1">
                    {doctor.availableDays.map((day, dIdx) => (
                      <span key={dIdx} className="px-2 py-0.5 bg-blue-50 text-blue-900 font-semibold rounded text-[10px]">
                        {day.slice(0, 3)}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center space-x-1.5 text-[11px] text-emerald-700 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Ayushman Bharat & Cashless Insurance accepted</span>
                </div>
              </div>

              <button
                onClick={() => openAppointmentModal(doctor.id, doctor.departmentId)}
                className="w-full py-3.5 bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment with {doctor.name.split(' ')[1] || doctor.name}</span>
              </button>

              <div className="pt-2 text-center">
                <a
                  href={`tel:${HOSPITAL_INFO.receptionPhone}`}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center justify-center space-x-1"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>Reception Desk: {HOSPITAL_INFO.receptionPhone}</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
