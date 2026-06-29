import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import AuthModal from './AuthModal.jsx';
import { getCurrentUser, signOut } from '../lib/formService.js';

function Layout() {
  const [authMode, setAuthMode] = useState(null);
  const [user, setUser] = useState(getCurrentUser());
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    setUser(getCurrentUser());
    setAuthMode(null);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    signOut();
    setUser(null);
    setAuthMode(null);
    navigate('/');
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Navigation
        onOpenLogin={() => setAuthMode('login')}
        onOpenSignup={() => setAuthMode('signup')}
        user={user}
        onLogout={handleLogout}
      />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <AuthModal mode={authMode} onClose={() => setAuthMode(null)} onSuccess={handleAuthSuccess} />
    </div>
  );
}

export default Layout;
