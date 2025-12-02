// frontend/src/routes.js
import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

// Pages
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import HRDashboard from './pages/hr/HRDashboard';
import EmployeeDashboard from './pages/employee/EmployeeDashboard';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/dashboard" />;
  return children;
};

const DashboardRedirect = () => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  switch (user.role) {
    case 'admin': return <Navigate to="/admin/dashboard" />;
    case 'hrOfficer': return <Navigate to="/hr/dashboard" />;
    case 'employee': return <Navigate to="/employee/dashboard" />;
    default: return <Navigate to="/login" />;
  }
};

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/dashboard" element={<DashboardRedirect />} />
    
    <Route path="/admin/*" element={
      <ProtectedRoute allowedRoles={['admin']}>
        <AdminDashboard />
      </ProtectedRoute>
    } />
    
    <Route path="/hr/*" element={
      <ProtectedRoute allowedRoles={['hrOfficer']}>
        <HRDashboard />
      </ProtectedRoute>
    } />
    
    <Route path="/employee/*" element={
      <ProtectedRoute allowedRoles={['employee']}>
        <EmployeeDashboard />
      </ProtectedRoute>
    } />
    
    <Route path="*" element={<Navigate to="/dashboard" />} />
  </Routes>
);

export default AppRoutes;
