import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string) => void;
  isAppointmentModalOpen: boolean;
  openAppointmentModal: (doctorId?: string, departmentId?: string) => void;
  closeAppointmentModal: () => void;
  preselectedDoctorId?: string;
  preselectedDepartmentId?: string;
  isEmergencyModalOpen: boolean;
  openEmergencyModal: () => void;
  closeEmergencyModal: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [preselectedDoctorId, setPreselectedDoctorId] = useState<string | undefined>(undefined);
  const [preselectedDepartmentId, setPreselectedDepartmentId] = useState<string | undefined>(undefined);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) return;
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openAppointmentModal = (doctorId?: string, departmentId?: string) => {
    setPreselectedDoctorId(doctorId);
    setPreselectedDepartmentId(departmentId);
    setIsAppointmentModalOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
    setPreselectedDoctorId(undefined);
    setPreselectedDepartmentId(undefined);
  };

  const openEmergencyModal = () => {
    setIsEmergencyModalOpen(true);
  };

  const closeEmergencyModal = () => {
    setIsEmergencyModalOpen(false);
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
        isAppointmentModalOpen,
        openAppointmentModal,
        closeAppointmentModal,
        preselectedDoctorId,
        preselectedDepartmentId,
        isEmergencyModalOpen,
        openEmergencyModal,
        closeEmergencyModal,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
