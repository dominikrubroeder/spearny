import { ReactComponent as Logo } from './spearny-logo.svg';
import styles from './TheHeader.module.css';

const TheHeader = () => {
  return (
    <header>
      <span className={styles.branding}>
        <span className={styles.logo}>
          <Logo />
          <span>
            <b>
              <span>Spearny.</span>
            </b>
            <span className={styles.claim}>
              Keep track of your spent and earned money everywhere.
            </span>
          </span>
        </span>
      </span>
    </header>
  );
};

export default TheHeader;
