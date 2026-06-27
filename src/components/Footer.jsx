function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-700">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">Pilli Group Foundation</h3>
          <p className="max-w-xl text-sm leading-6">
            A registered nonprofit organization focused on education, community development, and sustainable empowerment.
          </p>
        </div>
        <div className="text-sm leading-6">
          <p className="font-semibold text-slate-900">Contact</p>
          <p>Email: foundation@pilligroup.com</p>
          <p>Phone: +1 (800) 555-PILLI</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
