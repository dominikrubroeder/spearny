import { Link } from 'react-router-dom';
import classes from './TheFooter.module.scss';

const TheFooter = () => {
  return (
    <footer>
      <div className={`${classes.navigation} v-grid`}>
        <Link to="/kontakt">Kontakt</Link>
        <Link to="/datenschutz">Datenschutz</Link>
        <Link to="/impressum">Impressum</Link>
      </div>
    </footer>
  );
};

export default TheFooter;
