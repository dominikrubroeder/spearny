import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svgs/spearny-logo.svg';
import classes from './TheHeader.module.css';

const TheHeader = () => {
  return (
    <header className={classes.theHeader}>
      <div className={classes.branding}>
        <Link to="/dashboard">
          <div className={`${classes.logo} v-grid-gap-small`}>
            <Logo />
            <div className="v-grid-gap-small">
              <h1>Spearny.</h1>
            </div>
          </div>
        </Link>
        <div className={classes.claim}>
          Keep track of your spent and earned money everywhere.
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
