import { profile } from '../content/profile';
import './About.css';

export default function About() {
  const facts = [
    { term: 'Formación', value: `${profile.degree}, ${profile.university}` },
    { term: 'Edad', value: `${profile.age} años` },
    { term: 'Base', value: profile.city },
    { term: 'Busco', value: profile.seeking },
  ];

  return (
    <section className="about section" id="sobre-mi" aria-labelledby="about-title" data-line="formacion">
      <div className="wrap about__grid">
        <h2 className="about__title" id="about-title">
          Empecé construyendo páginas. Hoy construyo el sistema completo que hay detrás de ellas.
        </h2>
        <div className="about__body">
          <p>
            Soy {profile.degree.toLowerCase()} de la {profile.university}. He trabajado en proyectos reales y
            académicos de desarrollo web, automatización, CRM y software. Hoy construyo HEBRIX, una plataforma CRM
            de marca propia para negocios en Estados Unidos, que ya tiene su primer cliente en producción.
          </p>
          <p>
            Me interesa el software que toca un proceso de verdad: cómo llega un cliente, quién le hace seguimiento,
            qué información se necesita y en qué momento.
          </p>
          <dl className="about__facts">
            {facts.map((f) => (
              <div key={f.term}>
                <dt>{f.term}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
