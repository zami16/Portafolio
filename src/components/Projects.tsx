import { projects } from '../content/profile';
import { CaseFacts, CaseHeading } from './CaseParts';
import CrmCase from './CrmCase';
import './Projects.css';

const byId = (id: string) => projects.find((p) => p.id === id)!;

function SimpsCase() {
  const p = byId('simps');
  return (
    <article className="case case--simps" id={p.id} data-line="formacion" aria-labelledby={`${p.id}-t`}>
      <div className="case-simps__track" aria-hidden="true">
        <span />
      </div>
      <div className="case-simps__grid">
        <CaseHeading project={p} />
        <div>
          <p className="case__summary">{p.summary}</p>
          <dl className="case-facts case-facts--inline">
            <div>
              <dt>Institución</dt>
              <dd>Universidad EAFIT</dd>
            </div>
            <div>
              <dt>Modalidad</dt>
              <dd>Bootcamp en convenio con EA</dd>
            </div>
          </dl>
          <CaseFacts project={p} />
        </div>
      </div>
    </article>
  );
}

function SgWebCase() {
  const p = byId('sg-web');
  return (
    <article className="case case--sg" id={p.id} data-line="web" aria-labelledby={`${p.id}-t`}>
      <figure className="browser">
        <div className="browser__bar" aria-hidden="true">
          <span className="browser__url">{p.url ? new URL(p.url).host : 'S&G Immigration'}</span>
        </div>
        <div className="browser__view">
          {p.image ? (
            <img src={p.image.src} alt={p.image.alt} loading="lazy" width={1600} height={1000} />
          ) : (
            <div className="browser__placeholder" aria-hidden="true">
              <span>S&amp;G</span>
              <span>Immigration</span>
            </div>
          )}
        </div>
      </figure>
      <div className="case__text">
        <CaseHeading project={p} />
        <p className="case__summary">{p.summary}</p>
        <p className="case__note">
          Es la cara pública de la misma empresa para la que desarrollo el CRM. El sitio y el CRM cubren dos partes
          de un mismo proceso: atraer al cliente y darle seguimiento.
        </p>
        <CaseFacts project={p} />
      </div>
    </article>
  );
}

function ConnectArtCase() {
  const p = byId('connectart');
  return (
    <article className="case case--connectart" id={p.id} data-line="producto" aria-labelledby={`${p.id}-t`}>
      <div className="case__text">
        <CaseHeading project={p} />
        <p className="case__summary">{p.summary}</p>
        <CaseFacts project={p} />
      </div>
      <figure className="product-field">
        {p.image ? (
          <img src={p.image.src} alt={p.image.alt} loading="lazy" width={1600} height={1200} />
        ) : (
          <div className="product-field__diagram" aria-hidden="true">
            <span className="product-field__line" data-line="web" />
            <span className="product-field__line" data-line="producto" />
            <span className="product-field__station" />
            <span className="product-field__mark">ConnectArt</span>
          </div>
        )}
      </figure>
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
