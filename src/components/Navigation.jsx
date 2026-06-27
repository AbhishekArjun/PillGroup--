import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/churches', label: 'Churches & Faith Communities' },
  { href: '/individuals', label: 'Individual Givers' },
  { href: '/login', label: 'Login' },
  { href: '/signup', label: 'Sign Up' },
];

function Navigation() {
  return (
    <header className="sticky top-0 z-20 bg-white/95 border-b border-slate-200 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a className="font-semibold text-slate-900" href="/">
          Pilli Group Foundation
        </a>
        <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
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
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
