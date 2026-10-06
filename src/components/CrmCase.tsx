import { useRef, useState, type KeyboardEvent } from 'react';
import { projects } from '../content/profile';
import {
  crmCounts,
  crmSnapshotDate,
  fieldGroups,
  fieldTypeLabel,
  forms,
  pipeline,
  workflowGroups,
} from '../content/crm';
import { useInView } from '../hooks/useInView';
import { CaseFacts, CaseHeading } from './CaseParts';
import './CrmCase.css';

const project = projects.find((p) => p.id === 'crm')!;

function Pipeline() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const total = pipeline.stages.length;

  return (
    <div className="crm-block">
      <div className="crm-block__head">
        <h4 className="crm-block__title">Cómo avanza un contacto</h4>
        <p className="crm-block__desc">
          Pipeline <strong>{pipeline.name}</strong>: {crmCounts.stages} etapas, desde que entra el contacto hasta que
          se cierra como cliente o como perdido.
        </p>
      </div>

      <div className="pipeline" ref={ref} data-run={inView || undefined} style={{ ['--n' as string]: total }}>
        <div className="pipeline__entry">
          <p className="pipeline__label">Entra por</p>
          <ul>
            {forms.map((f) => (
              <li key={f.name}>
                <span className="pipeline__name">{f.name}</span>
                <span className="pipeline__gloss">{f.gloss}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pipeline__route">
          <div className="pipeline__track" aria-hidden="true">
            <span className="pipeline__token" />
          </div>
          <ol className="pipeline__stages">
            {pipeline.stages.map((s, i) => (
              <li key={s.name} style={{ ['--i' as string]: i }}>
                <span className="pipeline__dot" aria-hidden="true" />
                <span className="pipeline__name">{s.name}</span>
                <span className="pipeline__gloss">{s.gloss}</span>
              </li>
            ))}
          </ol>
        </div>

        <ul className="pipeline__outcomes" aria-label="Cierre">
          {pipeline.outcomes.map((o) => (
            <li key={o.name} data-kind={o.kind}>
              <span className="pipeline__dot" aria-hidden="true" />
              <span className="pipeline__name">{o.name}</span>
              <span className="pipeline__gloss">{o.gloss}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Workflows() {
  return (
    <div className="crm-block">
      <div className="crm-block__head">
        <h4 className="crm-block__title">Qué se automatiza</h4>
        <p className="crm-block__desc">
          {crmCounts.workflows} workflows publicados, agrupados por lo que los dispara. Los borradores no se cuentan.
        </p>
      </div>
      <div className="timetable">
        {workflowGroups.map((g) => (
          <section key={g.name} className="timetable__group" aria-label={g.name}>
            <h5 className="timetable__title">{g.name}</h5>
            <ul>
              {g.workflows.map((w) => (
                <li key={w.name}>
                  <span className="timetable__name">{w.name}</span>
                  <span className="timetable__gloss">{w.gloss}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

function Fields() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const group = fieldGroups[active];

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = fieldGroups.length - 1;
    const next =
      e.key === 'ArrowRight' ? (active === last ? 0 : active + 1)
      : e.key === 'ArrowLeft' ? (active === 0 ? last : active - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="crm-block">
      <div className="crm-block__head">
        <h4 className="crm-block__title">Qué guarda cada expediente</h4>
        <p className="crm-block__desc">
          {crmCounts.fields} campos personalizados en {fieldGroups.length} grupos: expediente, perfil migratorio,
          documentos, servicio y pagos, y seguimiento.
        </p>
      </div>

      <div className="fields">
        <div className="fields__tabs" role="tablist" aria-label="Grupos de campos" onKeyDown={onKeyDown}>
          {fieldGroups.map((g, i) => (
            <button
              key={g.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${g.id}`}
              aria-selected={i === active}
              aria-controls={`panel-${g.id}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
            >
              {g.name}
              <span className="fields__count">{g.fields.length}</span>
            </button>
          ))}
        </div>

        <div
          className="fields__panel"
          role="tabpanel"
          id={`panel-${group.id}`}
          aria-labelledby={`tab-${group.id}`}
          tabIndex={0}
        >
          <ul className="fields__list">
            {group.fields.map((f) => (
              <li key={f.key}>
                <div className="fields__row">
                  <span className="fields__name">{f.name}</span>
                  <span className="fields__type">{fieldTypeLabel[f.type]}</span>
                </div>
                <code className="fields__key mono">{f.key}</code>
                {f.options && <p className="fields__options">{f.options.join(', ')}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function CrmCase() {
  return (
    <article className="crm" id="crm" data-line="automatizacion" aria-labelledby="crm-t">
      <div className="wrap">
        <header className="crm__head">
          <div>
            <CaseHeading project={project} />
            <p className="crm__summary">{project.summary}</p>
          </div>
          <div className="crm__aside">
            <CaseFacts project={project} />
          </div>
        </header>

        <Pipeline />
        <Workflows />
        <Fields />

        <p className="crm__source">
          Estructura tomada del CRM en modo lectura el {crmSnapshotDate}. Los nombres aparecen tal como están en
          GoHighLevel y no se muestra ningún dato de clientes.
        </p>
      </div>
    </article>
  );
}
