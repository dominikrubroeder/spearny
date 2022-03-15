import BaseLabel from '../BaseLabel.js';
import styles from './MovementDetails.module.scss';

const MovementDetails = (props) => {
  const meta =
    props.movement.type === 'expense' ? (
      <div className="meta--expense">
        <div className="movement__paid-to">
          Paid to: <BaseLabel title={props.movement.paidTo} />
        </div>
        <div className="movement__paid-by">
          Paid from: <BaseLabel title={props.movement.paidBy} />
        </div>
      </div>
    ) : (
      <div className="meta--income">
        <div className="movement__received-from">
          Received from: <BaseLabel title={props.movement.receivedFrom} />
        </div>
        <div className="movement__received-by">
          Received by: <BaseLabel title={props.movement.receivedBy} />
        </div>
      </div>
    );

  return (
    <div className="movement__details">
      <div className="movement__description">{props.movement.description}</div>
      <div className="movement__meta">
        <div className={styles.tags}>
          {props.movement.tags.map((tag) => (
            <BaseLabel key={tag} title={tag} />
          ))}
        </div>
        {meta}
      </div>
    </div>
  );
};

export default MovementDetails;
