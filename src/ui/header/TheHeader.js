import { ReactComponent as Logo } from '../../assets/svgs/spearny-logo.svg';
import classes from './TheHeader.module.css';

const TheHeader = () => {
  return (
    <header>
      <div className={classes.branding}>
        <div className={`${classes.logo} v-grid-gap-small`}>
          <Logo />
          <div className="v-grid-gap-small">
            <h1>Spearny.</h1>
          </div>
        </div>
        <div className={classes.claim}>
          Keep track of your spent and earned money everywhere.
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
