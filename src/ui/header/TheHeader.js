import { ReactComponent as Logo } from './spearny-logo.svg';
import classes from './TheHeader.module.css';

const TheHeader = () => {
  return (
    <header>
      <span className={classes.branding}>
        <span className={classes.logo}>
          <Logo />
          <span>
            <b>
              <span>Spearny.</span>
            </b>
            <span className={classes.claim}>
              Keep track of your spent and earned money everywhere.
            </span>
          </span>
        </span>
      </span>
    </header>
  );
};

export default TheHeader;
