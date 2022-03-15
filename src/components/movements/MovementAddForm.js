import { useState } from 'react';

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
    };

    props.onAddNewMovement(newMovement);

    setNewMovementType(() => 'income');
    setNewMovementTitle(() => '');
    setNewMovementAmount(() => 0);
  };

  return (
    <form className="v-grid-gap-small" onSubmit={formOnSubmitClickHandler}>
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
      <button type="submit" onClick={formOnSubmitClickHandler}>
        Add
      </button>
    </form>
  );
};

export default MovementAddForm;
