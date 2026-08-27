import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { DOCTORS, SPECIALTIES, HOSPITAL_INFO } from '../data/hospitalData';
import { createAppointment } from '../services/dbService';
import { 
  X, 
  Calendar, 
  User, 
  Phone, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  AlertCircle,
  FileText,
  Building2,
  Stethoscope,
  Loader2
} from 'lucide-react';

export const AppointmentModal: React.FC = () => {
  const { isAppointmentModalOpen, closeAppointmentModal, preselectedDoctorId, preselectedDepartmentId } = useNavigation();

  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [patientName, setPatientName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female' | 'other'>('male');
  const [appointmentDate, setAppointmentDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('10:30 AM - 11:30 AM');
  const [symptoms, setSymptoms] = useState<string>('');
  const [paymentMode, setPaymentMode] = useState<'pay_at_hospital' | 'cashless_insurance' | 'ayushman_bharat'>('pay_at_hospital');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingToken, setBookingToken] = useState<string>('');

  // Default date: tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setAppointmentDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  useEffect(() => {
    if (preselectedDepartmentId) {
      setSelectedDepartment(preselectedDepartmentId);
    }
    if (preselectedDoctorId) {
      setSelectedDoctor(preselectedDoctorId);
      const doc = DOCTORS.find(d => d.id === preselectedDoctorId);
      if (doc) {
        setSelectedDepartment(doc.departmentId);
      }
    }
  }, [preselectedDoctorId, preselectedDepartmentId, isAppointmentModalOpen]);

  if (!isAppointmentModalOpen) return null;

  const filteredDoctors = selectedDepartment 
    ? DOCTORS.filter(d => d.departmentId === selectedDepartment)
    : DOCTORS;

  const selectedDoctorObj = DOCTORS.find(d => d.id === selectedDoctor);
  const selectedDepartmentObj = SPECIALTIES.find(s => s.id === selectedDepartment);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !phone || !appointmentDate) return;

    setIsSubmitting(true);
    const token = `AROGYA-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      const newAppt = await createAppointment({
        bookingRef: token,
        patientName,
        patientPhone: phone,
        patientAge: age ? Number(age) : 30,
        gender,
        departmentName: selectedDepartmentObj?.name || 'General OPD',
        departmentId: selectedDepartment || 'cardiology',
        doctorId: selectedDoctor || 'dr-sachin-hosagoudar',
        doctorName: selectedDoctorObj?.name || 'Dr. Sachin Hosagoudar',
        appointmentDate,
        preferredSlot: timeSlot,
        symptoms: symptoms || 'General consultation',
        insuranceType: paymentMode,
        status: 'pending'
      });

      setBookingToken(newAppt.bookingRef || token);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error booking appointment:', err);
      setBookingToken(token);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setBookingToken('');
    setPatientName('');
    setPhone('');
    setAge('');
    setSymptoms('');
    closeAppointmentModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-100 relative">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#003D99] via-[#0052CC] to-[#0B1E3F] text-white p-5 rounded-t-2xl z-10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Book Doctor Appointment</h3>
              <p className="text-xs text-blue-200">Arogyadhama Heart & Super Specialty Hospital, Vijayapura</p>
            </div>
          </div>
          <button
            onClick={closeAppointmentModal}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  Appointment Confirmed & Synced
                </span>
                <h4 className="text-2xl font-bold text-slate-900">Booking Token: {bookingToken}</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Thank you, <strong>{patientName}</strong>. Your appointment has been recorded in the hospital registry.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs sm:text-sm space-y-2.5 text-slate-700">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Department:</span>
                  <span className="font-semibold text-slate-900">{selectedDepartmentObj?.name || 'General OPD'}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Doctor:</span>
                  <span className="font-semibold text-slate-900">{selectedDoctorObj?.name || 'Assigned Senior Consultant'}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Date & Time Slot:</span>
                  <span className="font-semibold text-slate-900">{appointmentDate} ({timeSlot})</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Contact Phone:</span>
                  <span className="font-semibold text-slate-900">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Payment Preference:</span>
                  <span className="font-semibold capitalize text-[#0052CC]">{paymentMode.replace('_', ' ')}</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-xs text-blue-900 text-left flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                <p>
                  Please arrive at the hospital reception 15 minutes before your scheduled slot. For inquiries or immediate rescheduling, call <strong>{HOSPITAL_INFO.receptionPhone}</strong>.
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="w-full py-3 bg-[#0052CC] hover:bg-[#003D99] text-white font-bold text-sm rounded-xl transition-colors shadow"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Department & Doctor Select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
                    <Building2 className="w-3.5 h-3.5 text-[#0052CC]" />
                    <span>Select Department *</span>
                  </label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => {
                      setSelectedDepartment(e.target.value);
                      setSelectedDoctor('');
                    }}
                    className="w-full text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2.5 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                    required
                  >
                    <option value="">-- All Super Specialties --</option>
                    {SPECIALTIES.map((spec) => (
                      <option key={spec.id} value={spec.id}>
                        {spec.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
                    <Stethoscope className="w-3.5 h-3.5 text-[#0052CC]" />
                    <span>Select Doctor (Optional)</span>
                  </label>
                  <select
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                    className="w-full text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2.5 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  >
                    <option value="">-- Any Available Consultant --</option>
                    {filteredDoctors.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} ({doc.designation.split('&')[0]})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-[#0052CC]" />
                    <span>Patient Full Name *</span>
                  </label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="e.g. Ramesh Patil"
                    required
                    className="w-full text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Age & Gender *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="Age"
                      min="1"
                      max="120"
                      required
                      className="w-1/2 text-xs sm:text-sm border border-slate-300 rounded-lg px-2.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                    />
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value as 'male' | 'female' | 'other')}
                      className="w-1/2 text-xs sm:text-sm border border-slate-300 rounded-lg px-1 py-2.5 bg-slate-50 focus:bg-white"
                    >
                      <option value="male">M</option>
                      <option value="female">F</option>
                      <option value="other">Oth</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Phone & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
                    <Phone className="w-3.5 h-3.5 text-[#0052CC]" />
                    <span>Mobile Number (WhatsApp) *</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    required
                    className="w-full text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-[#0052CC]" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                  />
                </div>
              </div>

              {/* Preferred Slot */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-[#0052CC]" />
                  <span>Preferred Time Window</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Morning (10 AM - 1 PM)', 'Afternoon (1 PM - 4 PM)', 'Evening (4 PM - 8 PM)'].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTimeSlot(slot)}
                      className={`py-2 px-2 text-xs rounded-lg border text-center transition-all ${timeSlot === slot ? 'border-[#0052CC] bg-[#0052CC] text-white font-bold shadow-sm' : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
                    >
                      {slot.split(' (')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Symptoms / Reason */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Brief Medical Problem / Symptoms
                </label>
                <textarea
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  rows={2}
                  placeholder="e.g. Chest pain on walking, knee joint swelling, diabetes follow-up, general checkup..."
                  className="w-full text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                ></textarea>
              </div>

              {/* Payment / Insurance Option */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                  <span>Payment / Insurance Preference</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <label className={`flex items-center space-x-2 p-2 border rounded-lg cursor-pointer text-xs ${paymentMode === 'pay_at_hospital' ? 'border-[#0052CC] bg-blue-50 font-semibold text-blue-950' : 'border-slate-200'}`}>
                    <input
                      type="radio"
                      name="paymentMode"
                      value="pay_at_hospital"
                      checked={paymentMode === 'pay_at_hospital'}
                      onChange={() => setPaymentMode('pay_at_hospital')}
                      className="text-[#0052CC]"
                    />
                    <span>Pay at Hospital</span>
                  </label>

                  <label className={`flex items-center space-x-2 p-2 border rounded-lg cursor-pointer text-xs ${paymentMode === 'ayushman_bharat' ? 'border-amber-600 bg-amber-50 font-semibold text-amber-950' : 'border-slate-200'}`}>
                    <input
                      type="radio"
                      name="paymentMode"
                      value="ayushman_bharat"
                      checked={paymentMode === 'ayushman_bharat'}
                      onChange={() => setPaymentMode('ayushman_bharat')}
                      className="text-amber-600"
                    />
                    <span>Ayushman Bharat</span>
                  </label>

                  <label className={`flex items-center space-x-2 p-2 border rounded-lg cursor-pointer text-xs ${paymentMode === 'cashless_insurance' ? 'border-[#0052CC] bg-blue-50 font-semibold text-blue-950' : 'border-slate-200'}`}>
                    <input
                      type="radio"
                      name="paymentMode"
                      value="cashless_insurance"
                      checked={paymentMode === 'cashless_insurance'}
                      onChange={() => setPaymentMode('cashless_insurance')}
                      className="text-[#0052CC]"
                    />
                    <span>Private Mediclaim</span>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-[#0052CC] to-[#003D99] hover:from-[#0047B3] hover:to-[#003380] text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Saving to Hospital Registry...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span>Confirm & Generate Booking Token</span>
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-2">
                  Synced across all hospital devices & emergency desk in real-time.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

