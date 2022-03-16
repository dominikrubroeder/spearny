import { useRef } from 'react';
import styles from './MovementAddForm.module.scss';
import BaseButton from '../BaseButton';

const MovementAddForm = (props) => {
  const newMovementType = useRef();
  const newMovementTitle = useRef();
  const newMovementAmount = useRef();

  const addNewMovement = (e) => {
    e.preventDefault();

    const newMovement = {
      id: new Date().toISOString() + Math.random(),
      type: newMovementType.current.value,
      title: newMovementTitle.current.value,
      amount: +newMovementAmount.current.value,
      description: '',
      dateAdded: new Date(),
      tags: [],
      paidBy: '',
      paidTo: '',
      showDetails: true,
      editMode: true,
    };

    props.onAddNewMovement(newMovement);

    newMovementType.current.value = 'expense';
    newMovementTitle.current.value = '';
    newMovementAmount.current.value = '';
  };

  return (
    <form className="v-grid-space-between" onSubmit={addNewMovement}>
      <div className="v-grid-gap-small">
        <select className={styles.filled} ref={newMovementType}>
          <option value="expense">-</option>
          <option value="income">+</option>
        </select>
        <input
          className={styles.filled}
          type="text"
          placeholder="Title..."
          ref={newMovementTitle}
        />
        <input
          className={`${styles.amount} ${styles.filled}`}
          type="number"
          placeholder="Amount..."
          ref={newMovementAmount}
        />
      </div>
      <BaseButton
        type="submit"
        mode="button"
        priority="primary"
        onClick={addNewMovement}
      >
        Add
      </BaseButton>
    </form>
  );
};

export default MovementAddForm;
