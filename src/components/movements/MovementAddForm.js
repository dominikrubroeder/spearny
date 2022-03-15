import { useState } from 'react';
import styles from './MovementAddForm.module.scss';
import BaseButton from '../BaseButton';

const MovementAddForm = (props) => {
  const [newMovementType, setNewMovementType] = useState('income');
  const [newMovementTitle, setNewMovementTitle] = useState('');
  const [newMovementAmount, setNewMovementAmount] = useState(0);

  const typeOnChangeHandler = (e) => {
    setNewMovementType(() => {
      return e.target.value;
    });
  };

  const titleOnChangeHandler = (e) => {
    setNewMovementTitle(() => {
      return e.target.value;
    });
  };

  const amountOnChangeHandler = (e) => {
    setNewMovementAmount(() => {
      return e.target.value;
    });
  };

  const formOnSubmitClickHandler = (e) => {
    e.preventDefault();

    const newMovement = {
      id: new Date().toISOString() + Math.random(),
      type: newMovementType,
      title: newMovementTitle,
      amount: newMovementAmount,
      description: '',
      dateAdded: new Date(),
      tags: [],
      paidBy: '',
      paidTo: '',
      showDetails: true,
      editMode: true,
    };

    props.onAddNewMovement(newMovement);

    setNewMovementType(() => 'income');
    setNewMovementTitle(() => '');
    setNewMovementAmount(() => 0);
  };

  return (
    <form className="v-grid-space-between" onSubmit={formOnSubmitClickHandler}>
      <div className="v-grid-gap-small">
        <select
          className={styles.filled}
          value={newMovementType}
          onChange={typeOnChangeHandler}
        >
          <option value="income">+</option>
          <option value="expense">-</option>
        </select>
        <input
          className={styles.filled}
          type="text"
          placeholder="Title..."
          value={newMovementTitle}
          onChange={titleOnChangeHandler}
        />
        <input
          className={`${styles.amount} ${styles.filled}`}
          type="number"
          placeholder="Amount..."
          value={newMovementAmount}
          onChange={amountOnChangeHandler}
        />
      </div>
      <BaseButton
        type="submit"
        text="Add"
        mode="button"
        priority="primary"
        onClick={formOnSubmitClickHandler}
      />
    </form>
  );
};

export default MovementAddForm;
