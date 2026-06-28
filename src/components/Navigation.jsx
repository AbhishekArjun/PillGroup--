import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/children', label: 'Meet the Children' },
  { href: '/churches', label: 'Churches & Faith Communities' },
  { href: '/individuals', label: 'Individual Givers' },
];

function Navigation({ onOpenLogin, onOpenSignup, user, onLogout }) {
  return (
    <header className="sticky top-0 z-20 bg-white/95 border-b border-slate-200 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a className="font-semibold text-slate-900" href="/">
          Pilli Group Foundation
        </a>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-slate-900'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          {user ? (
            <>
              <span className="text-sm font-semibold text-slate-900">{user.name}</span>
              <button
                type="button"
                onClick={onLogout}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={onOpenLogin}
                className="font-medium transition-colors hover:text-slate-900"
              >
                Login
              </button>
              <button
                type="button"
                onClick={onOpenSignup}
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                Sign Up
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
