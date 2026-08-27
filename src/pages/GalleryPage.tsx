import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/hospitalData';
import { Image as ImageIcon, X, Maximize2 } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'infrastructure', label: 'Infrastructure & Building' },
    { id: 'cathlab', label: 'Cath Lab & ICU' },
    { id: 'ot', label: 'Operation Theaters' },
    { id: 'dialysis', label: 'Dialysis Center' },
    { id: 'events', label: 'Medical Camps & Events' }
  ];

  const filteredItems = GALLERY_IMAGES.filter((item) => {
    return selectedCategory === 'all' || item.category === selectedCategory;
  });

  return (
    <div id="gallery-page" className="w-full bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/30">
              Hospital Campus & Facilities
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-3">
              Photo Gallery & Clinical Tour
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              Explore the clinical infrastructure, advanced medical technology, modular operation theaters, patient suites, and community outreach health camps of Arogyadhama Hospital.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-30 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${selectedCategory === cat.id ? 'bg-blue-900 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className="group relative bg-slate-900 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all aspect-video"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-300 block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold truncate">{item.title}</h3>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-rose-400">{activeImage.category}</span>
                <h4 className="text-lg font-bold mt-0.5">{activeImage.title}</h4>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
