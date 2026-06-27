import { createPortal } from 'react-dom';
import { lazy, Suspense } from 'react';

const Login = lazy(() => import('../pages/Login.jsx'));
const Signup = lazy(() => import('../pages/Signup.jsx'));

function AuthModal({ mode, onClose, onSuccess }) {
  if (!mode) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-slate-200">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              {mode === 'login' ? 'Login' : 'Sign Up'}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">
              {mode === 'login' ? 'Welcome back' : 'Join the mission'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-slate-200"
          >
            Close
          </button>
        </div>
        <div className="p-6">
          <Suspense fallback={<div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8 text-center text-slate-500">Loading…</div>}>
            {mode === 'login' ? <Login hideHeading onSuccess={onSuccess} /> : <Signup hideHeading onSuccess={onSuccess} />}
          </Suspense>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default AuthModal;
