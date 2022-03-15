import { useState } from 'react';
import styles from './MovementAddForm.module.scss';

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
        <select value={newMovementType} onChange={typeOnChangeHandler}>
          <option value="income">+</option>
          <option value="expense">-</option>
        </select>
        <input
          type="text"
          placeholder="Title..."
          value={newMovementTitle}
          onChange={titleOnChangeHandler}
        />
        <input
          type="number"
          placeholder="Amount..."
          value={newMovementAmount}
          onChange={amountOnChangeHandler}
        />
      </div>
      <button type="submit" onClick={formOnSubmitClickHandler}>
        Add
      </button>
    </form>
  );
};

export default MovementAddForm;
