import { lines, stack } from '../content/profile';
import './Stack.css';

export default function Stack() {
  return (
    <section className="stack section" id="herramientas" aria-labelledby="stack-title">
      <div className="wrap">
        <h2 className="section-title" id="stack-title">
          Herramientas
        </h2>
        <div className="stack__grid">
          {stack.map((group) => (
            <section key={group.name} className="stack__group" data-line={group.line} aria-label={group.name}>
              <h3 className="stack__name">
                {group.line && (
                  <span className="line-badge" aria-hidden="true">
                    {lines[group.line].badge}
                  </span>
                )}
                {group.name}
              </h3>
              <ul className="stack__items">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
