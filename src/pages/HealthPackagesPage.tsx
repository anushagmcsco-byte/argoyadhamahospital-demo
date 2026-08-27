import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HEALTH_PACKAGES, HOSPITAL_INFO } from '../data/hospitalData';
import { 
  Award, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  Phone,
  ArrowRight,
  Info
} from 'lucide-react';

export const HealthPackagesPage: React.FC = () => {
  const { openAppointmentModal } = useNavigation();
  const [selectedPackageId, setSelectedPackageId] = useState<string>(HEALTH_PACKAGES[1].id);

  const activePackage = HEALTH_PACKAGES.find(p => p.id === selectedPackageId) || HEALTH_PACKAGES[1];

  return (
    <div id="health-packages-page" className="w-full bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/30">
              Preventive Healthcare & Diagnostics
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-3">
              Master Health Checkup Packages
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              Early detection is the best protection against lifestyle disorders, heart conditions, diabetes, and kidney diseases. Choose from our specialized diagnostic packages with same-day physician consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Cards Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HEALTH_PACKAGES.map((pkg) => {
              const isSelected = pkg.id === selectedPackageId;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackageId(pkg.id)}
                  className={`rounded-3xl p-6 flex flex-col justify-between border-2 transition-all cursor-pointer relative ${isSelected ? 'bg-white border-blue-900 shadow-xl scale-[1.02]' : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3.5 right-6 bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{pkg.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{pkg.tagline}</p>

                    <div className="mt-4 pb-4 border-b border-slate-100 flex items-baseline space-x-2">
                      <span className="text-3xl font-black text-rose-700">₹{pkg.price}</span>
                      <span className="text-xs text-slate-400 line-through">₹{pkg.originalPrice}</span>
                      <span className="text-[10px] font-bold text-emerald-700 uppercase bg-emerald-50 px-1.5 py-0.5 rounded">
                        Save {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}%
                      </span>
                    </div>

                    <div className="mt-4 space-y-2 text-xs text-slate-600">
                      <div className="flex items-center space-x-1.5 font-bold text-blue-950">
                        <Award className="w-4 h-4 text-blue-700" />
                        <span>{pkg.testCount} Comprehensive Tests</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-slate-500">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span>Reports in {pkg.turnaroundHours}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openAppointmentModal();
                      }}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${isSelected ? 'bg-blue-900 text-white hover:bg-blue-800' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
                    >
                      Book This Checkup
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Test Breakdown for the Selected Package */}
          <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  Included Tests & Consultations
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-1">
                  {activePackage.name} Breakdown (₹{activePackage.price})
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">{activePackage.tagline}</p>
              </div>

              <button
                onClick={() => openAppointmentModal()}
                className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all self-start md:self-auto"
              >
                Schedule {activePackage.name}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {activePackage.includedCategories.map((cat, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-2">
                    {cat.categoryName}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {cat.tests.map((t, tIdx) => (
                      <li key={tIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Preparation Guidelines */}
            <div className="mt-8 p-5 bg-blue-50 border border-blue-200 rounded-2xl flex items-start space-x-3 text-xs text-blue-950">
              <Info className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Important Checkup Guidelines:</strong>
                <p className="mt-0.5 text-blue-900">
                  Please fast for 10-12 hours prior to your morning appointment (water is permitted). Avoid morning medications until fasting blood samples are collected unless instructed otherwise by our duty doctor.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
