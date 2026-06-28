import ContactForm from '../components/ContactForm.jsx';
import PageHeader from '../components/PageHeader.jsx';

const childProfiles = [
  {
    name: 'Amina',
    age: '12',
    country: 'Kenya',
    need: 'School fees, books, and health support',
    story: 'Amina is a bright student who dreams of becoming a nurse and helping her community thrive.',
    impact: 'Your sponsorship helps her stay in school and receive regular medical checkups.',
  },
  {
    name: 'Rafiq',
    age: '10',
    country: 'Bangladesh',
    need: 'Meals, uniforms, and digital learning tools',
    story: 'Rafiq loves drawing and learning new things, but his family needs support to keep him in school.',
    impact: 'A sponsor helps him access nutritious meals, school supplies, and a safe learning environment.',
  },
  {
    name: 'Mina',
    age: '14',
    country: 'Philippines',
    need: 'Tutoring, internet access, and mentorship',
    story: 'Mina is excelling in her studies and hopes to be a teacher one day.',
    impact: 'Ongoing support gives her the confidence and resources to reach her goals.',
  },
  {
    name: 'Daniel',
    age: '11',
    country: 'Uganda',
    need: 'Books, transportation, and school fees',
    story: 'Daniel is eager to learn and is already helping his younger siblings with reading.',
    impact: 'Sponsor support keeps him on track for a brighter future and a stronger family.',
  },
];

function Children() {
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

export default Children;
