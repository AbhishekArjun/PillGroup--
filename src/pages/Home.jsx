import ContactForm from '../components/ContactForm.jsx';
import PageHeader from '../components/PageHeader.jsx';

const stats = [
  { value: '12,500+', label: 'Children sponsored' },
  { value: '18', label: 'Countries active' },
  { value: '4,200+', label: 'K–12 graduates' },
  { value: '$45M+', label: 'Funds raised' },
];

function Home() {
  return (
    <div className="space-y-16 pb-16 pt-8 sm:pb-24 sm:pt-10">
      <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 px-6 py-12 shadow-soft sm:px-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.55fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Changing lives, one child at a time</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Education, hope, and lasting opportunity for children worldwide.</h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Through education sponsorships and community-driven programs, we create pathways out of poverty and into possibility.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/individuals" className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">
                Sponsor a Child Today
              </a>
              <a href="#impact" className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400">
                Learn Our Impact
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-slate-900">Why families trust us</h3>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>100% of sponsorship funds go directly to the child’s education</li>
              <li>Independent annual audits and real-time tracking</li>
              <li>Quarterly updates, photos, and school progress reports</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <PageHeader eyebrow="About us" title="We believe every child deserves access to quality education, no matter their circumstances.">
            Pilli Group Foundation is the philanthropic arm of Pilli Group, dedicated to creating lasting social impact through education, community development, and sustainable empowerment programs.
          </PageHeader>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Education Sponsorship', description: 'Full academic support for children in underserved communities from kindergarten through graduation.' },
              { title: 'Community Development', description: 'Infrastructure, resources, and training for sustainable local growth.' },
              { title: 'Youth Empowerment', description: 'Skills building, mentorship, and leadership programming that builds confidence and purpose.' },
              { title: 'Sustainable Change', description: 'Long-term solutions designed to outlast short-term aid and create lasting dignity.' },
            ].map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="bg-slate-100 px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <PageHeader eyebrow="Our flagship program" title="Sponsor a Child">
            A monthly gift creates a stable environment for a child to learn, grow, and secure a future beyond the classroom.
          </PageHeader>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-slate-900">What your sponsorship provides</h3>
              <ul className="mt-6 space-y-3 text-slate-600">
                <li>School tuition and fees</li>
                <li>Books, supplies, and uniforms</li>
                <li>Meals, healthcare, and transportation</li>
                <li>Digital access and mentorship</li>
                <li>Parental support workshops and resources</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-slate-900">How it works</h3>
              <ol className="mt-6 space-y-3 text-slate-600">
                <li>Choose a child waiting for sponsorship.</li>
                <li>Commit to $50/month or $600/year.</li>
                <li>Receive quarterly updates, photos, and progress reports.</li>
                <li>Celebrate milestones together.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 text-center shadow-soft">
                <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                <p className="mt-3 text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <PageHeader eyebrow="Success stories" title="Real transformation, powered by compassion." />
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              { quote: '“Before Pilli Foundation, I walked three hours to school. Now I have a bicycle, books, and a sponsor who believes in me.”', author: 'Amina, 14, Kenya' },
              { quote: '“My daughter is the first in our family to finish high school. Pilli Foundation changed our family’s future.”', author: 'Mrs. Santos, Philippines' },
            ].map((story) => (
              <blockquote key={story.author} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 text-slate-700 shadow-soft">
                <p className="text-lg leading-8">{story.quote}</p>
                <footer className="mt-6 text-sm font-semibold text-slate-900">— {story.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10">
        <div className="mx-auto grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Transparency & accountability</p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">We invest in trust as much as we invest in education.</h2>
            <ul className="space-y-3 text-slate-600">
              <li>100% model: sponsorship funds go directly to children’s education</li>
              <li>Annual audits and public financial reporting</li>
              <li>Real-time tracking through our online portal</li>
              <li>Aligned with the UN Sustainable Development Goal 4</li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-slate-900">Get involved</h3>
            <ContactForm collection="general-inquiries" page="home" legend="Send your interest" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
