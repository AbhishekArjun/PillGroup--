import ContactForm from '../components/ContactForm.jsx';
import PageHeader from '../components/PageHeader.jsx';

function Individuals() {
  return (
    <div className="space-y-16 pb-16 pt-8 sm:pb-24 sm:pt-10">
      <section className="overflow-hidden rounded-[2rem] bg-slate-50 px-6 py-12 shadow-soft sm:px-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.55fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">One child. One sponsor. One extraordinary story.</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">For less than the cost of a weekly coffee, you can fund a child’s full K–12 education.</h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Your support creates a pathway to school, health, mentorship, and hope for a child and their entire family.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#sponsor" className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">
                Start My Sponsorship
              </a>
              <a href="#connection" className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400">
                See Where My Money Goes
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-slate-900">Your sponsorship journey</h3>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>Meet a verified child in need</li>
              <li>Receive personal updates and letters</li>
              <li>Celebrate graduation and future milestones</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <PageHeader eyebrow="Your sponsorship journey" title="The child you meet is real, verified, and deserving of support.">
            Every child on our platform is verified by local staff and is genuinely in need of educational support. Browse by country, age, and need level to find a child whose story resonates with you.
          </PageHeader>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              { name: 'Sofia', location: 'Nepal', need: 'School fees and uniforms', note: 'Sofia is thriving at her community school and dreams of becoming a teacher.' },
              { name: 'Daniel', location: 'Uganda', need: 'Books, tutoring, and meals', note: 'Daniel loves reading and is now leading his class in literacy and math.' },
              { name: 'Leila', location: 'Jordan', need: 'Digital access and mentorship', note: 'Leila has a passion for science and wants to build a bright future for her family.' },
            ].map((child) => (
              <article key={child.name} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-primary">{child.name[0]}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{child.name}</h3>
                    <p className="text-sm text-slate-500">{child.location}</p>
                  </div>
                </div>
                <p className="mt-4 text-slate-600">{child.note}</p>
                <p className="mt-3 text-sm font-medium text-primary">Support need: {child.need}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <PageHeader eyebrow="Ways to give" title="Choose the giving option that fits your heart and your family." />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              { title: 'Monthly sponsorship', price: '$50/month', detail: 'Provides consistent support for school fees, meals, and supplies.' },
              { title: 'One-time gift', price: 'Any amount', detail: 'Give immediately toward urgent needs, school repairs, or medical support.' },
              { title: 'Group or church giving', price: 'Join together', detail: 'Create a shared sponsorship effort with your community or congregation.' },
            ].map((option) => (
              <article key={option.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Sponsor option</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{option.title}</h3>
                <p className="mt-3 text-2xl font-semibold text-slate-900">{option.price}</p>
                <p className="mt-3 text-slate-600">{option.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              { title: 'Monthly sponsorship', description: 'Become a long-term partner in a child’s education and growth with steady monthly support.' },
              { title: 'One-time gift', description: 'Make an immediate difference with a single contribution toward school supplies and urgent needs.' },
              { title: 'Church or group giving', description: 'Mobilize your congregation or community to sponsor children together and multiply impact.' },
            ].map((option) => (
              <article key={option.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-soft">
                <h3 className="text-xl font-semibold text-slate-900">{option.title}</h3>
                <p className="mt-3 text-slate-600">{option.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: '$1.67/day', description: 'Full school tuition and fees.' },
              { title: '$50/month', description: 'Books, supplies, and uniforms.' },
              { title: '$600/year', description: 'Meals, healthcare, and mentorship.' },
              { title: '$7,200 total', description: 'A complete education and future for a child over K–12.' },
            ].map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Choose your impact</p>
              <h3 className="mt-3 text-3xl font-semibold text-slate-900">Select the sponsorship path that fits your giving goals.</h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">Whether you want to support one child every month or make a one-time gift, your generosity becomes a direct source of stability and opportunity.</p>
            </div>
            <div className="rounded-[1.5rem] bg-slate-50 p-6">
              <ul className="space-y-3 text-slate-700">
                <li>• Sponsor one child for ongoing support</li>
                <li>• Give to urgent education and health needs</li>
                <li>• Partner with your church or community group</li>
              </ul>
              <a href="#connection" className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">
                Start sponsoring now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="connection" className="px-6 sm:px-10">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <PageHeader eyebrow="Your personal connection" title="Your support keeps families connected through every milestone." />
            <ul className="space-y-3 text-slate-600">
              <li>Month 1: Welcome packet with photo, story, and letter</li>
              <li>Quarterly: Updated photo, report card, and handwritten letter</li>
              <li>Annually: Video message from your child</li>
              <li>Milestones: Graduation certificate and next-step planning</li>
            </ul>
          </div>
          <ContactForm collection="individual-givers" page="individuals" legend="Begin your sponsorship" />
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <PageHeader eyebrow="Real sponsors, real stories" title="People from around the world are building futures together." />
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              { quote: '“I thought I was helping a child. Turns out, she was teaching me about resilience. We’re six years in, and she’s applying to medical school.”', author: 'Marcus, Austin, TX' },
              { quote: '“My kids and I sponsor a girl in India together. It has become our family’s most meaningful tradition.”', author: 'Jennifer, Toronto' },
            ].map((story) => (
              <blockquote key={story.author} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 text-slate-700 shadow-soft">
                <p className="text-lg leading-8">{story.quote}</p>
                <footer className="mt-6 text-sm font-semibold text-slate-900">— {story.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Individuals;
