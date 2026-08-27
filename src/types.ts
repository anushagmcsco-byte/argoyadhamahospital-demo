export interface Specialty {
  id: string;
  name: string;
  slug: string;
  category: 'super-specialty' | 'surgical' | 'medical' | 'diagnostic' | 'emergency';
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  keyProcedures: string[];
  equipmentAndTech: string[];
  conditionsTreated: string[];
  headDoctorId?: string;
  stats?: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
}

export interface Doctor {
  id: string;
  name: string;
  slug: string;
  qualifications: string;
  designation: string;
  departmentId: string;
  departmentName: string;
  experienceYears: number;
  opdTimings: string;
  availableDays: string[];
  bio: string;
  specialInterests: string[];
  achievements?: string[];
  image: string;
  languages: string[];
  rating: number;
  reviewCount: number;
}

export interface Facility {
  id: string;
  title: string;
  slug: string;
  tag: string;
  iconName: string;
  shortDescription: string;
  detailedDescription: string;
  highlights: string[];
  operatingHours: string;
  image: string;
}

export interface HealthPackage {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  price: number;
  originalPrice: number;
  recommendedFor: string;
  testCount: number;
  fastingRequired: boolean;
  turnaroundHours: string;
  includedCategories: {
    categoryName: string;
    tests: string[];
  }[];
  popular?: boolean;
}

export interface InsurancePartner {
  id: string;
  name: string;
  type: 'government' | 'private' | 'tpa';
  logoPlaceholder: string;
  description?: string;
  contactNumber?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  authorName: string;
  authorDesignation: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  views: number;
}

export interface Testimonial {
  id: string;
  patientName: string;
  age?: number;
  location: string;
  treatment: string;
  department: string;
  doctorTreated: string;
  quote: string;
  detailedStory?: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'appointment' | 'insurance' | 'emergency' | 'admission';
  question: string;
  answer: string;
}

export interface StoredAppointment {
  id?: string;
  bookingRef: string;
  patientName: string;
  patientPhone: string;
  patientEmail?: string;
  patientAge: number | string;
  gender?: 'male' | 'female' | 'other' | string;
  departmentId: string;
  departmentName: string;
  doctorId?: string;
  doctorName?: string;
  appointmentDate: string;
  preferredSlot: string;
  insuranceType?: string;
  symptoms?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  adminNotes?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface StoredBlogPost extends BlogPost {
  isPublished?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface StoredGalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  uploadedBy?: string;
  isPublished?: boolean;
  order?: number;
  createdAt: string;
  updatedAt?: string;
}

export interface AdminUser {
  email: string;
  name: string;
  role: 'superadmin' | 'admin' | 'doctor' | 'receptionist';
  lastLogin?: string;
}

