import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SPECIALTIES } from '../data/hospitalData';
import { 
  Heart, 
  Search, 
  ChevronRight, 
  CheckCircle2, 
  Activity, 
  Calendar,
  Sparkles,
  Building2,
  Stethoscope
} from 'lucide-react';

export const DepartmentsPage: React.FC = () => {
  const { navigate, openAppointmentModal } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Departments' },
    { id: 'super-specialty', label: 'Super Specialties' },
    { id: 'surgical', label: 'Surgical Centers' },
    { id: 'medical', label: 'Medical Specialities' },
    { id: 'emergency', label: 'Emergency & Critical Care' }
  ];

  const filteredSpecialties = SPECIALTIES.filter((dept) => {
    const matchesCat = selectedCategory === 'all' || dept.category === selectedCategory;
    const matchesSearch = 
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.keyProcedures.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div id="departments-page" className="w-full bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/30">
              Centers of Excellence
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-3">
              Departments & Clinical Specialties
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              Explore our comprehensive range of medical and surgical super specialties equipped with modern diagnostic and therapeutic infrastructure in Vijayapura.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-30 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${selectedCategory === cat.id ? 'bg-blue-900 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search specialty, procedure..."
              className="w-full text-xs border border-slate-300 rounded-lg pl-9 pr-3 py-2 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredSpecialties.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
              <Stethoscope className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-700">No departments match your search query</h3>
              <p className="text-xs text-slate-500 mt-1">Try clearing search keywords or selecting 'All Departments'.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-4 px-4 py-2 bg-blue-900 text-white text-xs font-bold rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSpecialties.map((dept) => (
                <div
                  key={dept.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Header Image */}
                    <div className="h-44 bg-slate-100 overflow-hidden relative">
                      <img
                        src={dept.heroImage}
                        alt={dept.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-600 px-2 py-0.5 rounded text-white inline-block mb-1">
                          {dept.category.replace('-', ' ')}
                        </span>
                        <h3 className="text-base font-bold leading-snug">{dept.name}</h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {dept.shortDescription}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mb-2">
                          Key Clinical Procedures:
                        </span>
                        <ul className="text-xs text-slate-600 space-y-1.5">
                          {dept.keyProcedures.slice(0, 3).map((proc, pIdx) => (
                            <li key={pIdx} className="flex items-start space-x-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span className="truncate">{proc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => navigate(`/departments/${dept.slug}`)}
                        className="flex-1 py-2 text-xs font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-center"
                      >
                        Read Full Details
                      </button>
                      <button
                        onClick={() => openAppointmentModal(undefined, dept.id)}
                        className="flex-1 py-2 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors text-center shadow-sm"
                      >
                        Book OPD
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
