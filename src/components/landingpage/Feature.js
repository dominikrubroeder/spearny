import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Feature.module.scss';

const Feature = (props) => {
  return (
    <div className="v-grid-gap-big-align-top-no-wrap">
      <span className={`${classes.icon} icon icon--leading`}>
        <FontAwesomeIcon icon={`fa-solid ${props.icon}`} />
      </span>
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Feature;
