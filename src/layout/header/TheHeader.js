import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svgs/spearny-logo.svg';
import classes from './TheHeader.module.scss';

const TheHeader = () => {
  return (
    <header className={classes.theHeader}>
      <Link to="/">
        <div className={`${classes.logo} v-grid-centered`}>
          <Logo />
          <div className="v-grid-gap-small">
            <h1>Spearny.</h1>
          </div>
        </div>
      </Link>
      {/* <div className={classes.claim}>
        Keep track of your spent and earned money everywhere.
  </div> */}
    </header>
  );
};

export default TheHeader;
