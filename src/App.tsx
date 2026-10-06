import { profile } from './content/profile';
import SiteHeader from './components/SiteHeader';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Stack from './components/Stack';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Stack />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="wrap site-footer__inner">
          <p>
            {profile.name}, {profile.city}
          </p>
          <a href="#inicio">Volver arriba</a>
        </div>
      </footer>
    </>
  );
}
