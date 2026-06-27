function PageHeader({ eyebrow, title, children }) {
  return (
    <div className="space-y-4 pb-8 text-slate-900">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {children ? <p className="max-w-3xl text-slate-600">{children}</p> : null}
    </div>
  );
}

export default PageHeader;
