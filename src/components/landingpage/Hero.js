import { useNavigate } from 'react-router-dom';
import classes from './Hero.scss';
import BaseButton from '../base/BaseButton';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__brand v-grid-centered">
          <div className="h-grid">
            <span>Keep track of your</span>
            <div className="hero__brand-naming v-grid">
              <div>
                <span className="hero__brand-naming--highlight">Sp</span>ent &
              </div>
              <div>
                <span className="hero__brand-naming--highlight">earn</span>ed
              </div>
              <div>
                mon<span className="hero__brand-naming--highlight">ey.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-grid-gap-big">
          <div className="h-grid">
            <h1>
              Geld kommt und geht. Spearney hilft dir dabei den Überblick zu
              behalten. Für was hast du wann dein Geld ausgegeben oder erhalten?
            </h1>
            <p>
              Behalte den Überblick über Dein ausgegebenes und verdientes Geld.
              Geräteunabhängig von überall.
            </p>
          </div>
          <div className="v-grid">
            <BaseButton
              priority="primary"
              onClick={() => navigate('/authentication')}
            >
              Zum Login
            </BaseButton>
            <BaseButton
              mode="text"
              priority="primary"
              onClick={() => navigate('/authentication')}
            >
              Jetzt registrieren
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
