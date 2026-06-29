import { useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { findChild } from '../data/children.js';
import { createSponsorship, getCurrentUser } from '../lib/formService.js';

function Sponsor() {
  const { childId } = useParams();
  const navigate = useNavigate();
  const child = findChild(childId);
  const user = getCurrentUser();
  const [status, setStatus] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!child) {
    return <Navigate to="/children" replace />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    createSponsorship({
      userEmail: user.email,
      childId: child.id,
      childName: child.name,
      amount: Number(formData.get('amount')),
      frequency: formData.get('frequency'),
      paymentMethod: formData.get('paymentMethod'),
    });
    setConfirmed(true);
    setStatus('Sponsorship confirmed. Redirecting to dashboard...');
    window.setTimeout(() => navigate('/dashboard'), 1200);
  };

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 grid gap-3 sm:grid-cols-4">
          {['Select Child', 'Fill Details', 'Payment', 'Dashboard'].map((step, index) => (
            <div key={step} className={`rounded-full px-4 py-2 text-center text-sm font-semibold ${index < 3 ? 'bg-primary text-white' : 'bg-white text-slate-700 ring-1 ring-slate-200'}`}>
              {step}
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <img src={child.image} alt={`${child.name} sponsorship profile`} className="aspect-[4/3] w-full rounded-xl object-cover" />
            <h1 className="mt-5 text-3xl font-semibold text-slate-950">Sponsor {child.name}</h1>
            <p className="mt-2 text-sm text-slate-500">Age {child.age} | {child.grade} | {child.location}</p>
            <p className="mt-4 text-slate-600">{child.focus}</p>
          </aside>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            {confirmed ? (
              <div className="rounded-2xl bg-emerald-50 p-6 text-emerald-900">
                <h2 className="text-2xl font-semibold">Sponsorship confirmed</h2>
                <p className="mt-3">{status}</p>
              </div>
            ) : (
              <>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Payment Details</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950">Complete sponsorship</h2>
                <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
                  <label className="label-field">
                    <span className="text-sm font-semibold text-slate-800">Sponsor Name</span>
                    <input name="name" defaultValue={user.name} required className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3" />
                  </label>
                  <label className="label-field">
                    <span className="text-sm font-semibold text-slate-800">Email</span>
                    <input name="email" type="email" defaultValue={user.email} required className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3" />
                  </label>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="label-field">
                      <span className="text-sm font-semibold text-slate-800">Amount</span>
                      <input name="amount" type="number" min={child.monthlyAmount} defaultValue={child.monthlyAmount} required className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3" />
                    </label>
                    <label className="label-field">
                      <span className="text-sm font-semibold text-slate-800">Frequency</span>
                      <select name="frequency" defaultValue="monthly" className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3">
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                      </select>
                    </label>
                  </div>
                  <label className="label-field">
                    <span className="text-sm font-semibold text-slate-800">Payment Method</span>
                    <select name="paymentMethod" defaultValue="card" className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3">
                      <option value="card">Card</option>
                      <option value="upi">UPI</option>
                      <option value="bank-transfer">Bank Transfer</option>
                    </select>
                  </label>
                  <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark">
                    Confirm Sponsorship
                  </button>
                  <Link to={`/children/${child.id}`} className="text-center text-sm font-semibold text-primary hover:text-primary-dark">Review child profile</Link>
                </form>
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
