import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../lib/formService.js';

function Signup({ hideHeading = false, onSuccess }) {
  const [status, setStatus] = useState('');
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPending(true);
    setStatus('');

    const formData = new FormData(event.currentTarget);
    try {
      createUser({
        name: formData.get('name') || '',
        email: formData.get('email') || '',
        password: formData.get('password') || '',
      });
      setStatus('Account created successfully.');
      if (onSuccess) {
        window.setTimeout(() => onSuccess(), 700);
      } else {
        window.setTimeout(() => navigate('/login'), 700);
      }
    } catch (error) {
      setStatus(error.message);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-12">
        {!hideHeading && (
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Create your account</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-950">Join the mission</h1>
            <p className="mt-4 max-w-xl text-slate-600">Create an account to start your sponsor journey, receive updates, and connect with the foundation.</p>
          </>
        )}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <label className="label-field">
            <span className="text-sm font-semibold text-slate-800">Full Name</span>
            <input type="text" name="name" required className="rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </label>
          <label className="label-field">
            <span className="text-sm font-semibold text-slate-800">Email</span>
            <input type="email" name="email" required className="rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </label>
          <label className="label-field">
            <span className="text-sm font-semibold text-slate-800">Password</span>
            <input type="password" name="password" required minLength="6" className="rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </label>
          <button type="submit" disabled={pending} className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70">
            {pending ? 'Creating account…' : 'Create Account'}
          </button>
          <p className="form-status text-sm text-slate-600" aria-live="polite">{status}&nbsp;</p>
        </form>
        {!hideHeading && (
          <p className="mt-8 text-sm text-slate-600">
            Already have an account? <a className="font-semibold text-primary hover:text-primary-dark" href="/login">Log in</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default Signup;
