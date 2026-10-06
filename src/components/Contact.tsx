import { useEffect, useState } from 'react';
import { contact } from '../content/profile';
import './Contact.css';

function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'error'>('idle');

  useEffect(() => {
    if (state === 'idle') return;
    const t = window.setTimeout(() => setState('idle'), 2200);
    return () => window.clearTimeout(t);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState('copied');
    } catch {
      setState('error');
    }
  };

  const label = state === 'copied' ? 'Correo copiado' : state === 'error' ? 'No se pudo copiar' : 'Copiar correo';

  return (
    <button type="button" className="button button--ghost contact__copy" onClick={copy} data-state={state}>
      <span className="contact__copy-label" key={state}>
        {label}
      </span>
      <span className="visually-hidden" role="status">
        {state === 'copied' ? 'Correo copiado al portapapeles' : state === 'error' ? 'No se pudo copiar el correo. Selecciónalo y cópialo manualmente.' : ''}
      </span>
    </button>
  );
}

export default function Contact() {
  const others = [
    { label: 'GitHub', href: contact.github },
    { label: 'LinkedIn', href: contact.linkedin },
    { label: 'Hoja de vida (PDF)', href: contact.cv },
  ].filter((l): l is { label: string; href: string } => Boolean(l.href));

  return (
    <section className="contact section" id="contacto" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 className="contact__title" id="contact-title">
          ¿Tienes un proyecto o una vacante?
        </h2>
        <p className="lede contact__lede">Escríbeme y cuéntame qué necesitas construir.</p>

        {contact.email && (
          <div className="contact__email">
            <a href={`mailto:${contact.email}`} className="contact__address">
              {contact.email}
            </a>
            <CopyEmail email={contact.email} />
          </div>
        )}

        {others.length > 0 && (
          <ul className="contact__links">
            {others.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
