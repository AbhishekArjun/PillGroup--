import { useState } from 'react';
import { saveInquiry } from '../lib/formService.js';

const interests = {
  home: ['Sponsor a child', 'Donate', 'Volunteer', 'Partnership'],
  churches: ['Church sponsorship', 'Prayer network', 'Mission trip', 'Ministry kit'],
  individuals: ['Monthly support', 'One-time gift', 'Group sponsorship', 'Legacy giving'],
  children: ['Sponsor a child', 'Monthly support', 'One-time gift', 'Learn more'],
};

function ContactForm({ collection, page, legend, fields }) {
  const [status, setStatus] = useState('');
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPending(true);
    setStatus('');
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await saveInquiry({
        name: formData.get('name') || '',
        email: formData.get('email') || '',
        interest: formData.get('interest') || '',
        message: formData.get('message') || '',
        page,
        collection,
      });
      setStatus('Thank you! Your message has been received.');
      form.reset();
    } catch (error) {
      setStatus('We could not submit this form yet. Please email foundation@pilligroup.com directly.');
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-slate-900">{legend}</h3>
        <p className="text-sm text-slate-600">Tell us how you’d like to help and we’ll share the best next step for sponsorship or giving.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="label-field">
          <span className="text-sm font-semibold text-slate-800">Name</span>
          <input name="name" required className="rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
        </label>
        <label className="label-field">
          <span className="text-sm font-semibold text-slate-800">Email</span>
          <input type="email" name="email" required className="rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
        </label>
        <label className="label-field sm:col-span-2">
          <span className="text-sm font-semibold text-slate-800">Interest</span>
          <select name="interest" className="rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">
            {interests[page].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="label-field sm:col-span-2">
          <span className="text-sm font-semibold text-slate-800">Message</span>
          <textarea name="message" rows="4" required placeholder="Share your preferred giving amount, sponsorship goal, or any questions you have." className="rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"></textarea>
        </label>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="form-status text-sm text-slate-600" aria-live="polite">{status}&nbsp;</p>
        <button type="submit" disabled={pending} className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70">
          {pending ? 'Submitting…' : 'Send My Interest'}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
