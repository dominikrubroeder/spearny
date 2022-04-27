import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BaseButton from '../components/base/BaseButton';
import './UserProfile.scss';

const UserProfile = () => {
  return (
    <div className="container--compressed">
      <div className="h-grid-gap-huge">
        <section className="h-grid hv-centered">
          <FontAwesomeIcon
            icon="fa-solid fa-circle-user"
            style={{ fontSize: '10rem', margin: '0 auto' }}
          />
          <BaseButton mode="text">
            <FontAwesomeIcon icon="fa-solid fa-circle-plus" /> Profilbild
            hinzufügen
          </BaseButton>
        </section>
        <section className="h-grid-gap-huge">
          <form className="user-profile__form h-grid-gap-huge">
            <section className="h-grid">
              <header className="section__form-header">
                <div className="section__form-header-title">
                  Persönliche Angaben
                </div>
              </header>
              <div className="h-grid">
                <input type="text" placeholder="Vorname"></input>
                <input type="text" placeholder="Nachname"></input>
                <input type="email" placeholder="E-Mail"></input>
                <input type="password" placeholder="Password"></input>
                <BaseButton mode="text">Passwort ändern</BaseButton>
              </div>
            </section>
            <section className="h-grid">
              <header className="section__form-header">
                <div className="section__form-header-title">
                  Konto Einstellungen
                </div>
              </header>
              <div className="h-grid">
                <div className="h-grid-gap-small">
                  <input type="text" placeholder="IBAN"></input>
                  <BaseButton mode="text">Mehr erfahren</BaseButton>
                </div>
                <div className="h-grid-gap-small">
                  <input type="text" placeholder="Monatliches Budget"></input>
                  <BaseButton mode="text">Mehr erfahren</BaseButton>
                </div>
              </div>
            </section>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
