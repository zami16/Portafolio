import { useId, useState, type ReactNode } from 'react';
import './MobileCollapse.css';

/**
 * En celular esconde detalles largos detrás de un botón; en tablet y escritorio
 * el contenido siempre está visible y el botón no aparece. El contenido vive
 * en el HTML desde el inicio, así que buscadores y lectores de pantalla lo leen.
 */
export default function MobileCollapse({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="mcollapse" data-open={open || undefined}>
      <button
        type="button"
        className="mcollapse__toggle"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{open ? 'Ocultar detalles' : label}</span>
        <span className="mcollapse__icon" aria-hidden="true" />
      </button>
      <div className="mcollapse__body" id={id}>
        {children}
      </div>
    </div>
  );
}
