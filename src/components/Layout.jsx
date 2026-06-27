import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import AuthModal from './AuthModal.jsx';
import { getCurrentUser, signOut } from '../lib/formService.js';

function Layout() {
  const [authMode, setAuthMode] = useState('login');
  const [user, setUser] = useState(getCurrentUser());

  useEffect(() => {
    if (!user) {
      setAuthMode('login');
    }
  }, [user]);

  const handleAuthSuccess = () => {
    setUser(getCurrentUser());
    setAuthMode(null);
  };

  const handleLogout = () => {
    signOut();
    setUser(null);
    setAuthMode('login');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navigation onOpenLogin={() => setAuthMode('login')} onOpenSignup={() => setAuthMode('signup')} />
        <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-6 py-10">
          <div className="w-full max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-12">
            <h1 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Welcome to Pilli Group Foundation</h1>
            <p className="mt-4 text-slate-600">
              Please log in or sign up to continue. Once authenticated, you will have access to the full site.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => setAuthMode('login')}
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setAuthMode('signup')}
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
              >
                Sign Up
              </button>
            </div>
          </div>
        </main>
        <Footer />
        <AuthModal mode={authMode} onClose={() => setAuthMode(null)} onSuccess={handleAuthSuccess} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onOpenLogin={() => setAuthMode('login')} onOpenSignup={() => setAuthMode('signup')} user={user} onLogout={handleLogout} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <AuthModal mode={authMode} onClose={() => setAuthMode(null)} onSuccess={handleAuthSuccess} />
    </div>
  );
}

export default Layout;
