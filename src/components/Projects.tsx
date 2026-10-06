import { projects } from '../content/profile';
import { CaseFacts, CaseHeading, CaseProcess, CaseWork } from './CaseParts';
import CrmCase from './CrmCase';
import './Projects.css';

const byId = (id: string) => projects.find((p) => p.id === id)!;

const WORK_LABEL: Record<string, string> = {
  simps: 'Ver qué hace y mi parte',
  'sg-web': 'Ver funcionalidades y resultados',
  connectart: 'Ver funcionalidades y resultados',
};

function SimpsCase() {
  const p = byId('simps');
  return (
    <article className="case case--simps" id={p.id} data-line="formacion" aria-labelledby={`${p.id}-t`}>
      <div className="case-simps__track" aria-hidden="true">
        <span />
      </div>
      <div className="case-simps__grid">
        <div>
          <CaseHeading project={p} />
          <p className="case__summary">{p.summary}</p>
          <CaseFacts project={p} />
        </div>
        <CaseWork project={p} label={WORK_LABEL[p.id]} />
      </div>
    </article>
  );
}

function SgWebCase() {
  const p = byId('sg-web');
  return (
    <article className="case case--sg" id={p.id} data-line="web" aria-labelledby={`${p.id}-t`}>
      <div className="case__split case__split--media-first">
        <figure className="browser">
          <div className="browser__bar" aria-hidden="true">
            <span className="browser__url">{p.url ? new URL(p.url).host : 'S&G Group'}</span>
          </div>
          <div className="browser__view">
            {p.image ? (
              <img src={p.image.src} alt={p.image.alt} loading="lazy" width={1600} height={1000} />
            ) : (
              <div className="browser__placeholder" aria-hidden="true">
                <span>S&amp;G</span>
                <span>Group LLC</span>
              </div>
            )}
          </div>
        </figure>
        <div className="case__text">
          <CaseHeading project={p} />
          <p className="case__summary">{p.summary}</p>
          <p className="case__note">
            Es la misma firma que hoy trabaja con HEBRIX como su CRM: el sitio atrae al cliente y el CRM le da
            seguimiento.
          </p>
          <CaseFacts project={p} />
        </div>
      </div>
      <CaseWork project={p} label={WORK_LABEL[p.id]} />
    </article>
  );
}

function ConnectArtCase() {
  const p = byId('connectart');
  return (
    <article className="case case--connectart" id={p.id} data-line="producto" aria-labelledby={`${p.id}-t`}>
      <div className="case__split">
        <div className="case__text">
          <CaseHeading project={p} />
          <p className="case__summary">{p.summary}</p>
          <CaseFacts project={p} />
        </div>
        <figure className="product-field">
          {p.image ? (
            <img src={p.image.src} alt={p.image.alt} loading="lazy" width={1600} height={1200} />
          ) : (
            <>
              <figcaption className="product-field__caption">Cómo evolucionó el sitio</figcaption>
              <CaseProcess project={p} />
            </>
          )}
        </figure>
      </div>
      <CaseWork project={p} label={WORK_LABEL[p.id]} />
    </article>
  );
}

export default function Projects() {
  return (
    <section className="projects section" id="proyectos" aria-labelledby="projects-title">
      <div className="wrap">
        <header className="projects__head">
          <h2 className="section-title" id="projects-title">
            Proyectos
          </h2>
          <p className="lede">
            Ordenados de la formación al sistema completo. Cada uno lleva el color de su línea en el mapa.
          </p>
        </header>
        <SimpsCase />
        <SgWebCase />
        <ConnectArtCase />
      </div>
      <CrmCase />
    </section>
  );
}
