import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BLOG_POSTS } from '../data/hospitalData';
import { subscribeToBlogs } from '../services/dbService';
import { BlogPost, StoredBlogPost } from '../types';
import { 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  User, 
  Tag, 
  BookOpen,
  Sparkles,
  Loader2
} from 'lucide-react';

export const BlogPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [loading, setLoading] = useState<boolean>(true);

  const categories = ['all', 'Cardiology', 'Emergency Care', 'Nephrology', 'Orthopaedics', 'Wellness'];

  useEffect(() => {
    const unsubscribe = subscribeToBlogs((fetchedPosts) => {
      if (fetchedPosts && fetchedPosts.length > 0) {
        setPosts(fetchedPosts.filter(p => (p as StoredBlogPost).isPublished !== false));
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCat = selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.tags && post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCat && matchesSearch;
  });

  return (
    <div id="blog-page" className="w-full bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#003D99] via-[#0052CC] to-[#0B1E3F] text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-300 bg-red-600/30 px-3 py-1 rounded-full border border-red-400/30">
              Doctor's Health Journal
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-3">
              Health Insights & Clinical Articles
            </h1>
            <p className="text-sm sm:text-base text-blue-100 mt-2 leading-relaxed">
              Medical knowledge, disease prevention tips, heart health guidance, and surgical awareness written by the specialists of Arogyadhama Hospital.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-30 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${selectedCategory === cat ? 'bg-[#0052CC] text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search medical topics, keywords..."
              className="w-full text-xs border border-slate-300 rounded-lg pl-9 pr-3 py-2 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
            />
          </div>

        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {loading ? (
            <div className="flex items-center justify-center py-20 text-slate-500">
              <Loader2 className="w-8 h-8 animate-spin text-[#0052CC] mr-2" />
              <span className="text-sm font-medium">Loading clinical insights...</span>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
              <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-700">No articles found matching your query</h3>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-4 px-4 py-2 bg-[#0052CC] hover:bg-[#003D99] text-white text-xs font-bold rounded-lg transition-colors"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#0052CC]/40 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-52 bg-slate-100 overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-4 left-4 bg-[#0052CC] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-[11px] text-slate-400 mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                        <span>•</span>
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0052CC] transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                        {post.tags && post.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">{post.authorName}</span>
                      <span className="font-bold text-[#0052CC] group-hover:text-[#EF233C] group-hover:translate-x-1 transition-transform flex items-center space-x-1">
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                </article>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
};

