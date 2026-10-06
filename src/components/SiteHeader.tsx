import { useEffect, useId, useRef, useState } from 'react';
import { profile } from '../content/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import './SiteHeader.css';

const nav = [
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'trayectoria', label: 'Trayectoria' },
  { id: 'herramientas', label: 'Herramientas' },
  { id: 'contacto', label: 'Contacto' },
];

const navIds = nav.map((n) => n.id);

export default function SiteHeader() {
  const active = useActiveSection(navIds);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner wrap">
        <a className="site-header__name" href="#inicio" onClick={() => setOpen(false)}>
          {profile.shortName}
        </a>
        <button
          ref={buttonRef}
          className="site-header__toggle"
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
        <nav aria-label="Principal" className="site-header__nav" id={menuId} data-open={open || undefined}>
          <ul>
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="site-header__progress" aria-hidden="true" />
    </header>
  );
}
