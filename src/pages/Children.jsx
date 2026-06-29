import { Link } from 'react-router-dom';
import { children } from '../data/children.js';

function LegacyChildren() {
  return (
    <div className="space-y-16 pb-16 pt-8 sm:pb-24 sm:pt-10">
      <section className="overflow-hidden rounded-[2rem] bg-slate-50 px-6 py-12 shadow-soft sm:px-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Children at the center</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Sponsors and donors can see the children behind every gift.</h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Every child profile is shared with care and transparency, so supporters can understand the real people they are helping.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#profiles" className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">
                Explore child profiles
              </a>
              <a href="#support" className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400">
                Become a sponsor
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-slate-900">What supporters can see</h3>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>Child story, age, country, and current needs</li>
              <li>School progress and community support updates</li>
              <li>Clear visibility into how sponsorship funds help</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="profiles" className="px-6 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <PageHeader eyebrow="Featured child profiles" title="A transparent view of the children your generosity reaches.">
            These stories are designed to help sponsors feel connected to the children, their families, and the impact of their support.
          </PageHeader>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {childProfiles.map((child) => (
              <article key={child.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-xl font-semibold text-primary">
                    {child.name[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{child.name}</h3>
                    <p className="text-sm text-slate-500">{child.age} • {child.country}</p>
                  </div>
                </div>
                <p className="mt-5 text-slate-600">{child.story}</p>
                <div className="mt-5 rounded-[1rem] bg-slate-50 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Current support need</p>
                  <p className="mt-2 text-slate-700">{child.need}</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{child.impact}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="bg-slate-100 px-6 py-16 sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <PageHeader eyebrow="Sponsor with confidence" title="Your support creates real, measurable change.">
              Every gift goes toward the child’s education, wellbeing, and long-term opportunity. Supporters can follow progress through updates, letters, and milestone stories.
            </PageHeader>
            <ul className="space-y-3 text-slate-600">
              <li>Transparent child profiles and support needs</li>
              <li>Regular updates and progress reports</li>
              <li>Direct connection between sponsors and students</li>
            </ul>
          </div>
          <ContactForm collection="child-sponsorship-interest" page="children" legend="Request sponsorship details" />
        </div>
      </section>
    </div>
  );
}

function Children() {
  return (
    <div className="space-y-10 px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Available Children</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Choose a child to sponsor.</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Browse children waiting for education support, view each profile, and start sponsorship in a simple step-by-step flow.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-950">Sponsor flow</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Select Child -&gt; Fill Details -&gt; Payment -&gt; Dashboard confirmation</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {children.map((child) => (
            <article key={child.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
              <img src={child.image} alt={`${child.name} sponsorship profile`} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{child.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">Age {child.age}</p>
                  </div>
                  <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Rs. {child.monthlyAmount.toLocaleString('en-IN')}/mo</p>
                </div>

                <dl className="mt-4 grid gap-2 text-sm text-slate-600">
                  <div className="flex justify-between gap-3">
                    <dt>School</dt>
                    <dd className="font-semibold text-slate-900">{child.grade}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Location</dt>
                    <dd className="font-semibold text-slate-900">{child.location}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Need</dt>
                    <dd className="text-right font-semibold text-slate-900">{child.focus}</dd>
                  </div>
                </dl>

                <div className="mt-5 flex gap-2">
                  <Link to={`/children/${child.id}`} className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                    View
                  </Link>
                  <Link to={`/sponsor/${child.id}`} className="flex-1 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-primary-dark">
                    Sponsor
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Children;
