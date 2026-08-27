import React, { useState, useEffect } from 'react';
import { subscribeToGalleryItems, seedInitialGallery } from '../services/dbService';
import { StoredGalleryItem } from '../types';
import { GALLERY_IMAGES } from '../data/hospitalData';
import { Image as ImageIcon, X, Maximize2, Sparkles } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [galleryItems, setGalleryItems] = useState<StoredGalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeImage, setActiveImage] = useState<StoredGalleryItem | null>(null);

  useEffect(() => {
    seedInitialGallery();
    const unsubscribe = subscribeToGalleryItems((items) => {
      setGalleryItems(items.filter(item => item.isPublished !== false));
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'infrastructure', label: 'Infrastructure & Building' },
    { id: 'cathlab', label: 'Cath Lab & ICU' },
    { id: 'ot', label: 'Operation Theaters' },
    { id: 'dialysis', label: 'Dialysis Center' },
    { id: 'events', label: 'Medical Camps & Events' }
  ];

  const normalizeCategory = (cat: string) => {
    const lower = (cat || '').toLowerCase();
    if (lower.includes('infra') || lower.includes('building') || lower.includes('room') || lower.includes('ward') || lower.includes('pharmacy')) return 'infrastructure';
    if (lower.includes('cath') || lower.includes('icu') || lower.includes('cardio') || lower.includes('critical')) return 'cathlab';
    if (lower.includes('ot') || lower.includes('operation') || lower.includes('theatre') || lower.includes('surgery')) return 'ot';
    if (lower.includes('dialysis') || lower.includes('renal') || lower.includes('kidney')) return 'dialysis';
    if (lower.includes('event') || lower.includes('camp') || lower.includes('community') || lower.includes('program')) return 'events';
    return lower;
  };

  const displayList = galleryItems.length > 0 
    ? galleryItems 
    : GALLERY_IMAGES.map((img, idx) => ({
        id: img.id || `g-${idx}`,
        title: img.title,
        category: img.category,
        image: img.image,
        description: img.description || '',
        createdAt: new Date().toISOString()
      }));

  const filteredItems = displayList.filter((item) => {
    if (selectedCategory === 'all') return true;
    const norm = normalizeCategory(item.category);
    return norm === selectedCategory || item.category.toLowerCase() === selectedCategory;
  });

  return (
    <div id="gallery-page" className="w-full bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/30 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
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
          {isLoading && galleryItems.length === 0 ? (
            <div className="py-20 flex flex-col items-center justify-center text-slate-400">
              <div className="w-8 h-8 border-4 border-blue-900 border-t-transparent rounded-full animate-spin mb-3"></div>
              <p className="text-sm">Loading hospital gallery...</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto">
              <ImageIcon className="w-12 h-12 mx-auto text-slate-300 mb-3" />
              <h3 className="text-base font-bold text-slate-800">No photos found in this category</h3>
              <p className="text-xs text-slate-500 mt-1">Try selecting 'All Photos' to explore our complete facilities.</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="mt-4 px-4 py-2 bg-blue-900 text-white text-xs font-bold rounded-xl"
              >
                View All Photos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveImage(item)}
                  className="group relative bg-slate-900 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all aspect-video border border-slate-800"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-300 block mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold truncate drop-shadow">{item.title}</h3>
                    {item.description && (
                      <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5 opacity-90">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          )}
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
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase text-rose-400">{activeImage.category}</span>
                <h4 className="text-lg font-bold mt-0.5">{activeImage.title}</h4>
                {activeImage.description && (
                  <p className="text-xs text-slate-300 mt-1">{activeImage.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

