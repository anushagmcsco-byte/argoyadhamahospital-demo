import React, { useState, useEffect } from 'react';
import { useAdminAuth } from '../context/AdminAuthContext';
import { useNavigation } from '../context/NavigationContext';
import { HospitalLogo } from '../components/HospitalLogo';
import { 
  subscribeToAppointments, 
  updateAppointmentStatus, 
  deleteAppointment, 
  createAppointment,
  subscribeToBlogs, 
  createBlogPost, 
  updateBlogPost, 
  deleteBlogPost,
  seedInitialBlogs 
} from '../services/dbService';
import { StoredAppointment, StoredBlogPost } from '../types';
import { SPECIALTIES, DOCTORS } from '../data/hospitalData';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  KeyRound, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  AlertTriangle, 
  Plus, 
  Trash2, 
  Edit3, 
  Search, 
  Filter, 
  Phone, 
  User, 
  Stethoscope, 
  ExternalLink, 
  LogOut, 
  FileText, 
  Database, 
  RefreshCw, 
  Check, 
  Eye, 
  ChevronRight,
  Printer,
  Sparkles
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const { admin, isAuthenticated, login, logout } = useAdminAuth();
  const { navigate } = useNavigation();

  // Login Form state
  const [loginEmail, setLoginEmail] = useState('admin@arogyadhama.com');
  const [loginPassword, setLoginPassword] = useState('arogya2025');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Tab State
  const [activeTab, setActiveTab] = useState<'appointments' | 'blogs' | 'overview'>('appointments');

  // Real-time Data
  const [appointments, setAppointments] = useState<StoredAppointment[]>([]);
  const [blogs, setBlogs] = useState<StoredBlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Appointment Filters
  const [appointmentSearch, setAppointmentSearch] = useState('');
  const [appointmentStatusFilter, setAppointmentStatusFilter] = useState<string>('all');
  const [selectedAppointment, setSelectedAppointment] = useState<StoredAppointment | null>(null);

  // Walk-in Appointment Modal
  const [showNewAppointmentModal, setShowNewAppointmentModal] = useState(false);
  const [newAppForm, setNewAppForm] = useState({
    patientName: '',
    patientPhone: '',
    patientEmail: '',
    patientAge: '',
    gender: 'male',
    departmentId: SPECIALTIES[0].id,
    doctorId: '',
    appointmentDate: new Date().toISOString().split('T')[0],
    preferredSlot: 'morning',
    insuranceType: 'cash',
    symptoms: '',
    status: 'confirmed' as StoredAppointment['status'],
    adminNotes: 'Walk-in Registered by Admin',
  });

  // Blog Editor Modal
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [blogForm, setBlogForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Cardiology',
    authorName: 'Dr. Anil Patil',
    authorDesignation: 'Chief Interventional Cardiologist & Medical Director',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    tags: 'Heart Health, Vijayapura, Cath Lab',
    isPublished: true,
  });

  // Action status feedback
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  // Initialize Firestore listeners
  useEffect(() => {
    setIsLoading(true);
    // Seed initial sample blogs if none exist
    seedInitialBlogs();

    const unsubAppointments = subscribeToAppointments((data) => {
      setAppointments(data);
      setIsLoading(false);
    });

    const unsubBlogs = subscribeToBlogs((data) => {
      setBlogs(data);
      setIsLoading(false);
    });

    return () => {
      unsubAppointments();
      unsubBlogs();
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);
    const res = await login(loginEmail, loginPassword);
    setIsLoggingIn(false);
    if (!res.success) {
      setLoginError(res.message || 'Login failed');
    }
  };

  const showNotification = (msg: string) => {
    setActionSuccess(msg);
    setTimeout(() => setActionSuccess(null), 3000);
  };

  // Appointment handlers
  const handleUpdateStatus = async (id: string, status: StoredAppointment['status'], notes?: string) => {
    await updateAppointmentStatus(id, status, notes);
    showNotification(`Appointment marked as ${status.toUpperCase()}`);
    if (selectedAppointment && selectedAppointment.id === id) {
      setSelectedAppointment(prev => prev ? { ...prev, status, adminNotes: notes ?? prev.adminNotes } : null);
    }
  };

  const handleDeleteAppointment = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this appointment record?')) {
      await deleteAppointment(id);
      showNotification('Appointment deleted from database');
      if (selectedAppointment?.id === id) setSelectedAppointment(null);
    }
  };

  const handleCreateWalkinAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    const dept = SPECIALTIES.find(s => s.id === newAppForm.departmentId);
    const doc = DOCTORS.find(d => d.id === newAppForm.doctorId);
    const ref = 'AROGYA-' + Math.floor(100000 + Math.random() * 900000);

    await createAppointment({
      bookingRef: ref,
      patientName: newAppForm.patientName,
      patientPhone: newAppForm.patientPhone,
      patientEmail: newAppForm.patientEmail,
      patientAge: newAppForm.patientAge,
      gender: newAppForm.gender,
      departmentId: newAppForm.departmentId,
      departmentName: dept?.name || 'General OPD',
      doctorId: newAppForm.doctorId,
      doctorName: doc ? `${doc.name} (${doc.designation})` : 'Senior Medical Specialist',
      appointmentDate: newAppForm.appointmentDate,
      preferredSlot: newAppForm.preferredSlot,
      insuranceType: newAppForm.insuranceType,
      symptoms: newAppForm.symptoms,
      status: newAppForm.status,
      adminNotes: newAppForm.adminNotes,
    });

    setShowNewAppointmentModal(false);
    showNotification(`New appointment ${ref} created successfully!`);
    setNewAppForm({
      patientName: '',
      patientPhone: '',
      patientEmail: '',
      patientAge: '',
      gender: 'male',
      departmentId: SPECIALTIES[0].id,
      doctorId: '',
      appointmentDate: new Date().toISOString().split('T')[0],
      preferredSlot: 'morning',
      insuranceType: 'cash',
      symptoms: '',
      status: 'confirmed',
      adminNotes: 'Walk-in Registered by Admin',
    });
  };

  // Blog Handlers
  const handleOpenNewBlog = () => {
    setEditingBlogId(null);
    setBlogForm({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: 'Cardiology',
      authorName: 'Dr. Anil Patil',
      authorDesignation: 'Chief Interventional Cardiologist & Medical Director',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
      readTime: '4 min read',
      tags: 'Heart Care, Vijayapura, Arogyadhama',
      isPublished: true,
    });
    setShowBlogModal(true);
  };

  const handleEditBlog = (post: StoredBlogPost) => {
    setEditingBlogId(post.id);
    setBlogForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      authorName: post.authorName,
      authorDesignation: post.authorDesignation,
      image: post.image,
      readTime: post.readTime,
      tags: post.tags.join(', '),
      isPublished: post.isPublished !== false,
    });
    setShowBlogModal(true);
  };

  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    const slug = blogForm.slug || blogForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const tagArray = blogForm.tags.split(',').map(t => t.trim()).filter(Boolean);

    if (editingBlogId) {
      await updateBlogPost(editingBlogId, {
        title: blogForm.title,
        slug,
        excerpt: blogForm.excerpt,
        content: blogForm.content,
        category: blogForm.category,
        authorName: blogForm.authorName,
        authorDesignation: blogForm.authorDesignation,
        image: blogForm.image,
        readTime: blogForm.readTime,
        tags: tagArray,
        isPublished: blogForm.isPublished,
      });
      showNotification('Blog article updated in real-time on all devices!');
    } else {
      await createBlogPost({
        title: blogForm.title,
        slug,
        excerpt: blogForm.excerpt,
        content: blogForm.content,
        category: blogForm.category,
        authorName: blogForm.authorName,
        authorDesignation: blogForm.authorDesignation,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        image: blogForm.image,
        readTime: blogForm.readTime,
        tags: tagArray,
        views: 1,
        isPublished: blogForm.isPublished,
      });
      showNotification('New blog article published to all devices!');
    }
    setShowBlogModal(false);
  };

  const handleDeleteBlog = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog post? It will be removed from all devices.')) {
      await deleteBlogPost(id);
      showNotification('Blog post deleted.');
    }
  };

  // Filtered Appointments
  const filteredAppointments = appointments.filter((app) => {
    const matchesSearch = 
      app.patientName.toLowerCase().includes(appointmentSearch.toLowerCase()) ||
      app.patientPhone.includes(appointmentSearch) ||
      app.bookingRef.toLowerCase().includes(appointmentSearch.toLowerCase()) ||
      app.departmentName.toLowerCase().includes(appointmentSearch.toLowerCase());

    const matchesStatus = 
      appointmentStatusFilter === 'all' || 
      app.status === appointmentStatusFilter ||
      (appointmentStatusFilter === 'today' && app.appointmentDate === new Date().toISOString().split('T')[0]);

    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const pendingCount = appointments.filter(a => a.status === 'pending').length;
  const confirmedCount = appointments.filter(a => a.status === 'confirmed').length;
  const todayCount = appointments.filter(a => a.appointmentDate === new Date().toISOString().split('T')[0]).length;
  const totalBlogs = blogs.length;

  // -------------------------------------------------------------------------
  // RENDER: LOGIN SCREEN (When unauthenticated)
  // -------------------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0B1E3F] to-slate-950 flex flex-col justify-center items-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-blue-100 relative overflow-hidden">
          
          {/* Top Brand Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0052CC] via-[#EF233C] to-[#0052CC]" />

          <div className="text-center space-y-3 mb-8">
            <div className="flex justify-center">
              <HospitalLogo size="md" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0052CC] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Staff & Admin Portal
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">
                Hospital Administration Login
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Access real-time patient appointments & manage live medical blogs across all hospital terminals.
              </p>
            </div>
          </div>

          {loginError && (
            <div className="p-3.5 mb-5 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 flex-shrink-0 text-rose-600" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Staff Email / Username</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="admin@arogyadhama.com"
                  className="w-full pl-9 pr-3 py-3 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052CC] font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Master Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-3 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052CC] font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3.5 bg-gradient-to-r from-[#0052CC] to-[#003D99] hover:from-[#0047B3] hover:to-[#003380] text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <KeyRound className="w-4 h-4" />
              <span>{isLoggingIn ? 'Authenticating...' : 'Sign In to Admin Portal'}</span>
            </button>
          </form>

          {/* Quick Demo Credentials Badge */}
          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-500 block mb-2 font-medium">Default Hospital Administrator Credentials:</span>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-[11px] font-mono text-slate-700 flex justify-between items-center">
              <span>admin@arogyadhama.com</span>
              <span className="font-bold text-[#0052CC]">arogya2025</span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-xs text-slate-500 hover:text-[#0052CC] font-medium transition-colors"
            >
              ← Return to Public Website
            </button>
          </div>

        </div>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // RENDER: AUTHENTICATED ADMIN DASHBOARD
  // -------------------------------------------------------------------------
  return (
    <div id="admin-portal" className="min-h-screen bg-slate-100 flex flex-col">
      
      {/* Top Admin Bar */}
      <header className="bg-[#0B1E3F] text-white sticky top-0 z-40 shadow-md border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <div className="flex items-center space-x-4">
            <HospitalLogo variant="white" size="sm" />
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#EF233C] text-white uppercase tracking-wider">
              Control Panel
            </span>
          </div>

          {/* User Info & Actions */}
          <div className="flex items-center space-x-3 text-xs">
            <div className="hidden md:flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300 font-medium">Live Cloud Sync (All Devices)</span>
            </div>

            <div className="text-right hidden sm:block">
              <span className="font-bold block text-white">{admin?.name}</span>
              <span className="text-[10px] text-blue-200 uppercase font-bold">{admin?.role}</span>
            </div>

            <button
              onClick={() => navigate('/')}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center space-x-1"
              title="View Public Site"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Live Site</span>
            </button>

            <button
              onClick={logout}
              className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors flex items-center space-x-1 font-bold"
              title="Logout"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>

        </div>
      </header>

      {/* Action Notification Toast */}
      {actionSuccess && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-700 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center space-x-2 text-xs font-bold animate-in slide-in-from-top-4 duration-150">
          <CheckCircle2 className="w-4 h-4 text-emerald-200" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-6">
        
        {/* Navigation Tabs & Quick Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
          
          {/* Tabs */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('appointments')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'appointments'
                  ? 'bg-[#0052CC] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Appointments Hub</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeTab === 'appointments' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-800'}`}>
                {appointments.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('blogs')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'blogs'
                  ? 'bg-[#0052CC] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Health Blog CMS</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeTab === 'blogs' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-800'}`}>
                {blogs.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'overview'
                  ? 'bg-[#0052CC] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>System & Sync</span>
            </button>
          </div>

          {/* Quick Primary Actions */}
          <div className="flex items-center space-x-2">
            {activeTab === 'appointments' && (
              <button
                onClick={() => setShowNewAppointmentModal(true)}
                className="px-4 py-2.5 bg-gradient-to-r from-[#EF233C] to-[#D90429] hover:from-[#D90429] hover:to-[#B8001F] text-white text-xs font-bold rounded-xl shadow transition-all flex items-center space-x-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>+ Walk-in Booking</span>
              </button>
            )}

            {activeTab === 'blogs' && (
              <button
                onClick={handleOpenNewBlog}
                className="px-4 py-2.5 bg-gradient-to-r from-[#0052CC] to-[#003D99] hover:from-[#0047B3] hover:to-[#003380] text-white text-xs font-bold rounded-xl shadow transition-all flex items-center space-x-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>+ Create New Article</span>
              </button>
            )}
          </div>

        </div>

        {/* ----------------------------------------------------------------- */}
        {/* TAB 1: APPOINTMENTS HUB */}
        {/* ----------------------------------------------------------------- */}
        {activeTab === 'appointments' && (
          <div className="space-y-6">
            
            {/* Quick KPI Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-400">Total Registered</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-0.5">{appointments.length}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-amber-600">Pending Review</span>
                  <h3 className="text-2xl font-black text-amber-700 mt-0.5">{pendingCount}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-emerald-600">Confirmed</span>
                  <h3 className="text-2xl font-black text-emerald-700 mt-0.5">{confirmedCount}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-blue-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#0052CC]">Today's OPD</span>
                  <h3 className="text-2xl font-black text-[#0052CC] mt-0.5">{todayCount}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center font-bold">
                  <Stethoscope className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Search input */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={appointmentSearch}
                  onChange={(e) => setAppointmentSearch(e.target.value)}
                  placeholder="Search by name, phone, ref, department..."
                  className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                />
              </div>

              {/* Status Filter Chips */}
              <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto">
                {[
                  { id: 'all', label: 'All Bookings' },
                  { id: 'today', label: "Today's OPD" },
                  { id: 'pending', label: 'Pending' },
                  { id: 'confirmed', label: 'Confirmed' },
                  { id: 'completed', label: 'Completed' },
                  { id: 'cancelled', label: 'Cancelled' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setAppointmentStatusFilter(st.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                      appointmentStatusFilter === st.id
                        ? 'bg-[#0052CC] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

            </div>

            {/* Appointments Table / Cards */}
            {filteredAppointments.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 border border-slate-200 text-center space-y-3">
                <Calendar className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-base font-bold text-slate-700">No appointments found</h3>
                <p className="text-xs text-slate-500">No appointments match the current filter or search criteria.</p>
                <button
                  onClick={() => setShowNewAppointmentModal(true)}
                  className="px-4 py-2 bg-[#0052CC] text-white text-xs font-bold rounded-xl shadow"
                >
                  + Add First Walk-in Appointment
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4">Token Ref</th>
                        <th className="py-3.5 px-4">Patient Name</th>
                        <th className="py-3.5 px-4">Contact</th>
                        <th className="py-3.5 px-4">Department & Doctor</th>
                        <th className="py-3.5 px-4">Date & Slot</th>
                        <th className="py-3.5 px-4">Payment Mode</th>
                        <th className="py-3.5 px-4">Status</th>
                        <th className="py-3.5 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredAppointments.map((app) => {
                        const statusColors = {
                          pending: 'bg-amber-50 text-amber-700 border-amber-200',
                          confirmed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                          completed: 'bg-blue-50 text-blue-700 border-blue-200',
                          cancelled: 'bg-rose-50 text-rose-700 border-rose-200',
                        };

                        return (
                          <tr key={app.id} className="hover:bg-slate-50/80 transition-colors">
                            
                            {/* Token Ref */}
                            <td className="py-3 px-4 font-mono font-bold text-slate-900 whitespace-nowrap">
                              <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px] border border-slate-200">
                                {app.bookingRef}
                              </span>
                            </td>

                            {/* Patient Name & Age */}
                            <td className="py-3 px-4">
                              <div className="font-bold text-slate-900">{app.patientName}</div>
                              <span className="text-[11px] text-slate-500">
                                Age: {app.patientAge || 'N/A'} {app.gender ? `• ${app.gender}` : ''}
                              </span>
                            </td>

                            {/* Contact Info */}
                            <td className="py-3 px-4 whitespace-nowrap">
                              <a
                                href={`tel:${app.patientPhone}`}
                                className="font-bold text-[#0052CC] hover:underline flex items-center space-x-1"
                              >
                                <Phone className="w-3 h-3" />
                                <span>{app.patientPhone}</span>
                              </a>
                              {app.patientEmail && (
                                <span className="text-[10px] text-slate-400 block truncate max-w-[140px]">
                                  {app.patientEmail}
                                </span>
                              )}
                            </td>

                            {/* Department & Doctor */}
                            <td className="py-3 px-4">
                              <span className="font-bold text-slate-800 block">{app.departmentName}</span>
                              <span className="text-[11px] text-slate-500">{app.doctorName || 'Any Specialist'}</span>
                            </td>

                            {/* Date & Slot */}
                            <td className="py-3 px-4 whitespace-nowrap">
                              <span className="font-bold text-slate-900 block">{app.appointmentDate}</span>
                              <span className="text-[10px] text-slate-500 uppercase font-semibold">
                                {app.preferredSlot} slot
                              </span>
                            </td>

                            {/* Payment */}
                            <td className="py-3 px-4 whitespace-nowrap">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                                app.insuranceType === 'ayushman' ? 'bg-purple-100 text-purple-800' : 'bg-slate-100 text-slate-700'
                              }`}>
                                {app.insuranceType === 'ayushman' ? 'Ayushman PM-JAY' : app.insuranceType === 'private-insurance' ? 'TPA Cashless' : 'Hospital Direct'}
                              </span>
                            </td>

                            {/* Status */}
                            <td className="py-3 px-4 whitespace-nowrap">
                              <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border capitalize ${statusColors[app.status]}`}>
                                {app.status}
                              </span>
                            </td>

                            {/* Actions Dropdown / Quick Buttons */}
                            <td className="py-3 px-4 text-right whitespace-nowrap">
                              <div className="flex items-center justify-end space-x-1.5">
                                
                                {app.status === 'pending' && (
                                  <button
                                    onClick={() => handleUpdateStatus(app.id!, 'confirmed')}
                                    className="p-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg transition-colors"
                                    title="Confirm Appointment"
                                  >
                                    <Check className="w-3.5 h-3.5" />
                                  </button>
                                )}

                                {app.status === 'confirmed' && (
                                  <button
                                    onClick={() => handleUpdateStatus(app.id!, 'completed')}
                                    className="p-1.5 bg-blue-50 hover:bg-blue-100 text-[#0052CC] rounded-lg transition-colors"
                                    title="Mark Completed"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                  </button>
                                )}

                                {app.status !== 'cancelled' && (
                                  <button
                                    onClick={() => handleUpdateStatus(app.id!, 'cancelled')}
                                    className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg transition-colors"
                                    title="Cancel"
                                  >
                                    <XCircle className="w-3.5 h-3.5" />
                                  </button>
                                )}

                                <button
                                  onClick={() => setSelectedAppointment(app)}
                                  className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                                  title="View Full Token & Notes"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                </button>

                                <button
                                  onClick={() => handleDeleteAppointment(app.id!)}
                                  className="p-1.5 bg-slate-100 hover:bg-rose-100 text-slate-400 hover:text-rose-600 rounded-lg transition-colors"
                                  title="Delete Record"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>

                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* TAB 2: HEALTH BLOG CMS */}
        {/* ----------------------------------------------------------------- */}
        {activeTab === 'blogs' && (
          <div className="space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div>
                <h3 className="text-lg font-black text-slate-900">Hospital Medical Publications & Articles</h3>
                <p className="text-xs text-slate-500">
                  Articles created here are saved to Firebase Firestore and immediately visible to patients on all devices.
                </p>
              </div>
              <button
                onClick={handleOpenNewBlog}
                className="px-4 py-2.5 bg-gradient-to-r from-[#0052CC] to-[#003D99] text-white text-xs font-bold rounded-xl shadow transition-all flex items-center space-x-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>+ Write New Health Article</span>
              </button>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="aspect-video relative overflow-hidden bg-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-[#0052CC] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className={`absolute top-3 right-3 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                        post.isPublished !== false ? 'bg-emerald-600 text-white' : 'bg-slate-600 text-white'
                      }`}>
                        {post.isPublished !== false ? 'Published' : 'Draft'}
                      </span>
                    </div>

                    <div className="p-5 space-y-2">
                      <span className="text-[11px] text-slate-400 block font-medium">
                        {post.date} • By {post.authorName}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 line-clamp-2">{post.title}</h4>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => navigate(`/blog/${post.slug}`)}
                      className="text-xs font-bold text-[#0052CC] hover:underline flex items-center space-x-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View on Web</span>
                    </button>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEditBlog(post)}
                        className="p-1.5 bg-white hover:bg-blue-50 text-[#0052CC] rounded-lg border border-slate-200 transition-colors"
                        title="Edit Article"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(post.id)}
                        className="p-1.5 bg-white hover:bg-rose-50 text-rose-600 rounded-lg border border-slate-200 transition-colors"
                        title="Delete Article"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* TAB 3: SYSTEM & DATABASE SYNC */}
        {/* ----------------------------------------------------------------- */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Firebase Firestore Cloud Database</h3>
                  <p className="text-xs text-slate-500">Connected Project: iron-flag-49ffs</p>
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-2 border-t border-slate-100 pt-4">
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Firestore Database ID:</span>
                  <span className="font-mono text-slate-800 font-bold">ai-studio-arogyadhamaheart-7248ad46-b3c3-4d53-a9cc-514512b22e1d</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Live Appointments in Cloud:</span>
                  <span className="font-bold text-[#0052CC]">{appointments.length} records</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Live Blog Posts in Cloud:</span>
                  <span className="font-bold text-[#0052CC]">{blogs.length} articles</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Sync Status:</span>
                  <span className="text-emerald-600 font-bold flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                    <span>Active on all devices</span>
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={async () => {
                    await seedInitialBlogs();
                    showNotification('Initial blog articles re-seeded to Firestore!');
                  }}
                  className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors flex items-center justify-center space-x-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Re-seed Sample Medical Articles</span>
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Hospital Staff Authorization</h3>
                  <p className="text-xs text-slate-500">Arogyadhama Heart & Super Specialty Hospital</p>
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-2 border-t border-slate-100 pt-4">
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Active Admin:</span>
                  <span className="font-bold text-slate-900">{admin?.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Admin Email:</span>
                  <span className="font-mono text-slate-800">{admin?.email}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Hospital Emergency Hotline:</span>
                  <span className="font-bold text-rose-600">08352-255999</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* ------------------------------------------------------------------- */}
      {/* MODAL: VIEW / PRINT APPOINTMENT TOKEN */}
      {/* ------------------------------------------------------------------- */}
      {selectedAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <HospitalLogo size="sm" />
              <button
                onClick={() => setSelectedAppointment(null)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Token Reference:</span>
                <span className="font-mono font-bold text-sm text-[#0052CC] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {selectedAppointment.bookingRef}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Patient:</span>
                <span className="font-bold text-slate-900">{selectedAppointment.patientName} (Age: {selectedAppointment.patientAge})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Phone:</span>
                <span className="font-bold text-slate-900">{selectedAppointment.patientPhone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Department:</span>
                <span className="font-bold text-slate-900">{selectedAppointment.departmentName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Doctor:</span>
                <span className="font-bold text-slate-900">{selectedAppointment.doctorName || 'Senior Specialist'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date & Slot:</span>
                <span className="font-bold text-slate-900">{selectedAppointment.appointmentDate} ({selectedAppointment.preferredSlot})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payment Mode:</span>
                <span className="font-bold text-purple-700 uppercase">{selectedAppointment.insuranceType || 'Cash/Direct'}</span>
              </div>
              {selectedAppointment.symptoms && (
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-slate-500 block mb-0.5">Symptoms / Remarks:</span>
                  <span className="text-slate-800 italic">{selectedAppointment.symptoms}</span>
                </div>
              )}
            </div>

            {/* Change Status Buttons */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700">Update Status:</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleUpdateStatus(selectedAppointment.id!, 'confirmed')}
                  className="py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Confirm Token
                </button>
                <button
                  onClick={() => handleUpdateStatus(selectedAppointment.id!, 'completed')}
                  className="py-2 bg-[#0052CC] hover:bg-[#003D99] text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Complete OPD
                </button>
                <button
                  onClick={() => handleUpdateStatus(selectedAppointment.id!, 'cancelled')}
                  className="py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>

            <div className="pt-2 flex justify-end space-x-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center space-x-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>Print Token</span>
              </button>
              <button
                onClick={() => setSelectedAppointment(null)}
                className="px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* MODAL: WALK-IN / NEW APPOINTMENT */}
      {/* ------------------------------------------------------------------- */}
      {showNewAppointmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div>
                <h3 className="text-lg font-black text-slate-900">Add Walk-in OPD Appointment</h3>
                <p className="text-xs text-slate-500">Register new patient token directly into cloud database</p>
              </div>
              <button
                onClick={() => setShowNewAppointmentModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleCreateWalkinAppointment} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Patient Name *</label>
                  <input
                    type="text"
                    required
                    value={newAppForm.patientName}
                    onChange={(e) => setNewAppForm({ ...newAppForm, patientName: e.target.value })}
                    placeholder="Full name"
                    className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={newAppForm.patientPhone}
                    onChange={(e) => setNewAppForm({ ...newAppForm, patientPhone: e.target.value })}
                    placeholder="10-digit number"
                    className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Age</label>
                  <input
                    type="number"
                    value={newAppForm.patientAge}
                    onChange={(e) => setNewAppForm({ ...newAppForm, patientAge: e.target.value })}
                    placeholder="e.g. 48"
                    className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Gender</label>
                  <select
                    value={newAppForm.gender}
                    onChange={(e) => setNewAppForm({ ...newAppForm, gender: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Payment</label>
                  <select
                    value={newAppForm.insuranceType}
                    onChange={(e) => setNewAppForm({ ...newAppForm, insuranceType: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                  >
                    <option value="cash">Hospital Cash</option>
                    <option value="ayushman">Ayushman PM-JAY</option>
                    <option value="private-insurance">Private TPA</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Department *</label>
                  <select
                    value={newAppForm.departmentId}
                    onChange={(e) => setNewAppForm({ ...newAppForm, departmentId: e.target.value, doctorId: '' })}
                    className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                  >
                    {SPECIALTIES.map(s => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Doctor</label>
                  <select
                    value={newAppForm.doctorId}
                    onChange={(e) => setNewAppForm({ ...newAppForm, doctorId: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                  >
                    <option value="">Any Available Specialist</option>
                    {DOCTORS.filter(d => d.departmentId === newAppForm.departmentId).map(d => (
                      <option key={d.id} value={d.id}>{d.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={newAppForm.appointmentDate}
                    onChange={(e) => setNewAppForm({ ...newAppForm, appointmentDate: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Time Slot</label>
                  <select
                    value={newAppForm.preferredSlot}
                    onChange={(e) => setNewAppForm({ ...newAppForm, preferredSlot: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                  >
                    <option value="morning">Morning Slot (09:00 AM - 01:00 PM)</option>
                    <option value="afternoon">Afternoon Slot (01:00 PM - 04:00 PM)</option>
                    <option value="evening">Evening Slot (04:00 PM - 08:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Chief Symptoms / Complaint</label>
                <input
                  type="text"
                  value={newAppForm.symptoms}
                  onChange={(e) => setNewAppForm({ ...newAppForm, symptoms: e.target.value })}
                  placeholder="e.g. Chest pain, Hypertension checkup"
                  className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowNewAppointmentModal(false)}
                  className="px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0052CC] hover:bg-[#003D99] text-white rounded-xl font-bold shadow"
                >
                  Generate Token & Save
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* MODAL: BLOG POST CMS EDITOR */}
      {/* ------------------------------------------------------------------- */}
      {showBlogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  {editingBlogId ? 'Edit Medical Blog Article' : 'Publish New Health Article'}
                </h3>
                <p className="text-xs text-slate-500">Live article will be broadcasted to patient health journal immediately</p>
              </div>
              <button
                onClick={() => setShowBlogModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSaveBlog} className="space-y-4 text-xs">
              
              <div>
                <label className="block font-bold text-slate-700 mb-1">Article Title *</label>
                <input
                  type="text"
                  required
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  placeholder="e.g. Recognizing the Early Warning Signs of Heart Attacks"
                  className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none font-bold text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category *</label>
                  <select
                    value={blogForm.category}
                    onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                  >
                    <option value="Cardiology">Cardiology & Heart Care</option>
                    <option value="Neurology">Neurology & Stroke</option>
                    <option value="Nephrology">Nephrology & Kidney Care</option>
                    <option value="Orthopaedics">Orthopaedics & Joints</option>
                    <option value="Emergency Care">Emergency & Trauma</option>
                    <option value="General Health">General Wellness</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Read Time</label>
                  <input
                    type="text"
                    value={blogForm.readTime}
                    onChange={(e) => setBlogForm({ ...blogForm, readTime: e.target.value })}
                    placeholder="e.g. 4 min read"
                    className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Author Doctor Name</label>
                  <input
                    type="text"
                    required
                    value={blogForm.authorName}
                    onChange={(e) => setBlogForm({ ...blogForm, authorName: e.target.value })}
                    placeholder="e.g. Dr. Anil Patil"
                    className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Author Designation</label>
                  <input
                    type="text"
                    value={blogForm.authorDesignation}
                    onChange={(e) => setBlogForm({ ...blogForm, authorDesignation: e.target.value })}
                    placeholder="e.g. Chief Cardiologist"
                    className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Cover Image URL</label>
                <input
                  type="url"
                  value={blogForm.image}
                  onChange={(e) => setBlogForm({ ...blogForm, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Short Excerpt / Summary *</label>
                <textarea
                  rows={2}
                  required
                  value={blogForm.excerpt}
                  onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                  placeholder="A brief 1-2 sentence overview of the article for cards..."
                  className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Article Content (Markdown / Paragraphs) *</label>
                <textarea
                  rows={8}
                  required
                  value={blogForm.content}
                  onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                  placeholder="Write the full medical guidance, preventive measures, symptoms, and clinical advice..."
                  className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none font-mono text-xs leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={blogForm.tags}
                    onChange={(e) => setBlogForm({ ...blogForm, tags: e.target.value })}
                    placeholder="Heart Care, Cath Lab, Vijayapura"
                    className="w-full p-2.5 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="flex items-center space-x-2 pt-6">
                  <input
                    type="checkbox"
                    id="isPublished"
                    checked={blogForm.isPublished}
                    onChange={(e) => setBlogForm({ ...blogForm, isPublished: e.target.checked })}
                    className="w-4 h-4 text-[#0052CC] rounded focus:ring-blue-500"
                  />
                  <label htmlFor="isPublished" className="font-bold text-slate-800">
                    Publish immediately (Visible to all patients)
                  </label>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowBlogModal(false)}
                  className="px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-[#0052CC] to-[#003D99] text-white rounded-xl font-bold shadow"
                >
                  {editingBlogId ? 'Save Changes' : 'Publish Article'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
