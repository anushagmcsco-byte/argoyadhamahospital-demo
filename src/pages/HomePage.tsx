import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { 
  HOSPITAL_INFO, 
  SPECIALTIES, 
  DOCTORS, 
  FACILITIES, 
  HEALTH_PACKAGES, 
  INSURANCE_PARTNERS, 
  TESTIMONIALS, 
  BLOG_POSTS 
} from '../data/hospitalData';
import { 
  Heart, 
  Activity, 
  ShieldCheck, 
  Ambulance, 
  Calendar, 
  Clock, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Users, 
  Building2, 
  Stethoscope, 
  Star, 
  Sparkles, 
  CreditCard, 
  FileText,
  MapPin,
  ChevronRight,
  Shield,
  HelpCircle
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate, openAppointmentModal, openEmergencyModal } = useNavigation();
  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    {
      badge: 'Advanced Cardiology & 24/7 Cath Lab',
      title: 'North Karnataka’s Trusted Center for Advanced Heart Care',
      subtitle: '24/7 Emergency Primary Angioplasty, Flat-Panel Digital Cath Lab, Beating-Heart Bypass (CABG), and Cardiac Critical Care in Vijayapura.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80',
      actionText: 'Consult Cardiologist',
      deptSlug: 'cardiology'
    },
    {
      badge: '24/7 Emergency, Trauma & Stroke Center',
      title: 'Rapid Golden Hour Response for Stroke, Trauma & Critical Care',
      subtitle: 'Level-1 Trauma bay, acute stroke thrombolysis (IV tPA within 4.5 hours), 30-bed ICU/CCU, and GPS-equipped ALS Ambulances.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1400&q=80',
      actionText: 'Emergency Services',
      deptSlug: 'emergency-critical-care'
    },
    {
      badge: 'Ayushman Bharat PM-JAY & Cashless Empanelled',
      title: 'Quality Super Specialty Healthcare Accessible to Every Family',
      subtitle: 'Providing cashless hospital care under Ayushman Bharat (PM-JAY), Arogya Karnataka, and 30+ private Mediclaim insurance TPAs.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1400&q=80',
      actionText: 'Cashless Details',
      deptSlug: 'cashless-insurance'
    }
  ];

  return (
    <div id="home-page" className="w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-[520px] sm:min-h-[580px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroSlides[heroSlide].image}
            alt="Arogyadhama Hospital Care"
            className="w-full h-full object-cover opacity-25 filter blur-[1px] scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-blue-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-rose-500/20 border border-rose-500/40 text-rose-300 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping mr-1" />
              <span>{heroSlides[heroSlide].badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              {heroSlides[heroSlide].title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
              {heroSlides[heroSlide].subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-book-btn"
                onClick={() => openAppointmentModal()}
                className="px-6 py-3.5 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-rose-600/30 transition-all flex items-center space-x-2 group"
              >
                <Calendar className="w-5 h-5 text-rose-100" />
                <span>Book Doctor Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-emergency-btn"
                onClick={openEmergencyModal}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm sm:text-base rounded-xl backdrop-blur-sm transition-colors flex items-center space-x-2"
              >
                <Ambulance className="w-5 h-5 text-rose-400" />
                <span>24/7 Emergency: {HOSPITAL_INFO.emergencyPhone}</span>
              </button>
            </div>

            {/* Carousel Indicator Dots */}
            <div className="flex items-center space-x-2 pt-4">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setHeroSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${heroSlide === idx ? 'w-8 bg-rose-500' : 'w-2 bg-slate-600 hover:bg-slate-400'}`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. QUICK HIGHLIGHTS / STATS BAR */}
      <section className="bg-blue-900 text-white py-6 border-b border-blue-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-blue-800/60">
            
            <div className="p-2">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white">150+</span>
              <span className="text-[11px] sm:text-xs text-blue-200 uppercase tracking-wider font-semibold">Hospital Beds</span>
            </div>

            <div className="p-2">
              <span className="block text-2xl sm:text-3xl font-extrabold text-rose-400">30</span>
              <span className="text-[11px] sm:text-xs text-blue-200 uppercase tracking-wider font-semibold">ICU / CCU Beds</span>
            </div>

            <div className="p-2">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white">8,500+</span>
              <span className="text-[11px] sm:text-xs text-blue-200 uppercase tracking-wider font-semibold">Cath Lab Procedures</span>
            </div>

            <div className="p-2">
              <span className="block text-2xl sm:text-3xl font-extrabold text-white">15,000+</span>
              <span className="text-[11px] sm:text-xs text-blue-200 uppercase tracking-wider font-semibold">Surgeries Conducted</span>
            </div>

            <div className="p-2">
              <span className="block text-2xl sm:text-3xl font-extrabold text-amber-300">24x7</span>
              <span className="text-[11px] sm:text-xs text-blue-200 uppercase tracking-wider font-semibold">Trauma & Dialysis</span>
            </div>

            <div className="p-2">
              <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400">35+</span>
              <span className="text-[11px] sm:text-xs text-blue-200 uppercase tracking-wider font-semibold">Specialist Doctors</span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE SUPER SPECIALTIES SECTION */}
      <section id="specialties-section" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
              Centers of Clinical Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Comprehensive Super Specialty Departments
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              From advanced interventional cardiology and neuro surgery to joint replacements and 24/7 dialysis, we offer dedicated specialist teams and medical technology under one roof.
            </p>
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SPECIALTIES.map((dept) => (
              <div
                key={dept.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors flex items-center justify-center shadow-sm">
                      <Heart className="w-6 h-6 text-rose-600 group-hover:text-rose-400" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {dept.category.replace('-', ' ')}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {dept.name}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {dept.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-500 block mb-1">Key Procedures:</span>
                    <ul className="text-[11px] text-slate-700 space-y-1">
                      {dept.keyProcedures.slice(0, 2).map((proc, pIdx) => (
                        <li key={pIdx} className="flex items-center space-x-1.5 truncate">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                          <span className="truncate">{proc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => navigate(`/departments/${dept.slug}`)}
                    className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center space-x-1"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => openAppointmentModal(undefined, dept.id)}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-700 text-xs font-semibold rounded-lg transition-colors"
                  >
                    Consult
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom All Departments link */}
          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/departments')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white text-sm font-bold rounded-xl shadow-md transition-colors"
            >
              <span>Explore All 12+ Departments & Technologies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE AROGYADHAMA HOSPITAL */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-900 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                Why Arogyadhama Hospital
              </span>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Compassionate Clinical Care Powered by Modern Infrastructure
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Located on Dargah Jail Road in Vijayapura, Arogyadhama Heart & Super Specialty Hospital brings world-class medical protocols and senior specialists to North Karnataka. We eliminate the need for patients to travel to distant metro cities for acute cardiac arrest, stroke, joint replacements, or critical dialysis care.
              </p>

              {/* 4 Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center mb-2">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">24/7 Digital Flat-Panel Cath Lab</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Emergency primary angioplasty with under 45-minute door-to-balloon time.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center mb-2">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">30-Bed ICU & CCU Telemetry</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    1:1 nursing care, high-end ventilators, and 24-hour intensivist supervision.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-2">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">Ayushman Bharat & Cashless</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Empanelled for government health schemes and 30+ insurance TPAs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">Modular Cleanroom OTs</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Class 10,000 laminar flow air filtration for near-zero surgical infection rates.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/about-us')}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-blue-900 hover:text-blue-700"
                >
                  <span>Learn more about our Vision, Mission & Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Col: Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Surgical Operation Theater"
                  className="w-full h-80 object-cover opacity-85"
                />
                <div className="p-6 bg-slate-900 text-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-400">Accredited Quality Care</span>
                    <span className="text-xs text-slate-400">Vijayapura, Karnataka</span>
                  </div>
                  <h3 className="text-xl font-bold">24-Hour Emergency Medical Helpline</h3>
                  <p className="text-xs text-slate-300">
                    Direct communication with our emergency trauma bay, cardiac duty doctor, and on-demand ALS ambulance drivers.
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <a
                      href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                      className="px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center space-x-1.5"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{HOSPITAL_INFO.emergencyPhone}</span>
                    </a>
                    <button
                      onClick={() => openAppointmentModal()}
                      className="px-4 py-2.5 bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold rounded-xl transition-colors"
                    >
                      Book OPD Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. MEET OUR SPECIALIST DOCTORS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-900 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                Medical Faculty & Consultants
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Our Esteemed Doctors & Surgeons
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Dedicated senior specialists with national and international training across cardiology, neurology, orthopaedics, nephrology, and surgery.
              </p>
            </div>

            <button
              onClick={() => navigate('/doctors')}
              className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all self-start md:self-auto"
            >
              <span>View All Specialist Doctors</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTORS.slice(0, 4).map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Doctor Image */}
                  <div className="relative h-56 bg-slate-100 overflow-hidden">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-blue-900/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {doc.departmentName.split('&')[0]}
                    </div>
                  </div>

                  {/* Doctor Content */}
                  <div className="p-5">
                    <div className="flex items-center space-x-1 text-amber-500 mb-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className="text-xs font-bold text-slate-800">{doc.rating}</span>
                      <span className="text-[10px] text-slate-400">({doc.reviewCount} reviews)</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-rose-700 mt-0.5 line-clamp-1">
                      {doc.qualifications}
                    </p>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {doc.designation}
                    </p>

                    <div className="mt-3 pt-3 border-t border-slate-100 space-y-1 text-xs text-slate-600">
                      <div className="flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span className="truncate text-[11px]">{doc.opdTimings}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Award className="w-3.5 h-3.5 text-blue-700 flex-shrink-0" />
                        <span className="text-[11px] font-medium">{doc.experienceYears}+ Years Experience</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/doctors/${doc.slug}`)}
                      className="w-1/2 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center"
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => openAppointmentModal(doc.id, doc.departmentId)}
                      className="w-1/2 py-2 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors text-center shadow-sm"
                    >
                      Book OPD
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. ADVANCED HOSPITAL FACILITIES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              Hospital Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              24/7 Clinical & Diagnostic Facilities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Round-the-clock emergency support, modern hemodialysis unit, automated diagnostic laboratories, and 24/7 pharmacy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES.slice(0, 4).map((fac) => (
              <div
                key={fac.id}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 bg-slate-200 overflow-hidden relative">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm">
                      {fac.tag}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-3">
                      {fac.shortDescription}
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-200 text-[11px] text-emerald-700 font-semibold flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{fac.operatingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => navigate(`/facilities/${fac.slug}`)}
                    className="w-full py-2 bg-white hover:bg-blue-900 hover:text-white text-blue-950 text-xs font-bold rounded-lg border border-slate-200 transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>View Facility Specs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/facilities')}
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700"
            >
              <span>Explore All Hospital Facilities (Pharmacy, Ambulance, Blood Storage) →</span>
            </button>
          </div>

        </div>
      </section>

      {/* 7. PREVENTIVE HEALTH CHECKUP PACKAGES */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-rose-400 bg-rose-500/20 border border-rose-500/30 px-3 py-1 rounded-full">
                Preventive Wellness
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 tracking-tight">
                Discounted Health Checkup Packages
              </h2>
              <p className="text-sm text-slate-300 mt-1 max-w-xl">
                Early detection prevents major health crises. Comprehensive cardiac, diabetic, and executive checkups with same-day reports.
              </p>
            </div>

            <button
              onClick={() => navigate('/health-packages')}
              className="text-xs sm:text-sm font-bold text-white hover:text-blue-200 border border-slate-700 hover:border-slate-500 px-4 py-2.5 rounded-xl transition-colors self-start md:self-auto"
            >
              <span>View All Health Packages →</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HEALTH_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 flex flex-col justify-between border transition-all ${pkg.popular ? 'bg-gradient-to-b from-blue-950 to-slate-950 border-rose-500 shadow-xl shadow-rose-950/40 relative' : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'}`}
              >
                <div>
                  {pkg.popular && (
                    <div className="absolute -top-3 right-6 bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{pkg.tagline}</p>

                  {/* Price */}
                  <div className="mt-4 pb-4 border-b border-slate-800 flex items-baseline space-x-2">
                    <span className="text-3xl font-black text-rose-400">₹{pkg.price}</span>
                    <span className="text-xs text-slate-500 line-through">₹{pkg.originalPrice}</span>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase">
                      Save {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}%
                    </span>
                  </div>

                  {/* Quick Features */}
                  <div className="mt-4 space-y-2 text-xs text-slate-300">
                    <div className="flex items-center space-x-1.5 text-amber-300 font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      <span>{pkg.testCount} Vital Tests Included</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-slate-400 text-[11px]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Reports: {pkg.turnaroundHours}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                    <span className="text-white font-bold block text-xs mb-1">Key Tests:</span>
                    {pkg.includedCategories[0].tests.slice(0, 3).map((t, idx) => (
                      <p key={idx} className="flex items-center space-x-1 truncate">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                        <span className="truncate">{t}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => openAppointmentModal()}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${pkg.popular ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-lg' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}
                  >
                    Book This Checkup
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. AYUSHMAN BHARAT & CASHLESS INSURANCE */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
                Zero Cash Hassle
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Cashless Treatment & Ayushman Bharat (PM-JAY) Empanelled
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Arogyadhama Hospital is committed to affordable and transparent medical treatment. We are an empanelled hospital under the Government of India’s <strong>Ayushman Bharat PM-JAY</strong> scheme and <strong>Arogya Karnataka</strong>, offering free treatment to eligible cardholders.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our on-site Insurance & TPA Desk handles end-to-end pre-authorizations, documentation, and claims for over 30 leading private health insurers.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate('/cashless-insurance')}
                  className="px-5 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-colors flex items-center space-x-1.5"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Check Insurance & TPA List</span>
                </button>
                <button
                  onClick={() => openAppointmentModal()}
                  className="px-5 py-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm rounded-xl transition-colors"
                >
                  Insurance Helpdesk Inquiry
                </button>
              </div>
            </div>

            {/* Insurance Partners Logos / Cards Grid */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-4">
                Empanelled Health Schemes & TPAs:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {INSURANCE_PARTNERS.slice(0, 9).map((ins) => (
                  <div
                    key={ins.id}
                    className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center flex flex-col items-center justify-center min-h-[70px] hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-xs font-bold text-slate-900 leading-tight">{ins.name}</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{ins.type}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 text-center mt-4">
                + Over 20 additional private health insurance TPAs supported.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 9. PATIENT TESTIMONIALS & RECOVERY STORIES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
              Patient Trust & Gratitude
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Real Recovery Stories from Our Patients
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Over 1,20,000+ treated patients across Vijayapura, Bagalkot, Belgaum, and North Karnataka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1 text-amber-500 mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.patientName}</h4>
                    <p className="text-[11px] text-slate-500">{item.location} • {item.treatment}</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. LATEST HEALTH INSIGHTS & BLOG */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-900 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                Doctor's Health Blog
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Health Articles & Clinical Guidance
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Stay informed with verified medical articles written by our specialist physicians and surgeons.
              </p>
            </div>

            <button
              onClick={() => navigate('/blog')}
              className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 self-start md:self-auto flex items-center space-x-1"
            >
              <span>View All Health Articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 bg-slate-200 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-blue-900/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center space-x-2 text-[11px] text-slate-400 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">{post.authorName}</span>
                    <span className="text-blue-700 font-bold group-hover:underline">Read →</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. LOCATION & APPOINTMENT QUICK CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                Easy Accessibility in Vijayapura
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                Visit Arogyadhama Heart & Super Specialty Hospital
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Conveniently located on Dargah Jail Road, Vijayapura. Equipped with spacious parking, 24-hour emergency vehicle bay, pharmacy, and diagnostic services.
              </p>
              
              <div className="pt-2 space-y-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span>{HOSPITAL_INFO.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>Reception Desk: {HOSPITAL_INFO.receptionPhone} | Emergency: {HOSPITAL_INFO.emergencyPhone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>OPD Timings: Mon-Sat 09:00 AM to 08:00 PM (Emergency 24x7)</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => openAppointmentModal()}
                  className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-colors"
                >
                  Book Appointment Now
                </button>
                <a
                  href={HOSPITAL_INFO.googleMapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors"
                >
                  Get GPS Map Directions
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white text-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">Quick Consultation Request</h3>
              <p className="text-xs text-slate-500 mt-1">Our hospital care coordinators will get in touch with you promptly.</p>
              
              <form onSubmit={(e) => { e.preventDefault(); openAppointmentModal(); }} className="mt-4 space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    className="w-full border border-slate-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Contact Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    className="w-full border border-slate-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Department</label>
                  <select className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:outline-none">
                    <option>Cardiology & Cath Lab</option>
                    <option>Neurology & Neuro Surgery</option>
                    <option>Orthopaedics & Joint Replacement</option>
                    <option>Nephrology & Dialysis</option>
                    <option>General Medicine & Diabetes</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition-colors mt-2"
                >
                  Request Callback / Slot
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
