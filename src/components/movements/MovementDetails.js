import BaseLabel from '../BaseLabel.js';
import styles from './MovementDetails.module.scss';

const MovementDetails = (props) => {
  return (
    <div className="movement__details">
      <div className="movement__description">{props.movement.description}</div>
      <div className="movement__meta">
        <div className={styles.tags}>
          {props.movement.tags.map((tag) => (
            <BaseLabel key={tag} title={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovementDetails;
