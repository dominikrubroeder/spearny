import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svgs/spearny-logo.svg';
import Sidebar from '../sidebar/Sidebar';
import './TheHeader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeColorSwitch from '../../components/ThemeColorSwitch';
import ScrollProgress from '../../components/ScrollProgress';

const TheHeader = () => {
  return (
    <header className="header-main v-grid space-between">
      <Sidebar />
      <div>.</div>
      <Link to="/">
        <div className="logo v-grid hv-centered">
          <Logo />
          <div className="v-grid gap-small">
            <h1>Spearny.</h1>
          </div>
        </div>
      </Link>
      <div className="v-grid align-center">
        <ScrollProgress />
        <ThemeColorSwitch />
        <Link className="v-grid" to="/user-profile">
          <FontAwesomeIcon icon="fa-solid fa-circle-user" />
        </Link>
      </div>
    </header>
  );
};

export default TheHeader;
