import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Feature.scss';

const Feature = (props) => {
  return (
    <div className="feature v-grid-space-between" data-index={props.index}>
      <FontAwesomeIcon
        icon={`fa-solid ${props.icon}`}
        className="feature__icon"
      />
      <div className="container--compressed">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Feature;
