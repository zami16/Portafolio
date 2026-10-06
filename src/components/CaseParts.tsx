import { lines, type Project } from '../content/profile';

/**
 * Título del caso con sus badges de línea delante, como el nombre de una estación
 * en la señalética de transporte. La línea se nombra también para lectores de pantalla.
 */
export function CaseHeading({ project }: { project: Project }) {
  const lineNames = project.lines.map((id) => lines[id].name).join(' y ');
  return (
    <h3 className="case-heading" id={`${project.id}-t`}>
      <span className="case-heading__badges" aria-hidden="true">
        {project.lines.map((id) => (
          <span key={id} className="line-badge" data-line={id}>
            {lines[id].badge}
          </span>
        ))}
      </span>
      <span className="case-heading__title">{project.name}</span>
      <span className="visually-hidden">. Línea {lineNames}</span>
    </h3>
  );
}

/** Solo muestra lo que está confirmado en content/profile.ts. */
export function CaseFacts({ project }: { project: Project }) {
  const rows = [
    { term: 'Rol', value: project.role },
    { term: 'Equipo', value: project.team },
    { term: 'Estado', value: project.status },
    { term: 'Periodo', value: project.period },
    { term: 'Problema', value: project.problem },
    { term: 'Solución', value: project.solution },
    { term: 'Tecnologías', value: project.stack.length ? project.stack.join(', ') : null },
  ].filter((r) => r.value);

  return (
    <>
      {rows.length > 0 && (
        <dl className="case-facts">
          {rows.map((r) => (
            <div key={r.term}>
              <dt>{r.term}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
      )}
      <CaseLinks project={project} />
    </>
  );
}

/** Funcionalidades del producto y, aparte, lo que hizo Zahira. */
export function CaseWork({ project }: { project: Project }) {
  if (!project.features.length && !project.contributions.length) return null;
  return (
    <div className="case-work">
      {project.features.length > 0 && (
        <div className="case-work__group">
          <h4 className="case-work__title">Qué hace</h4>
          <ul className="case-features">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      )}
      {project.contributions.map((c) => (
        <div className="case-work__group" key={c.area}>
          <h4 className="case-work__title">Mi parte en el {c.area.toLowerCase()}</h4>
          <ul className="case-features">
            {c.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function CaseLinks({ project }: { project: Project }) {
  if (!project.url && !project.repos.length) return null;
  return (
    <p className="case-links">
      {project.url && (
        <a className="button button--solid" href={project.url} target="_blank" rel="noreferrer">
          {project.urlLabel ?? 'Ver sitio'}
        </a>
      )}
      {project.repos.map((r) => (
        <a key={r.href} className="button button--ghost" href={r.href} target="_blank" rel="noreferrer">
          {r.label}
        </a>
      ))}
    </p>
  );
}
