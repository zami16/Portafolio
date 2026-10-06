import { journey, profile } from '../content/profile';
import './Journey.css';

export default function Journey() {
  const showYears = journey.every((stop) => stop.year);
  return (
    <section className="journey section" id="trayectoria" aria-labelledby="journey-title">
      <div className="wrap journey__grid">
        <header className="journey__head">
          <h2 className="section-title" id="journey-title">
            Trayectoria
          </h2>
          <p className="lede">
            De la universidad a un sistema real. Cada estación sumó una disciplina nueva.
          </p>
        </header>

        <ol className="journey__list">
          {journey.map((stop) => (
            <li key={stop.id} data-line={stop.line}>
              <span className="journey__dot" aria-hidden="true" />
              <div>
                <p className="journey__title">
                  <a href={stop.href}>{stop.title}</a>
                </p>
                <p className="journey__place">
                  {stop.place}
                  {showYears && <span className="journey__year">{stop.year}</span>}
                </p>
              </div>
            </li>
          ))}
          <li className="journey__next">
            <span className="journey__dot" aria-hidden="true" />
            <div>
              <p className="journey__title">Lo que sigue</p>
              <p className="journey__place">{profile.seeking}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
