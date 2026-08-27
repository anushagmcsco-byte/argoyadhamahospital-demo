import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Ambulance, 
  Send, 
  CheckCircle2, 
  Navigation,
  MessageSquare,
  Building2,
  Calendar
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { openAppointmentModal, openEmergencyModal } = useNavigation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Medical Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div id="contact-page" className="w-full bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/30">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-3">
              Contact Arogyadhama Hospital
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              We are here 24 hours a day, 7 days a week to serve your healthcare needs. Reach out for OPD bookings, emergency trauma, ambulance dispatch, or insurance support in Vijayapura.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: 24/7 Emergency */}
          <div className="bg-rose-600 text-white rounded-3xl p-6 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <Ambulance className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-200">24/7 Critical Hotline</span>
              <h3 className="text-xl font-black mt-1">{HOSPITAL_INFO.emergencyPhone}</h3>
              <p className="text-xs text-rose-100 mt-2">Direct connection to emergency trauma & cardiac triage doctor.</p>
            </div>
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
              className="mt-6 w-full py-2.5 bg-white text-rose-700 hover:bg-rose-50 font-bold text-xs rounded-xl text-center block transition-colors shadow"
            >
              Call Emergency Line
            </a>
          </div>

          {/* Card 2: Reception & Appointments */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Reception & OPD</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">{HOSPITAL_INFO.receptionPhone}</h3>
              <p className="text-xs text-slate-600 mt-2">For consultation booking, visiting tokens, and general info.</p>
            </div>
            <button
              onClick={() => openAppointmentModal()}
              className="mt-6 w-full py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl text-center transition-colors shadow"
            >
              Book OPD Appointment
            </button>
          </div>

          {/* Card 3: Ambulance & Transport */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Ambulance Dispatch</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">{HOSPITAL_INFO.ambulancePhone}</h3>
              <p className="text-xs text-slate-600 mt-2">GPS-equipped ALS & BLS ambulances with oxygen & monitors.</p>
            </div>
            <a
              href={`tel:${HOSPITAL_INFO.ambulancePhone}`}
              className="mt-6 w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl text-center block transition-colors"
            >
              Request Ambulance
            </a>
          </div>

          {/* Card 4: Email & TPA */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Inquiry</span>
              <h3 className="text-sm font-bold text-slate-900 mt-1 truncate">{HOSPITAL_INFO.email}</h3>
              <p className="text-xs text-slate-600 mt-2">For medical records, TPA queries, career applications, and tie-ups.</p>
            </div>
            <a
              href={`mailto:${HOSPITAL_INFO.email}`}
              className="mt-6 w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl text-center block transition-colors truncate px-2"
            >
              Send Official Email
            </a>
          </div>

        </div>

        {/* Contact Form & Location Map Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Contact & Medical Query Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Online Inquiry
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">
                Send Us a Message or Medical Query
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill in the form below and our medical coordinator will get back to you promptly.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-900">Message Received Successfully!</h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  Thank you for reaching out to Arogyadhama Hospital. Our care coordinator will contact you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => { setFormSubmitted(false); setFormData({ name: '', phone: '', email: '', subject: 'General Medical Inquiry', message: '' }); }}
                  className="mt-3 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kulkarni"
                      className="w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Contact Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@domain.com"
                      className="w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Subject of Inquiry</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="General Medical Inquiry">General Medical Inquiry</option>
                      <option value="Cardiology / Cath Lab Consultation">Cardiology / Cath Lab Consultation</option>
                      <option value="Ayushman Bharat / Insurance Pre-Auth">Ayushman Bharat / Insurance Pre-Auth</option>
                      <option value="Dialysis Slot Booking">Dialysis Slot Booking</option>
                      <option value="Executive Health Checkup">Executive Health Checkup</option>
                      <option value="Feedback / Suggestion">Feedback / Suggestion</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Message or Medical Details</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your health query, symptoms, or requested date..."
                    className="w-full border border-slate-300 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}

          </div>

          {/* Right: Hospital Location & Directions */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Hospital Location & Directions</h3>
              
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start space-x-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                  <MapPin className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Physical Address:</strong>
                    <span>{HOSPITAL_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                  <Clock className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Visiting & OPD Hours:</strong>
                    <span>OPD Consultations: 09:00 AM – 08:00 PM</span>
                    <span className="block text-rose-700 font-bold mt-0.5">Emergency, Trauma & Cath Lab: Open 24x7</span>
                  </div>
                </div>
              </div>

              {/* Map View Box */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 h-48 bg-slate-100 relative">
                <iframe
                  title="Arogyadhama Hospital Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.349079549309!2d75.7088927!3d16.8336214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc6557d3da081a9%3A0x7d6a5eeea1bf01b8!2sArogyadhama%20Heart%20%26%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex gap-2">
              <a
                href={HOSPITAL_INFO.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors text-center flex items-center justify-center space-x-1.5"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
