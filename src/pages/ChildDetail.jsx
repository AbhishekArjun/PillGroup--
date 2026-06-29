import { Link, Navigate, useParams } from 'react-router-dom';
import { findChild } from '../data/children.js';

function ChildDetail() {
  const { childId } = useParams();
  const child = findChild(childId);

  if (!child) {
    return <Navigate to="/children" replace />;
  }

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <img src={child.image} alt={`${child.name} sponsorship profile`} className="aspect-[4/3] w-full rounded-xl object-cover" />
          <div className="mt-5 grid gap-3 text-sm text-slate-700">
            <p><span className="font-semibold text-slate-950">Age:</span> {child.age}</p>
            <p><span className="font-semibold text-slate-950">School:</span> {child.grade}</p>
            <p><span className="font-semibold text-slate-950">Location:</span> {child.location}</p>
            <p><span className="font-semibold text-slate-950">Need:</span> {child.focus}</p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Child Profile</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-950">{child.name}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{child.story}</p>

          <div className="mt-8 rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Sponsorship Plan</p>
            <p className="mt-3 text-3xl font-semibold text-slate-950">Rs. {child.monthlyAmount.toLocaleString('en-IN')} / month</p>
            <p className="mt-2 text-slate-600">Covers education, learning material, meals, and local mentoring updates.</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to={`/sponsor/${child.id}`} className="inline-flex justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark">Sponsor Now</Link>
            <Link to="/children" className="inline-flex justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100">Back to Children</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ChildDetail;
