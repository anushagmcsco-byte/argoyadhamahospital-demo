import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { QuickEmergencyModal } from './components/QuickEmergencyModal';
import { FloatingActions } from './components/FloatingActions';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DepartmentsPage } from './pages/DepartmentsPage';
import { DepartmentDetailPage } from './pages/DepartmentDetailPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { DoctorDetailPage } from './pages/DoctorDetailPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { FacilityDetailPage } from './pages/FacilityDetailPage';
import { HealthPackagesPage } from './pages/HealthPackagesPage';
import { CashlessInsurancePage } from './pages/CashlessInsurancePage';
import { PatientGuidePage } from './pages/PatientGuidePage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { AppointmentPage } from './pages/AppointmentPage';
import { AdminPage } from './pages/AdminPage';
import { AdminAuthProvider } from './context/AdminAuthContext';

const AppRouter: React.FC = () => {
  const { currentPath } = useNavigation();

  const renderRoute = () => {
    // Dynamic Department detail: /departments/cardiology, /departments/...
    if (currentPath.startsWith('/departments/')) {
      const slug = currentPath.replace('/departments/', '').replace(/\/$/, '');
      if (slug) {
        return <DepartmentDetailPage slug={slug} />;
      }
    }

    // Dynamic Doctor detail: /doctors/dr-anil-patil, /doctors/...
    if (currentPath.startsWith('/doctors/')) {
      const slug = currentPath.replace('/doctors/', '').replace(/\/$/, '');
      if (slug) {
        return <DoctorDetailPage slug={slug} />;
      }
    }

    // Dynamic Facility detail: /facilities/digital-flat-panel-cath-lab
    if (currentPath.startsWith('/facilities/')) {
      const slug = currentPath.replace('/facilities/', '').replace(/\/$/, '');
      if (slug) {
        return <FacilityDetailPage slug={slug} />;
      }
    }

    // Dynamic Blog Post: /blog/warning-signs-heart-attack-golden-hour
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '').replace(/\/$/, '');
      if (slug) {
        return <BlogPostPage slug={slug} />;
      }
    }

    // Exact Page Routes
    switch (currentPath) {
      case '/':
      case '/home':
        return <HomePage />;

      case '/about-us':
      case '/about':
        return <AboutPage />;

      case '/departments':
      case '/specialties':
        return <DepartmentsPage />;

      case '/doctors':
      case '/our-doctors':
      case '/specialists':
        return <DoctorsPage />;

      case '/facilities':
      case '/infrastructure':
        return <FacilitiesPage />;

      case '/health-packages':
      case '/packages':
      case '/checkups':
        return <HealthPackagesPage />;

      case '/cashless-insurance':
      case '/insurance':
      case '/ayushman-bharat':
        return <CashlessInsurancePage />;

      case '/patient-guide':
      case '/patients':
      case '/visitor-guide':
        return <PatientGuidePage />;

      case '/gallery':
      case '/photos':
        return <GalleryPage />;

      case '/blog':
      case '/health-tips':
      case '/news':
        return <BlogPage />;

      case '/contact':
      case '/contact-us':
        return <ContactPage />;

      case '/appointment':
      case '/book-appointment':
        return <AppointmentPage />;

      case '/admin':
      case '/admin-login':
      case '/portal':
        return <AdminPage />;

      default:
        return <HomePage />;
    }
  };

  const isAdminRoute = currentPath === '/admin' || currentPath === '/admin-login' || currentPath === '/portal';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-[#0052CC] selection:text-white">
      {!isAdminRoute && <Header />}
      <main className="flex-1 w-full">
        {renderRoute()}
      </main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <AppointmentModal />}
      {!isAdminRoute && <QuickEmergencyModal />}
      {!isAdminRoute && <FloatingActions />}
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AdminAuthProvider>
        <AppRouter />
      </AdminAuthProvider>
    </NavigationProvider>
  );
}
