import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BLOG_POSTS, DOCTORS, HOSPITAL_INFO } from '../data/hospitalData';
import { getBlogBySlug, subscribeToBlogs } from '../services/dbService';
import { BlogPost } from '../types';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  Bookmark, 
  ChevronRight,
  Phone,
  Heart,
  Loader2
} from 'lucide-react';

interface Props {
  slug: string;
}

export const BlogPostPage: React.FC<Props> = ({ slug }) => {
  const { navigate, openAppointmentModal } = useNavigation();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [allPosts, setAllPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadPost() {
      setLoading(true);
      try {
        const fetched = await getBlogBySlug(slug);
        if (fetched) {
          setPost(fetched);
        } else {
          const fallback = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
          setPost(fallback);
        }
      } catch (e) {
        const fallback = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];
        setPost(fallback);
      } finally {
        setLoading(false);
      }
    }

    loadPost();

    const unsub = subscribeToBlogs((posts) => {
      if (posts && posts.length > 0) {
        setAllPosts(posts);
      }
    });
    return () => unsub();
  }, [slug]);

  const currentPost = post || BLOG_POSTS[0];
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (loading && !post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#0052CC] animate-spin" />
      </div>
    );
  }

  return (
    <div id="blog-post-page" className="w-full bg-slate-50 min-h-screen">
      
      {/* Breadcrumb Bar */}
      <div className="bg-[#0B1E3F] text-slate-300 py-3.5 border-b border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button onClick={() => navigate('/blog')} className="hover:text-white flex items-center space-x-1 font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Health Journal</span>
            </button>
            <span>/</span>
            <span className="text-white font-semibold truncate max-w-xs">{currentPost.title}</span>
          </div>

          <span className="text-rose-400 font-bold hidden sm:inline-block">Arogyadhama Clinical Insights</span>
        </div>
      </div>

      {/* Article Content Layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          
          {/* Header Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0052CC] border border-blue-200 px-3 py-1 rounded-md">
                {currentPost.category}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-500 flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{currentPost.readTime}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {currentPost.title}
            </h1>

            <div className="flex items-center justify-between py-4 border-y border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#0052CC] text-white font-bold flex items-center justify-center text-sm">
                  {currentPost.authorName.split(' ')[1]?.[0] || currentPost.authorName[0] || 'D'}
                </div>
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-slate-900">{currentPost.authorName}</span>
                  <span className="text-[11px] text-slate-500">{currentPost.authorDesignation} • Published on {currentPost.date}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: currentPost.title, url: window.location.href });
                    }
                  }}
                  className="p-2 text-slate-500 hover:text-[#0052CC] rounded-lg hover:bg-slate-100 transition-colors"
                  title="Share"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Hero Article Image */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={currentPost.image}
              alt={currentPost.title}
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Article Markdown/HTML Body */}
          <div 
            className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4"
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
          />

          {/* Tags */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 flex items-center space-x-1">
              <Tag className="w-3.5 h-3.5" />
              <span>Related Tags:</span>
            </span>
            {currentPost.tags && currentPost.tags.map((tag, tIdx) => (
              <span key={tIdx} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg">
                #{tag}
              </span>
            ))}
          </div>

          {/* Doctor CTA Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#003D99] via-[#0052CC] to-[#0B1E3F] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-base">Have Health Concerns Related to This Article?</h4>
              <p className="text-xs text-blue-200">Consult our senior specialists at Arogyadhama Hospital for expert medical evaluation.</p>
            </div>
            <button
              onClick={() => openAppointmentModal()}
              className="px-5 py-2.5 bg-[#EF233C] hover:bg-[#D90429] text-white text-xs font-bold rounded-xl transition-colors shadow flex-shrink-0"
            >
              Book Doctor Consultation
            </button>
          </div>

        </article>

        {/* Related Articles */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-bold text-slate-900">More Articles from Our Specialists</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigate(`/blog/${rel.slug}`)}
                className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-[#0052CC]/50 shadow-sm cursor-pointer transition-all flex flex-col justify-between"
              >
                <div>
                  <img src={rel.image} alt={rel.title} className="w-full h-32 object-cover rounded-xl mb-3" />
                  <span className="text-[10px] font-bold text-[#EF233C] uppercase">{rel.category}</span>
                  <h4 className="text-xs font-bold text-slate-900 mt-1 line-clamp-2">{rel.title}</h4>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-[#0052CC] font-bold flex items-center justify-between">
                  <span>Read More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

