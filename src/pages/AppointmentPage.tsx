import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { DOCTORS, SPECIALTIES, HOSPITAL_INFO } from '../data/hospitalData';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle,
  Stethoscope,
  Building2,
  FileText
} from 'lucide-react';

export const AppointmentPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedDept, setSelectedDept] = useState<string>(SPECIALTIES[0].id);
  const [selectedDoc, setSelectedDoc] = useState<string>('');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientAge, setPatientAge] = useState<string>('');
  const [appointmentDate, setAppointmentDate] = useState<string>('');
  const [preferredSlot, setPreferredSlot] = useState<string>('morning');
  const [reason, setReason] = useState<string>('');
  const [insuranceType, setInsuranceType] = useState<string>('cash');
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const filteredDoctors = DOCTORS.filter((d) => !selectedDept || d.departmentId === selectedDept);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'AROGYA-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsBooked(true);
  };

  return (
    <div id="appointment-page" className="w-full bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/30">
              Online OPD Registration
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-3">
              Book a Doctor Appointment
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              Schedule your outpatient consultation with our senior super-specialty physicians and surgeons in Vijayapura. Instant confirmation with SMS token.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {isBooked ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Appointment Confirmed
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-3">
                Thank You, {patientName}!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                Your consultation token has been generated. An SMS confirmation with instructions has been sent to <strong>{patientPhone}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-md mx-auto text-xs text-slate-700 space-y-2 text-left">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Booking Reference:</span>
                <span className="font-mono font-bold text-slate-900">{bookingRef}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Preferred Date:</span>
                <span className="font-bold text-slate-900">{appointmentDate || 'Tomorrow'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Time Window:</span>
                <span className="font-bold text-slate-900 uppercase">{preferredSlot} Slot</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Department:</span>
                <span className="font-bold text-blue-900">
                  {SPECIALTIES.find(s => s.id === selectedDept)?.name || 'General OPD'}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <button
                onClick={() => { setIsBooked(false); setPatientName(''); setPatientPhone(''); }}
                className="px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-xl transition-colors shadow"
              >
                Book Another Appointment
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
            
            <div className="pb-6 border-b border-slate-100 mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Patient & Consultation Details</h2>
                <p className="text-xs text-slate-500 mt-0.5">Please provide patient information for token registration</p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                Ayushman Bharat & Cashless Accepted
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 text-xs">
              
              {/* Step 1: Department & Doctor Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Select Department *</label>
                  <select
                    value={selectedDept}
                    onChange={(e) => { setSelectedDept(e.target.value); setSelectedDoc(''); }}
                    className="w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium text-slate-800"
                  >
                    {SPECIALTIES.map((spec) => (
                      <option key={spec.id} value={spec.id}>
                        {spec.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Select Doctor (Optional)</label>
                  <select
                    value={selectedDoc}
                    onChange={(e) => setSelectedDoc(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium text-slate-800"
                  >
                    <option value="">Any Available Senior Specialist</option>
                    {filteredDoctors.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} ({doc.designation})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 2: Patient Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Patient Full Name *</label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Age *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="120"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    placeholder="e.g. 45"
                    className="w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Step 3: Phone & Date & Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number (for SMS) *</label>
                  <input
                    type="tel"
                    required
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Preferred Time Slot *</label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="morning">Morning Slot (09:00 AM – 01:00 PM)</option>
                    <option value="afternoon">Afternoon Slot (01:00 PM – 04:00 PM)</option>
                    <option value="evening">Evening Slot (04:00 PM – 08:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Step 4: Insurance / Ayushman Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Payment / Insurance Coverage</label>
                  <select
                    value={insuranceType}
                    onChange={(e) => setInsuranceType(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none"
                  >
                    <option value="cash">Direct Consultation (Standard OPD Fee)</option>
                    <option value="ayushman">Ayushman Bharat PM-JAY / Arogya Karnataka</option>
                    <option value="private-insurance">Private Health Insurance / Corporate TPA</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Chief Complaints / Reason for Visit</label>
                  <input
                    type="text"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="e.g. Chest pain, High BP, Joint pain..."
                    className="w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                <div className="text-slate-500 text-[11px]">
                  <span>* By submitting, you agree to receive SMS/WhatsApp reminders for your token.</span>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Appointment Booking</span>
                </button>
              </div>

            </form>

          </div>
        )}

      </div>

    </div>
  );
};
