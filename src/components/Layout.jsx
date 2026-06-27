import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import AuthModal from './AuthModal.jsx';

function Layout() {
  const [authMode, setAuthMode] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onOpenLogin={() => setAuthMode('login')} onOpenSignup={() => setAuthMode('signup')} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <AuthModal mode={authMode} onClose={() => setAuthMode(null)} />
    </div>
  );
}

export default Layout;
