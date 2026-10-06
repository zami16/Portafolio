import { profile } from '../content/profile';
import RouteMap from './RouteMap';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero wrap" id="inicio" aria-labelledby="hero-title">
      <h1 className="hero__name" id="hero-title">
        {profile.name}
      </h1>
      <div className="hero__body">
        <div className="hero__intro">
          <p className="hero__statement">{profile.statement}</p>
          <p className="hero__meta">
            {profile.role} en {profile.city}
          </p>
          <div className="hero__actions">
            <a className="button button--solid" href="#proyectos">
              Ver proyectos
            </a>
            <a className="button button--ghost" href="#contacto">
              Contacto
            </a>
          </div>
        </div>
        <div className="hero__map">
          <RouteMap />
        </div>
      </div>
    </section>
  );
}
