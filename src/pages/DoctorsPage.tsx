import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { DOCTORS, SPECIALTIES } from '../data/hospitalData';
import { 
  Search, 
  Clock, 
  Award, 
  Star, 
  Calendar, 
  Phone, 
  CheckCircle2, 
  Filter,
  Stethoscope
} from 'lucide-react';

export const DoctorsPage: React.FC = () => {
  const { navigate, openAppointmentModal } = useNavigation();
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesDept = selectedDepartment === 'all' || doc.departmentId === selectedDepartment;
    const matchesSearch = 
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.qualifications.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.departmentName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div id="doctors-page" className="w-full bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/30">
              Medical Faculty & Consultants
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-3">
              Find Our Specialist Doctors
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              Meet our team of experienced cardiologists, neurosurgeons, joint replacement experts, nephrologists, and general physicians providing compassionate care in Vijayapura.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-30 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Department Select */}
          <div className="w-full md:w-80">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full text-xs font-semibold border border-slate-300 rounded-lg px-3 py-2 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="all">All Departments & Specialties</option>
              {SPECIALTIES.map((spec) => (
                <option key={spec.id} value={spec.id}>
                  {spec.name}
                </option>
              ))}
            </select>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search doctor by name, qualification..."
              className="w-full text-xs border border-slate-300 rounded-lg pl-9 pr-3 py-2 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
              <Stethoscope className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-700">No doctors found matching your search criteria</h3>
              <p className="text-xs text-slate-500 mt-1">Please try clearing filters or selecting another department.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedDepartment('all'); }}
                className="mt-4 px-4 py-2 bg-blue-900 text-white text-xs font-bold rounded-lg"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Doctor Image & Department Tag */}
                    <div className="relative h-64 bg-slate-100 overflow-hidden">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-blue-900/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-sm shadow">
                        {doc.departmentName}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center space-x-1 text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span className="text-xs font-bold text-slate-800">{doc.rating}</span>
                          <span className="text-[10px] text-slate-400">({doc.reviewCount})</span>
                        </div>
                        <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                          {doc.experienceYears}+ Yrs Exp
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-bold text-rose-700 mt-0.5">
                        {doc.qualifications}
                      </p>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                        {doc.designation}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                        <div className="flex items-start space-x-2">
                          <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-tight">{doc.opdTimings}</span>
                        </div>
                      </div>

                      <div className="mt-3 pt-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Key Clinical Interests:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {doc.specialInterests.slice(0, 2).map((item, idx) => (
                            <span key={idx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded truncate max-w-full">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="flex gap-2 pt-2 border-t border-slate-100">
                      <button
                        onClick={() => navigate(`/doctors/${doc.slug}`)}
                        className="w-1/2 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors text-center"
                      >
                        Full Profile
                      </button>
                      <button
                        onClick={() => openAppointmentModal(doc.id, doc.departmentId)}
                        className="w-1/2 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-xl transition-colors text-center shadow-sm flex items-center justify-center space-x-1"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Slot</span>
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
