import { 
  collection, 
  doc, 
  setDoc, 
  addDoc, 
  getDocs, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  where,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { StoredAppointment, StoredBlogPost, StoredGalleryItem } from '../types';
import { BLOG_POSTS, GALLERY_IMAGES } from '../data/hospitalData';

const APPOINTMENTS_COLLECTION = 'appointments';
const BLOGS_COLLECTION = 'blogPosts';
const GALLERY_COLLECTION = 'galleryItems';

// ---------------------------------------------------------------------------
// APPOINTMENTS SERVICE
// ---------------------------------------------------------------------------

/**
 * Save a new appointment to Firestore
 */
export async function createAppointment(data: Omit<StoredAppointment, 'id' | 'createdAt' | 'status'> & { status?: StoredAppointment['status'] }): Promise<StoredAppointment> {
  const newAppointment: StoredAppointment = {
    ...data,
    status: data.status || 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  try {
    const colRef = collection(db, APPOINTMENTS_COLLECTION);
    const docRef = await addDoc(colRef, {
      ...newAppointment,
      serverTime: serverTimestamp()
    });
    return { ...newAppointment, id: docRef.id };
  } catch (error) {
    console.error('Error adding appointment to Firestore:', error);
    // Fallback to local persistence if offline
    const localId = 'local-' + Date.now();
    const storedList = getLocalAppointments();
    const created = { ...newAppointment, id: localId };
    localStorage.setItem('arogya_appointments', JSON.stringify([created, ...storedList]));
    return created;
  }
}

/**
 * Real-time listener for appointments (all devices)
 */
export function subscribeToAppointments(callback: (appointments: StoredAppointment[]) => void) {
  try {
    const q = query(collection(db, APPOINTMENTS_COLLECTION), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const appointments: StoredAppointment[] = [];
      snapshot.forEach((doc) => {
        const d = doc.data();
        appointments.push({
          id: doc.id,
          bookingRef: d.bookingRef || 'REF-' + doc.id.slice(0, 6),
          patientName: d.patientName || 'Anonymous',
          patientPhone: d.patientPhone || '',
          patientEmail: d.patientEmail || '',
          patientAge: d.patientAge || '',
          gender: d.gender || 'unspecified',
          departmentId: d.departmentId || '',
          departmentName: d.departmentName || '',
          doctorId: d.doctorId || '',
          doctorName: d.doctorName || '',
          appointmentDate: d.appointmentDate || '',
          preferredSlot: d.preferredSlot || '',
          insuranceType: d.insuranceType || 'cash',
          symptoms: d.symptoms || '',
          status: d.status || 'pending',
          adminNotes: d.adminNotes || '',
          createdAt: d.createdAt || new Date().toISOString(),
          updatedAt: d.updatedAt || '',
        });
      });
      callback(appointments);
    }, (error) => {
      console.warn('Firestore subscription error (using fallback):', error);
      callback(getLocalAppointments());
    });

    return unsubscribe;
  } catch (error) {
    console.warn('Firestore subscription setup failed:', error);
    callback(getLocalAppointments());
    return () => {};
  }
}

/**
 * Update appointment status & notes (Admin)
 */
export async function updateAppointmentStatus(id: string, status: StoredAppointment['status'], adminNotes?: string): Promise<boolean> {
  try {
    const docRef = doc(db, APPOINTMENTS_COLLECTION, id);
    await updateDoc(docRef, {
      status,
      ...(adminNotes !== undefined ? { adminNotes } : {}),
      updatedAt: new Date().toISOString(),
    });
    return true;
  } catch (error) {
    console.error('Error updating appointment:', error);
    // Update local copy
    const local = getLocalAppointments();
    const updated = local.map(a => a.id === id ? { ...a, status, adminNotes: adminNotes ?? a.adminNotes } : a);
    localStorage.setItem('arogya_appointments', JSON.stringify(updated));
    return true;
  }
}

/**
 * Delete an appointment
 */
export async function deleteAppointment(id: string): Promise<boolean> {
  try {
    const docRef = doc(db, APPOINTMENTS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('Error deleting appointment:', error);
    const local = getLocalAppointments().filter(a => a.id !== id);
    localStorage.setItem('arogya_appointments', JSON.stringify(local));
    return true;
  }
}

function getLocalAppointments(): StoredAppointment[] {
  try {
    const raw = localStorage.getItem('arogya_appointments');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// BLOGS SERVICE
// ---------------------------------------------------------------------------

/**
 * Seed initial blog posts into Firestore if collection is empty
 */
export async function seedInitialBlogs(): Promise<void> {
  try {
    const snap = await getDocs(collection(db, BLOGS_COLLECTION));
    if (snap.empty) {
      console.log('Seeding initial clinical blog posts to Firestore...');
      for (const post of BLOG_POSTS) {
        await addDoc(collection(db, BLOGS_COLLECTION), {
          ...post,
          isPublished: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }
    }
  } catch (err) {
    console.warn('Could not seed initial blogs to Firestore:', err);
  }
}

/**
 * Get a single blog post by slug
 */
export async function getBlogBySlug(slug: string): Promise<StoredBlogPost | null> {
  try {
    const q = query(collection(db, BLOGS_COLLECTION), where('slug', '==', slug));
    const snap = await getDocs(q);
    if (!snap.empty) {
      const doc = snap.docs[0];
      const d = doc.data();
      return {
        id: doc.id,
        title: d.title || 'Untitled Post',
        slug: d.slug || slug,
        excerpt: d.excerpt || '',
        content: d.content || '',
        category: d.category || 'General Health',
        authorName: d.authorName || 'Medical Team',
        authorDesignation: d.authorDesignation || 'Consultant Specialist',
        date: d.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        readTime: d.readTime || '4 min read',
        image: d.image || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
        tags: d.tags || ['Healthcare', 'Vijayapura'],
        views: d.views || 100,
        isPublished: d.isPublished !== false,
        createdAt: d.createdAt || new Date().toISOString(),
        updatedAt: d.updatedAt || '',
      };
    }
  } catch (error) {
    console.warn('Error fetching blog by slug from Firestore:', error);
  }

  // Fallback to static data
  const fallback = BLOG_POSTS.find(p => p.slug === slug);
  return fallback ? { ...fallback, isPublished: true } : null;
}

/**
 * Real-time listener for blog posts
 */
export function subscribeToBlogs(callback: (blogs: StoredBlogPost[]) => void) {
  try {
    const q = query(collection(db, BLOGS_COLLECTION), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        // Fallback to static blog list if empty
        callback(BLOG_POSTS.map(p => ({ ...p, isPublished: true })));
        return;
      }
      const posts: StoredBlogPost[] = [];
      snapshot.forEach((doc) => {
        const d = doc.data();
        posts.push({
          id: doc.id,
          title: d.title || 'Untitled Post',
          slug: d.slug || 'post-' + doc.id,
          excerpt: d.excerpt || '',
          content: d.content || '',
          category: d.category || 'General Health',
          authorName: d.authorName || 'Medical Team',
          authorDesignation: d.authorDesignation || 'Consultant Specialist',
          date: d.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          readTime: d.readTime || '4 min read',
          image: d.image || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
          tags: d.tags || ['Healthcare', 'Vijayapura'],
          views: d.views || 100,
          isPublished: d.isPublished !== false,
          createdAt: d.createdAt || new Date().toISOString(),
          updatedAt: d.updatedAt || '',
        });
      });
      callback(posts);
    }, (error) => {
      console.warn('Firestore blog subscription error:', error);
      callback(BLOG_POSTS.map(p => ({ ...p, isPublished: true })));
    });

    return unsubscribe;
  } catch (err) {
    console.warn('Firestore blog listener setup failed:', err);
    callback(BLOG_POSTS.map(p => ({ ...p, isPublished: true })));
    return () => {};
  }
}

/**
 * Create a new Blog Post (Admin)
 */
export async function createBlogPost(post: Omit<StoredBlogPost, 'id'>): Promise<StoredBlogPost> {
  const newPost = {
    ...post,
    isPublished: post.isPublished !== false,
    views: post.views || 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  try {
    const colRef = collection(db, BLOGS_COLLECTION);
    const docRef = await addDoc(colRef, newPost);
    return { ...newPost, id: docRef.id };
  } catch (error) {
    console.error('Error creating blog post in Firestore:', error);
    return { ...newPost, id: 'local-' + Date.now() };
  }
}

/**
 * Update an existing Blog Post (Admin)
 */
export async function updateBlogPost(id: string, post: Partial<StoredBlogPost>): Promise<boolean> {
  try {
    const docRef = doc(db, BLOGS_COLLECTION, id);
    await updateDoc(docRef, {
      ...post,
      updatedAt: new Date().toISOString(),
    });
    return true;
  } catch (error) {
    console.error('Error updating blog post in Firestore:', error);
    return false;
  }
}

/**
 * Delete a Blog Post (Admin)
 */
export async function deleteBlogPost(id: string): Promise<boolean> {
  try {
    const docRef = doc(db, BLOGS_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('Error deleting blog post in Firestore:', error);
    return false;
  }
}

// ---------------------------------------------------------------------------
// GALLERY SERVICE (CROSS-DEVICE PERSISTENCE)
// ---------------------------------------------------------------------------

/**
 * Seed initial default gallery items to Firestore if collection is empty
 */
export async function seedInitialGallery(): Promise<void> {
  try {
    const snap = await getDocs(collection(db, GALLERY_COLLECTION));
    if (snap.empty) {
      console.log('Seeding initial hospital gallery photos to Firestore...');
      let orderIndex = 0;
      for (const item of GALLERY_IMAGES) {
        orderIndex++;
        await addDoc(collection(db, GALLERY_COLLECTION), {
          title: item.title,
          category: item.category,
          image: item.image,
          description: item.description || '',
          uploadedBy: 'Hospital Media Team',
          isPublished: true,
          order: orderIndex,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }
    }
  } catch (err) {
    console.warn('Could not seed initial gallery items to Firestore:', err);
  }
}

/**
 * Real-time listener for gallery items across all devices
 */
export function subscribeToGalleryItems(callback: (items: StoredGalleryItem[]) => void) {
  try {
    const q = query(collection(db, GALLERY_COLLECTION), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        // Fallback to static gallery list if Firestore is empty
        const fallback = GALLERY_IMAGES.map((img, idx) => ({
          id: img.id || `g-${idx + 1}`,
          title: img.title,
          category: img.category,
          image: img.image,
          description: img.description || '',
          uploadedBy: 'Hospital Media Team',
          isPublished: true,
          order: idx + 1,
          createdAt: new Date().toISOString(),
        }));
        callback(fallback);
        return;
      }

      const items: StoredGalleryItem[] = [];
      snapshot.forEach((doc) => {
        const d = doc.data();
        items.push({
          id: doc.id,
          title: d.title || 'Untitled Photo',
          category: d.category || 'Infrastructure',
          image: d.image || '',
          description: d.description || '',
          uploadedBy: d.uploadedBy || 'Admin',
          isPublished: d.isPublished !== false,
          order: d.order || 0,
          createdAt: d.createdAt || new Date().toISOString(),
          updatedAt: d.updatedAt || '',
        });
      });
      callback(items);
    }, (error) => {
      console.warn('Firestore gallery subscription error, falling back to local/static:', error);
      const fallback = GALLERY_IMAGES.map((img, idx) => ({
        id: img.id || `g-${idx + 1}`,
        title: img.title,
        category: img.category,
        image: img.image,
        description: img.description || '',
        uploadedBy: 'Hospital Media Team',
        isPublished: true,
        order: idx + 1,
        createdAt: new Date().toISOString(),
      }));
      callback(fallback);
    });

    return unsubscribe;
  } catch (err) {
    console.warn('Firestore gallery listener setup failed:', err);
    const fallback = GALLERY_IMAGES.map((img, idx) => ({
      id: img.id || `g-${idx + 1}`,
      title: img.title,
      category: img.category,
      image: img.image,
      description: img.description || '',
      uploadedBy: 'Hospital Media Team',
      isPublished: true,
      order: idx + 1,
      createdAt: new Date().toISOString(),
    }));
    callback(fallback);
    return () => {};
  }
}

/**
 * Create a new Gallery Item in Firestore
 */
export async function createGalleryItem(item: Omit<StoredGalleryItem, 'id' | 'createdAt'> & { createdAt?: string }): Promise<StoredGalleryItem> {
  const newItem: StoredGalleryItem = {
    ...item,
    id: '',
    isPublished: item.isPublished !== false,
    createdAt: item.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  try {
    const colRef = collection(db, GALLERY_COLLECTION);
    const docRef = await addDoc(colRef, {
      title: newItem.title,
      category: newItem.category,
      image: newItem.image,
      description: newItem.description || '',
      uploadedBy: newItem.uploadedBy || 'Admin',
      isPublished: newItem.isPublished,
      order: newItem.order || 0,
      createdAt: newItem.createdAt,
      updatedAt: newItem.updatedAt,
    });
    return { ...newItem, id: docRef.id };
  } catch (error) {
    console.error('Error saving gallery item to Firestore:', error);
    const localId = 'gallery-local-' + Date.now();
    return { ...newItem, id: localId };
  }
}

/**
 * Update an existing Gallery Item (Admin)
 */
export async function updateGalleryItem(id: string, item: Partial<StoredGalleryItem>): Promise<boolean> {
  try {
    const docRef = doc(db, GALLERY_COLLECTION, id);
    await updateDoc(docRef, {
      ...item,
      updatedAt: new Date().toISOString(),
    });
    return true;
  } catch (error) {
    console.error('Error updating gallery item in Firestore:', error);
    return false;
  }
}

/**
 * Delete a Gallery Item (Admin)
 */
export async function deleteGalleryItem(id: string): Promise<boolean> {
  try {
    const docRef = doc(db, GALLERY_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('Error deleting gallery item in Firestore:', error);
    return false;
  }
}

