import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HOSPITAL_INFO, SPECIALTIES } from '../data/hospitalData';
import { HospitalLogo } from './HospitalLogo';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Calendar, 
  Ambulance, 
  ChevronRight, 
  Send, 
  CheckCircle2,
  Lock
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, openAppointmentModal, openEmergencyModal } = useNavigation();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSubscribed(false);
    }, 4000);
  };

  return (
    <footer id="main-footer" className="bg-[#0B1E3F] text-slate-300 pt-14 pb-8 border-t border-blue-950">
      
      {/* Top Banner Call to Action within Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-[#003D99] via-[#0052CC] to-[#0B1E3F] rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-blue-400/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-rose-600/30 border border-rose-500/50 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Ambulance className="w-8 h-8 text-rose-400 animate-pulse" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-rose-300 font-bold">24/7 Rapid Emergency Response</span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Need Immediate Emergency or Cardiac Care?</h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
                Our flat-panel Cath Lab, Trauma Bay, and ICU specialists are on standby around the clock.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
              className="flex-1 md:flex-none text-center px-5 py-3 bg-[#EF233C] hover:bg-[#D90429] text-white text-sm font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {HOSPITAL_INFO.emergencyPhone}</span>
            </a>
            <button
              onClick={() => openAppointmentModal()}
              className="flex-1 md:flex-none text-center px-5 py-3 bg-white hover:bg-slate-100 text-[#0052CC] text-sm font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-[#0052CC]" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          
          {/* Col 1: About & Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/5 p-3 rounded-2xl border border-white/10 inline-block">
              <HospitalLogo size="md" variant="dark" />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Arogyadhama Heart & Super Specialty Hospital is a center of healthcare excellence in Vijayapura, Karnataka. We provide 24/7 comprehensive cardiac care, advanced Cath Lab interventions, neuro surgery, joint replacements, hemodialysis, and multi-specialty trauma services.
            </p>

            {/* Accreditations */}
            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 bg-blue-950/60 border border-blue-800/60 rounded-xl px-3 py-1.5 text-xs text-amber-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Empanelled under Ayushman Bharat (PM-JAY) & Cashless TPAs</span>
              </div>
            </div>

            {/* Newsletter / Updates Subscription */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-300 block mb-1.5">Subscribe to Monthly Health Tips & OPD Updates</span>
              <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-1.5">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="bg-blue-950 border border-blue-900 text-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-blue-400 w-full"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-[#0052CC] hover:bg-[#003D99] text-white text-xs font-semibold rounded-xl transition-colors flex items-center space-x-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join</span>
                </button>
              </form>
              {newsletterSubscribed && (
                <p className="text-[11px] text-emerald-400 flex items-center space-x-1 mt-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Thank you for subscribing to health updates!</span>
                </p>
              )}
            </div>
          </div>

          {/* Col 2: Super Specialties */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-blue-900/60 pb-2">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              {SPECIALTIES.slice(0, 7).map((spec) => (
                <li key={spec.id}>
                  <button
                    onClick={() => navigate(`/departments/${spec.slug}`)}
                    className="hover:text-white transition-colors flex items-center space-x-1.5 text-slate-300 hover:text-blue-300 group text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-blue-400 transition-colors" />
                    <span>{spec.name}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigate('/departments')}
                  className="text-rose-400 hover:text-rose-300 font-semibold pt-1 flex items-center space-x-1"
                >
                  <span>View All 12+ Departments →</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Hospital Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-blue-900/60 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigate('/about-us')} className="hover:text-white text-slate-300 flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>About Our Hospital</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/doctors')} className="hover:text-white text-slate-300 flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Specialist Doctors Directory</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/facilities')} className="hover:text-white text-slate-300 flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Cath Lab & ICU Facilities</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/health-packages')} className="hover:text-white text-slate-300 flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Health Checkup Packages</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/cashless-insurance')} className="hover:text-white text-slate-300 flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Ayushman Bharat & Insurance</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/patient-guide')} className="hover:text-white text-slate-300 flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Patient Guide & Visiting Hours</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/gallery')} className="hover:text-white text-slate-300 flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Hospital Infrastructure Gallery</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/blog')} className="hover:text-white text-slate-300 flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Health Articles & News</span>
                </button>
              </li>
              <li className="pt-1">
                <button 
                  onClick={() => navigate('/admin')} 
                  className="hover:text-white text-blue-300 hover:text-white font-semibold flex items-center space-x-1.5 bg-blue-900/40 px-2 py-1 rounded-md"
                >
                  <Lock className="w-3 h-3 text-blue-300" />
                  <span>Hospital Admin & Staff Portal</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-blue-900/60 pb-2">
              Contact & Location
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>
                  {HOSPITAL_INFO.address}
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <div>
                  <span className="block font-semibold text-white">Emergency Hotline:</span>
                  <a href={`tel:${HOSPITAL_INFO.emergencyPhone}`} className="hover:text-rose-400 font-bold">
                    {HOSPITAL_INFO.emergencyPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <div>
                  <span className="block font-semibold text-white">Reception Desk:</span>
                  <a href={`tel:${HOSPITAL_INFO.receptionPhone}`} className="hover:text-sky-400">
                    {HOSPITAL_INFO.receptionPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href={`mailto:${HOSPITAL_INFO.email}`} className="hover:text-white break-all">
                  {HOSPITAL_INFO.email}
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Hours:</strong> 24 Hours Emergency, Pharmacy, Lab, ICU & Dialysis
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-950 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Arogyadhama Heart & Super Specialty Hospital, Vijayapura. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <button onClick={() => navigate('/patient-guide')} className="hover:text-slate-200 transition-colors">
              Patient Rights
            </button>
            <span>•</span>
            <button onClick={() => navigate('/contact')} className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => navigate('/admin')} className="text-blue-300 hover:text-white transition-colors flex items-center space-x-1">
              <Lock className="w-3 h-3" />
              <span>Admin Portal</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

