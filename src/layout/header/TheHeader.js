import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svgs/spearny-logo.svg';
import Sidebar from '../sidebar/Sidebar';
import './TheHeader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TheHeader = () => {
  return (
    <header className="header-main v-grid-space-between">
      <Sidebar />
      <div>.</div>
      <Link to="/">
        <div className="logo v-grid-centered">
          <Logo />
          <div className="v-grid-gap-small">
            <h1>Spearny.</h1>
          </div>
        </div>
      </Link>
      <Link to="/user-profile">
        <FontAwesomeIcon icon="fa-solid fa-circle-user" />
      </Link>
    </header>
  );
};

export default TheHeader;
