import { Link, Navigate } from 'react-router-dom';
import { children } from '../data/children.js';
import { getCurrentUser, getSponsorshipsForUser } from '../lib/formService.js';

function Dashboard() {
  const user = getCurrentUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const sponsorships = getSponsorshipsForUser(user.email);
  const sponsoredIds = new Set(sponsorships.map((item) => item.childId));
  const availableChildren = children.filter((child) => !sponsoredIds.has(child.id)).slice(0, 6);
  const totalMonthly = sponsorships.reduce((total, item) => total + Number(item.amount || 0), 0);

  return (
    <div className="bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[16rem_1fr]">
        <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft lg:sticky lg:top-24 lg:self-start">
          <p className="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Sponsor Portal</p>
          <nav className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
            {['Dashboard', 'Children', 'My Sponsorships', 'Donations', 'Messages', 'Profile', 'Settings'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="rounded-xl px-3 py-2 hover:bg-slate-100 hover:text-slate-950">
                {item}
              </a>
            ))}
          </nav>
        </aside>

        <main className="space-y-6">
          <section id="dashboard" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Dashboard</p>
                <h1 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">Welcome, {user.name}</h1>
                <p className="mt-3 max-w-2xl text-slate-600">
                  Track sponsorships, choose children waiting for support, and manage your donor profile from one place.
                </p>
              </div>
              <Link to="/children" className="inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">
                Sponsor a Child
              </Link>
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: 'My Sponsored Children', value: sponsorships.length },
              { label: 'Monthly Commitment', value: `Rs. ${totalMonthly.toLocaleString('en-IN')}` },
              { label: 'Donation History', value: sponsorships.length },
              { label: 'Available Children', value: children.length - sponsorships.length },
            ].map((item) => (
              <article key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">{item.value}</p>
              </article>
            ))}
          </section>

          <section id="my-sponsorships" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">My Sponsored Children</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">{sponsorships.length} active sponsorship{sponsorships.length === 1 ? '' : 's'}</h2>
              </div>
              <Link to="/children" className="text-sm font-semibold text-primary hover:text-primary-dark">View available children</Link>
            </div>

            {sponsorships.length ? (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {sponsorships.map((item) => (
                  <article key={item.id} className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-lg font-semibold text-slate-950">{item.childName}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.status} sponsorship</p>
                    <p className="mt-4 text-sm text-slate-700">Rs. {Number(item.amount).toLocaleString('en-IN')} / {item.frequency}</p>
                    <Link to={`/children/${item.childId}`} className="mt-4 inline-flex text-sm font-semibold text-primary hover:text-primary-dark">View child profile</Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-2xl bg-slate-50 p-6">
                <p className="font-semibold text-slate-900">No sponsored children yet.</p>
                <p className="mt-2 text-slate-600">Choose a child below to start your first sponsorship and see it appear here.</p>
              </div>
            )}
          </section>

          <section id="children" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Available Children</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">Children waiting for sponsorship</h2>
              </div>
              <Link to="/children" className="text-sm font-semibold text-primary hover:text-primary-dark">See all children</Link>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {availableChildren.map((child) => (
                <article key={child.id} className="rounded-2xl border border-slate-200 p-4">
                  <img src={child.image} alt={`${child.name} sponsorship profile`} className="aspect-[4/3] w-full rounded-xl object-cover" loading="lazy" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">{child.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">Age {child.age} | {child.grade} | {child.location}</p>
                  <p className="mt-3 text-sm text-slate-700">Rs. {child.monthlyAmount.toLocaleString('en-IN')}/month</p>
                  <div className="mt-4 flex gap-2">
                    <Link to={`/children/${child.id}`} className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-700 hover:bg-slate-100">View</Link>
                    <Link to={`/sponsor/${child.id}`} className="flex-1 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white hover:bg-primary-dark">Sponsor</Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <article id="donations" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Donation History</p>
              <div className="mt-5 space-y-3">
                {sponsorships.length ? sponsorships.map((item) => (
                  <div key={item.id} className="flex items-center justify-between rounded-xl bg-slate-50 p-4 text-sm">
                    <span>{item.childName}</span>
                    <span className="font-semibold">Rs. {Number(item.amount).toLocaleString('en-IN')}</span>
                  </div>
                )) : <p className="text-slate-600">No donations recorded yet.</p>}
              </div>
            </article>
            <article id="profile" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Profile</p>
              <dl className="mt-5 space-y-4 text-sm">
                <div><dt className="text-slate-500">Name</dt><dd className="mt-1 font-semibold text-slate-950">{user.name}</dd></div>
                <div><dt className="text-slate-500">Email</dt><dd className="mt-1 font-semibold text-slate-950">{user.email}</dd></div>
                <div><dt className="text-slate-500">Account Type</dt><dd className="mt-1 font-semibold text-slate-950">Sponsor / Donor</dd></div>
              </dl>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
