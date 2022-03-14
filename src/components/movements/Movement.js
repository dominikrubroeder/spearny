import { useState } from 'react';
import styles from './Movement.module.scss';
import MovementEditMode from './MovementEditMode';
import MovementDetails from './MovementDetails';

// Note: Turn movement tags into a Label component
const Movement = (props) => {
  const type =
    props.movement.type === 'expense'
      ? styles['type--expense']
      : styles['type--income'];

  const plusMinus = props.movement.type === 'expense' ? '-' : '+';

  const [showDetails, setShowDetails] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const toggleDetails = () => {
    setShowDetails((previousState) => {
      return !previousState;
    });

    setEditMode(() => false);
  };

  const toggleEditMode = () => {
    setEditMode((previousState) => {
      return !previousState;
    });
  };

  return (
    <div className={`${styles.movement} ${type}`}>
      <div className={styles.main}>
        <div className={styles.head}>
          <h3 className={styles.title} onClick={toggleDetails}>
            {props.movement.title}
          </h3>
          <div>
            <div className={styles.amount}>
              {plusMinus} {props.movement.amount}€
            </div>
            {showDetails && !editMode && (
              <button onClick={toggleEditMode}>Edit</button>
            )}
            {showDetails && editMode && (
              <button onClick={toggleDetails}>Done</button>
            )}
          </div>
        </div>
        {showDetails && <MovementDetails movement={props.movement} />}
        {showDetails && editMode && (
          <MovementEditMode movement={props.movement} />
        )}
      </div>
    </div>
  );
};

export default Movement;
