import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { 
  Heart, 
  ShieldCheck, 
  Award, 
  Users, 
  Activity, 
  Building2, 
  CheckCircle2, 
  Calendar, 
  Phone,
  Target,
  Eye,
  Compass,
  ArrowRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate, openAppointmentModal, openEmergencyModal } = useNavigation();

  return (
    <div id="about-page" className="w-full bg-slate-50">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80"
            alt="About Arogyadhama Hospital"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/30">
              About Arogyadhama Hospital
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-3">
              Compassionate, State-of-the-Art Super Specialty Healthcare
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Established with the singular vision of providing high-end cardiac, neuro, orthopedic, and nephrology care to the people of Vijayapura and North Karnataka without the need to travel to metro cities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Overview & History */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-900 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                Our Story & Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Pioneering 24/7 Tertiary Cardiac & Emergency Services in Vijayapura
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>Arogyadhama Heart & Super Specialty Hospital</strong> was founded in 2012 by a team of passionate medical visionaries who recognized the critical lack of emergency cardiac catheterization (Cath Lab) and advanced critical care in the district.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Over the past decade, Arogyadhama has grown into a premier 150-bed multi-specialty institution featuring a 30-bed intensive care complex, flat-panel digital Cath Lab, four modular cleanroom operation theatres, round-the-clock hemodialysis, and emergency trauma facilities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Patient-Centric Ethics</h4>
                    <p className="text-[11px] text-slate-600">Transparent billing, ethical consultations, and evidence-based clinical protocols.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">24/7 Critical Availability</h4>
                    <p className="text-[11px] text-slate-600">Full-time resident intensivists, on-call cardiologists, and emergency surgeons.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80"
                  alt="Arogyadhama Hospital Infrastructure"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 bg-slate-900 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">1,20,000+ Lives Touched</h4>
                      <p className="text-xs text-slate-400">Serving Vijayapura, Bagalkot, Belgaum & surrounding rural taluks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision, Mission, Core Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
              Our Core Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Vision, Mission & Ethical Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Vision */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                To be the most trusted and preferred healthcare destination in North Karnataka, delivering clinical outcomes on par with top national institutes with utmost empathy and affordability.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                To provide 24/7 advanced super specialty care, prioritize rapid emergency resuscitation, maintain uncompromising infection control, and ensure no patient is denied care due to economic constraints.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Core Values</h3>
              <ul className="text-xs sm:text-sm text-slate-600 mt-2.5 space-y-1.5">
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span><strong>Integrity & Transparency</strong> in clinical advice</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span><strong>Compassion & Dignity</strong> for every patient</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span><strong>Continuous Innovation</strong> and technology adoption</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Leadership & Medical Director's Desk */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                Medical Director's Message
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                "Every heartbeat matters, every minute counts in critical care."
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                "When we founded Arogyadhama Hospital, our primary objective was to save lives that were previously lost during long ambulance transfers to distant cities. Today, with our 24/7 Cath Lab and multi-specialty trauma bay, we have performed thousands of successful angioplasties, brain surgeries, and critical resuscitations within the vital Golden Hour. We remain deeply committed to serving every family with the highest standards of modern medicine."
              </p>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-base">Dr. Anil Patil</h4>
                  <p className="text-xs text-rose-300">Chief Interventional Cardiologist & Medical Director</p>
                  <p className="text-[11px] text-slate-400">MBBS, MD (Medicine), DM (Cardiology), FESC</p>
                </div>
                <button
                  onClick={() => openAppointmentModal('dr-anil-patil', 'cardiology')}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition-colors shadow"
                >
                  Consult Dr. Anil Patil
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-12 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold">Have Questions About Our Doctors or Facilities?</h3>
          <p className="text-xs sm:text-sm text-blue-200">
            Our hospital reception and care coordination desk are happy to assist you with OPD schedules, room categories, or insurance verification.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={() => openAppointmentModal()}
              className="px-6 py-3 bg-white text-blue-950 font-bold text-xs sm:text-sm rounded-xl shadow hover:bg-slate-100 transition-colors"
            >
              Book OPD Appointment
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-blue-950 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl border border-blue-700 transition-colors"
            >
              Contact Hospital Reception
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
