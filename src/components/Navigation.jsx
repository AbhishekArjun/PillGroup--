import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard', authOnly: true },
  { href: '/children', label: 'Meet the Children' },
  { href: '/churches', label: 'Churches & Faith Communities' },
  { href: '/individuals', label: 'Individual Givers' },
];

function Navigation({ onOpenLogin, onOpenSignup, user, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a className="text-base font-semibold text-slate-900 sm:text-lg" href="/">
          Pilli Group Foundation
        </a>

        <button
          type="button"
          className="inline-flex rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
          onClick={() => setMobileMenuOpen((value) => !value)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="text-xl leading-none">☰</span>
        </button>

        <nav className="hidden items-center gap-4 text-sm text-slate-600 md:flex">
          {navItems.filter((item) => !item.authOnly || user).map((item) => (
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

      {mobileMenuOpen ? (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 shadow-sm md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.filter((item) => !item.authOnly || user).map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-2xl px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'bg-sky-50 text-primary' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            {user ? (
              <>
                <div className="px-3 py-2 text-sm font-semibold text-slate-900">{user.name}</div>
                <button
                  type="button"
                  onClick={() => {
                    onLogout();
                    closeMenu();
                  }}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => {
                    onOpenLogin();
                    closeMenu();
                  }}
                  className="rounded-full border border-slate-200 px-4 py-2 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onOpenSignup();
                    closeMenu();
                  }}
                  className="rounded-full bg-primary px-4 py-2 text-left text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navigation;
