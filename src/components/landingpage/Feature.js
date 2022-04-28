import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Feature.scss';

const Feature = (props) => {
  return (
    <div className="feature v-grid hv-centered" data-index={props.index}>
      <div className="h-grid gap-small">
        <div className="feature__title v-grid gap-small">
          <FontAwesomeIcon
            icon={`fa-solid ${props.icon}`}
            className="feature__icon"
          />
          <h2>{props.title}</h2>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Feature;
