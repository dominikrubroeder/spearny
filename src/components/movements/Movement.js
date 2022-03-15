import { useState } from 'react';
import styles from './Movement.module.scss';
import BaseDropdown from '../BaseDropdown';
import MovementEditMode from './MovementEditMode';
import MovementDetails from './MovementDetails';

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

  const enableEditMode = () => {
    setEditMode(() => true);
  };

  const head = (
    <div className={styles.head}>
      <h3 className={styles.title} onClick={toggleDetails}>
        {props.movement.title}
      </h3>
      <div className={styles.amount}>
        {plusMinus} {props.movement.amount}€
      </div>
    </div>
  );

  return (
    <div className={`${styles.movement} ${type}`}>
      <BaseDropdown
        isOpen={showDetails}
        head={head}
        content={
          showDetails && editMode ? (
            <MovementEditMode movement={props.movement} />
          ) : (
            <MovementDetails movement={props.movement} />
          )
        }
        hasEditActions={true}
        editModeState={editMode}
        enableEditMode={enableEditMode}
        hideDetails={toggleDetails}
      />
    </div>
  );
};

export default Movement;
