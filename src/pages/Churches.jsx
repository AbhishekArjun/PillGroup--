import ContactForm from '../components/ContactForm.jsx';
import PageHeader from '../components/PageHeader.jsx';

function Churches() {
  return (
    <div className="space-y-16 pb-16 pt-8 sm:pb-24 sm:pt-10">
      <section className="overflow-hidden rounded-[2rem] bg-slate-50 px-6 py-12 shadow-soft sm:px-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.55fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Faith-led impact</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Sow Seeds of Faith. Reap Harvests of Hope.</h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Answer the call to care for the least of these through child sponsorship that transforms lives from kindergarten through graduation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#campaigns" className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">
                Start a Church Campaign
              </a>
              <a href="#ministry-kit" className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400">
                Request a Free Ministry Kit
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-slate-900">“Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress.”</h3>
            <p className="mt-4 text-slate-600">— James 1:27</p>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <PageHeader eyebrow="Called to serve" title="We handle the logistics, while your church provides the prayer, love, and care.">
            Pilli Group Foundation partners with churches, ministries, and faith communities to fulfill the biblical mandate of caring for children in need. Our team coordinates the delivery of education support and reporting so your congregation can stay focused on service.
          </PageHeader>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <PageHeader eyebrow="Church partnership program" title="Programs designed for congregations of every size." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Congregation sponsorship', description: 'Your church sponsors 5–50 children as a community.' },
              { title: 'Mission trip integration', description: 'Visit your sponsored children in the field and build enduring relationships.' },
              { title: 'Youth group engagement', description: 'Teens write letters, pray, and learn global stewardship.' },
              { title: 'Prayer warrior network', description: 'Commit to praying for specific children and schools.' },
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
        <div className="mx-auto grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <PageHeader eyebrow="What your church receives" title="The support your congregation can count on." />
            <ul className="space-y-3 text-slate-600">
              <li>Prayer cards with photos and bios of sponsored children</li>
              <li>Quarterly video updates from our field teams</li>
              <li>Free sermon resources and stewardship graphics</li>
              <li>Full tax documentation for charitable giving records</li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-slate-900">Start a campaign</h3>
            <ul className="mt-6 space-y-3 text-slate-600" id="campaigns">
              <li>40 Days of Compassion</li>
              <li>Christmas Child Drive</li>
              <li>Vacation Bible School Mission</li>
            </ul>
            <a href="#contact-form" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">
              Order a Free Ministry Kit
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <PageHeader eyebrow="Faith in action" title="Churches that serve grow deeper in compassion and stewardship." />
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              { quote: '“Our youth group sponsors 12 children in India. The letters we receive have transformed how our teenagers understand gratitude and global responsibility.”', author: 'Pastor David R., Community Baptist Church' },
              { quote: '“We’ve seen members who never gave beyond the tithe become passionate monthly sponsors. It has deepened our congregation’s faith.”', author: 'Reverend Sarah T., Grace Fellowship' },
            ].map((story) => (
              <blockquote key={story.author} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 text-slate-700 shadow-soft">
                <p className="text-lg leading-8">{story.quote}</p>
                <footer className="mt-6 text-sm font-semibold text-slate-900">— {story.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="px-6 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <PageHeader eyebrow="Partner with us" title="Bring your ministry into a life-changing education journey." />
              <p className="max-w-2xl text-slate-600">
                Whether you are launching a one-time campaign or building a long-term sponsorship program, we will support your church every step of the way.
              </p>
            </div>
            <ContactForm collection="church-partnerships" page="churches" legend="Request a church visit" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Churches;
