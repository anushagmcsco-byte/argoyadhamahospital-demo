import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HOSPITAL_INFO, SPECIALTIES, FACILITIES } from '../data/hospitalData';
import { HospitalLogo } from './HospitalLogo';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  ChevronDown, 
  Menu, 
  X, 
  Heart, 
  ShieldCheck, 
  Calendar, 
  Ambulance, 
  UserCheck, 
  Activity,
  Award,
  CreditCard,
  FileText,
  Lock
} from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath, navigate, openAppointmentModal, openEmergencyModal } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSpecialtiesOpen, setMobileSpecialtiesOpen] = useState(false);
  const [mobileFacilitiesOpen, setMobileFacilitiesOpen] = useState(false);
  const [mobilePatientOpen, setMobilePatientOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header id="main-header" className="w-full z-40 sticky top-0 transition-all duration-200">
      {/* Top Notification / Emergency Bar */}
      <div id="top-bar" className="bg-[#0B1E3F] text-slate-200 text-xs py-2 px-4 border-b border-blue-900 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left info items */}
          <div className="flex items-center space-x-6 flex-wrap">
            <div className="flex items-center space-x-1.5 text-rose-400 font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EF233C]"></span>
              </span>
              <Ambulance className="w-3.5 h-3.5 ml-1 text-[#EF233C]" />
              <span>24x7 Emergency & Trauma:</span>
              <a href={`tel:${HOSPITAL_INFO.emergencyPhone}`} className="text-white hover:text-rose-300 font-bold ml-1 tracking-wider">
                {HOSPITAL_INFO.emergencyPhone}
              </a>
            </div>

            <div className="flex items-center space-x-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Dargah Jail Road, Vijayapura - 586103</span>
            </div>

            <div className="flex items-center space-x-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>OPD: 9 AM - 8 PM (Emergency 24x7)</span>
            </div>
          </div>

          {/* Right badges & links */}
          <div className="flex items-center space-x-4">
            <div className="inline-flex items-center space-x-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded text-[11px] font-medium">
              <ShieldCheck className="w-3 h-3 text-amber-400" />
              <span>Ayushman Bharat (PM-JAY) & Cashless</span>
            </div>

            {/* Admin Portal Quick Link */}
            <button
              onClick={() => handleNavClick('/admin')}
              className="inline-flex items-center space-x-1 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-0.5 rounded text-[11px] transition-colors"
              title="Hospital Staff & Admin Login"
            >
              <Lock className="w-3 h-3 text-blue-300" />
              <span className="font-semibold">Admin Login</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav id="navbar" className={`bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md border-b border-slate-200 py-2.5' : 'border-b border-slate-100 py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <button 
            id="brand-logo-btn" 
            onClick={() => handleNavClick('/')} 
            className="flex items-center text-left group focus:outline-none"
          >
            <HospitalLogo size="md" />
          </button>

          {/* Desktop Menu Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-slate-700">
            
            {/* Home */}
            <button
              id="nav-home"
              onClick={() => handleNavClick('/')}
              className={`px-3 py-2 rounded-lg transition-colors ${currentPath === '/' ? 'text-[#0052CC] font-bold bg-blue-50' : 'hover:text-[#0052CC] hover:bg-slate-50'}`}
            >
              Home
            </button>

            {/* About */}
            <button
              id="nav-about"
              onClick={() => handleNavClick('/about-us')}
              className={`px-3 py-2 rounded-lg transition-colors ${currentPath === '/about-us' ? 'text-[#0052CC] font-bold bg-blue-50' : 'hover:text-[#0052CC] hover:bg-slate-50'}`}
            >
              About Us
            </button>

            {/* Specialties Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('specialties')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-specialties-dropdown"
                onClick={() => handleNavClick('/departments')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${currentPath.startsWith('/departments') ? 'text-[#0052CC] font-bold bg-blue-50' : 'hover:text-[#0052CC] hover:bg-slate-50'}`}
              >
                <span>Specialties</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'specialties' && (
                <div className="absolute left-0 mt-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 py-3 px-2 grid grid-cols-1 gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 border-b border-slate-100 mb-1 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Clinical Super Specialties</span>
                    <button 
                      onClick={() => handleNavClick('/departments')}
                      className="text-xs text-[#0052CC] font-semibold hover:underline"
                    >
                      View All
                    </button>
                  </div>
                  {SPECIALTIES.slice(0, 7).map((spec) => (
                    <button
                      key={spec.id}
                      onClick={() => handleNavClick(`/departments/${spec.slug}`)}
                      className="flex items-center px-3 py-2 rounded-lg text-left text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#0052CC] transition-colors group"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#EF233C] mr-2 group-hover:scale-125 transition-transform" />
                      <span className="font-semibold">{spec.name}</span>
                    </button>
                  ))}
                  <div className="pt-2 border-t border-slate-100 mt-1 px-2">
                    <button
                      onClick={() => handleNavClick('/departments')}
                      className="w-full text-center py-1.5 text-xs font-bold text-[#0052CC] bg-blue-50 rounded hover:bg-blue-100 transition-colors"
                    >
                      Explore All 12+ Departments & Cath Lab →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Doctors */}
            <button
              id="nav-doctors"
              onClick={() => handleNavClick('/doctors')}
              className={`px-3 py-2 rounded-lg transition-colors ${currentPath.startsWith('/doctors') ? 'text-[#0052CC] font-bold bg-blue-50' : 'hover:text-[#0052CC] hover:bg-slate-50'}`}
            >
              Doctors
            </button>

            {/* Facilities Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('facilities')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-facilities-dropdown"
                onClick={() => handleNavClick('/facilities')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${currentPath.startsWith('/facilities') ? 'text-[#0052CC] font-bold bg-blue-50' : 'hover:text-[#0052CC] hover:bg-slate-50'}`}
              >
                <span>Facilities</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'facilities' && (
                <div className="absolute left-0 mt-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Hospital Infrastructure</span>
                  </div>
                  {FACILITIES.slice(0, 6).map((fac) => (
                    <button
                      key={fac.id}
                      onClick={() => handleNavClick(`/facilities/${fac.slug}`)}
                      className="flex items-center w-full px-3 py-2 rounded-lg text-left text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#0052CC] transition-colors"
                    >
                      <span className="font-semibold">{fac.title}</span>
                    </button>
                  ))}
                  <div className="pt-2 border-t border-slate-100 mt-1 px-2">
                    <button
                      onClick={() => handleNavClick('/facilities')}
                      className="w-full text-center py-1.5 text-xs font-bold text-[#0052CC] bg-blue-50 rounded hover:bg-blue-100 transition-colors"
                    >
                      View All 24/7 Facilities →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Patient Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('patient-services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-patient-services"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${(currentPath === '/health-packages' || currentPath === '/cashless-insurance' || currentPath === '/patient-guide' || currentPath === '/gallery') ? 'text-[#0052CC] font-bold bg-blue-50' : 'hover:text-[#0052CC] hover:bg-slate-50'}`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'patient-services' && (
                <div className="absolute left-0 mt-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick('/health-packages')}
                    className="flex items-center w-full px-3 py-2 rounded-lg text-left text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#0052CC] transition-colors"
                  >
                    <Award className="w-4 h-4 mr-2 text-[#EF233C]" />
                    <span>Health Check Packages</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('/cashless-insurance')}
                    className="flex items-center w-full px-3 py-2 rounded-lg text-left text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#0052CC] transition-colors"
                  >
                    <CreditCard className="w-4 h-4 mr-2 text-amber-500" />
                    <span>Cashless & Ayushman Bharat</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('/patient-guide')}
                    className="flex items-center w-full px-3 py-2 rounded-lg text-left text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#0052CC] transition-colors"
                  >
                    <FileText className="w-4 h-4 mr-2 text-[#0052CC]" />
                    <span>Patient Guide & Visiting</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('/gallery')}
                    className="flex items-center w-full px-3 py-2 rounded-lg text-left text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#0052CC] transition-colors"
                  >
                    <UserCheck className="w-4 h-4 mr-2 text-emerald-500" />
                    <span>Photo Gallery</span>
                  </button>
                </div>
              )}
            </div>

            {/* Blog */}
            <button
              id="nav-blog"
              onClick={() => handleNavClick('/blog')}
              className={`px-3 py-2 rounded-lg transition-colors ${currentPath.startsWith('/blog') ? 'text-[#0052CC] font-bold bg-blue-50' : 'hover:text-[#0052CC] hover:bg-slate-50'}`}
            >
              Health Blog
            </button>

            {/* Contact */}
            <button
              id="nav-contact"
              onClick={() => handleNavClick('/contact')}
              className={`px-3 py-2 rounded-lg transition-colors ${currentPath === '/contact' ? 'text-[#0052CC] font-bold bg-blue-50' : 'hover:text-[#0052CC] hover:bg-slate-50'}`}
            >
              Contact
            </button>
          </div>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            <button
              id="header-emergency-btn"
              onClick={openEmergencyModal}
              className="flex items-center space-x-1.5 px-3 py-2 text-xs font-bold text-[#EF233C] bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition-colors"
              title="24/7 Emergency Assistance"
            >
              <Ambulance className="w-4 h-4 text-[#EF233C] animate-bounce" />
              <span>24/7 Emergency</span>
            </button>

            <button
              id="header-appointment-btn"
              onClick={() => openAppointmentModal()}
              className="flex items-center space-x-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0052CC] to-[#003D99] hover:from-[#0047B3] hover:to-[#003380] rounded-xl shadow-md transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              id="mobile-emergency-quick-btn"
              onClick={openEmergencyModal}
              className="p-2 text-[#EF233C] bg-rose-50 border border-rose-200 rounded-xl focus:outline-none"
              aria-label="Emergency Call"
            >
              <Ambulance className="w-5 h-5" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0052CC] bg-slate-100 hover:bg-slate-200 rounded-xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden bg-white border-b border-slate-200 shadow-2xl max-h-[85vh] overflow-y-auto px-4 py-5 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            
            {/* Quick Action Top in Mobile */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAppointmentModal();
                }}
                className="flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-[#0052CC] text-white rounded-xl text-xs font-bold shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Doctor</span>
              </button>
              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                className="flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-[#EF233C] text-white rounded-xl text-xs font-bold shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Emergency</span>
              </a>
            </div>

            <button
              onClick={() => handleNavClick('/')}
              className={`text-left px-3 py-2.5 rounded-xl text-sm font-semibold ${currentPath === '/' ? 'bg-blue-50 text-[#0052CC]' : 'text-slate-700'}`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('/about-us')}
              className={`text-left px-3 py-2.5 rounded-xl text-sm font-semibold ${currentPath === '/about-us' ? 'bg-blue-50 text-[#0052CC]' : 'text-slate-700'}`}
            >
              About Arogyadhama
            </button>

            {/* Specialties Collapsible */}
            <div className="border border-slate-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileSpecialtiesOpen(!mobileSpecialtiesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-700 bg-slate-50"
              >
                <span>Specialties & Departments</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSpecialtiesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileSpecialtiesOpen && (
                <div className="px-3 py-2 bg-white space-y-1">
                  <button
                    onClick={() => handleNavClick('/departments')}
                    className="block w-full text-left py-1.5 text-xs font-bold text-[#0052CC]"
                  >
                    → All 12+ Departments Overview
                  </button>
                  {SPECIALTIES.map((spec) => (
                    <button
                      key={spec.id}
                      onClick={() => handleNavClick(`/departments/${spec.slug}`)}
                      className="block w-full text-left py-1.5 text-xs text-slate-600 hover:text-[#0052CC]"
                    >
                      • {spec.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('/doctors')}
              className={`text-left px-3 py-2.5 rounded-xl text-sm font-semibold ${currentPath.startsWith('/doctors') ? 'bg-blue-50 text-[#0052CC]' : 'text-slate-700'}`}
            >
              Our Specialist Doctors
            </button>

            <button
              onClick={() => handleNavClick('/facilities')}
              className={`text-left px-3 py-2.5 rounded-xl text-sm font-semibold ${currentPath.startsWith('/facilities') ? 'bg-blue-50 text-[#0052CC]' : 'text-slate-700'}`}
            >
              Hospital Facilities
            </button>

            <button
              onClick={() => handleNavClick('/health-packages')}
              className={`text-left px-3 py-2.5 rounded-xl text-sm font-semibold ${currentPath === '/health-packages' ? 'bg-blue-50 text-[#0052CC]' : 'text-slate-700'}`}
            >
              Health Check Packages
            </button>

            <button
              onClick={() => handleNavClick('/cashless-insurance')}
              className={`text-left px-3 py-2.5 rounded-xl text-sm font-semibold ${currentPath === '/cashless-insurance' ? 'bg-blue-50 text-[#0052CC]' : 'text-slate-700'}`}
            >
              Cashless & Ayushman Bharat
            </button>

            <button
              onClick={() => handleNavClick('/blog')}
              className={`text-left px-3 py-2.5 rounded-xl text-sm font-semibold ${currentPath.startsWith('/blog') ? 'bg-blue-50 text-[#0052CC]' : 'text-slate-700'}`}
            >
              Health Articles & Blog
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className={`text-left px-3 py-2.5 rounded-xl text-sm font-semibold ${currentPath === '/contact' ? 'bg-blue-50 text-[#0052CC]' : 'text-slate-700'}`}
            >
              Contact Us & Directions
            </button>

            {/* Admin Login Button in Mobile Drawer */}
            <button
              onClick={() => handleNavClick('/admin')}
              className="text-left px-3 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white flex items-center space-x-2 mt-2"
            >
              <Lock className="w-4 h-4 text-blue-300" />
              <span>Hospital Staff / Admin Portal</span>
            </button>

            {/* Mobile Footer Contact summary */}
            <div className="pt-4 mt-2 border-t border-slate-100 text-xs text-slate-600 space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
                <span>Dargah Jail Road, Vijayapura, Karnataka - 586103</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#EF233C] flex-shrink-0" />
                <span>Emergency: {HOSPITAL_INFO.emergencyPhone}</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
