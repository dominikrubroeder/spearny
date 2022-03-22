import { useDispatch } from 'react-redux';
import { movementsActions } from '../../store/movements';
import { useRef } from 'react';
import classes from './MovementAddForm.module.scss';
import BaseButton from '../base/BaseButton';

const MovementAddForm = () => {
  const dispatch = useDispatch();
  const newMovementType = useRef();
  const newMovementTitle = useRef();
  const newMovementAmount = useRef();

  const addNewMovement = (e) => {
    e.preventDefault();

    const newMovement = {
      id: new Date().toISOString() + Math.random(),
      dateAdded: new Date().toDateString(),
      type: newMovementType.current.value,
      title: newMovementTitle.current.value,
      amount: +newMovementAmount.current.value,
      description: null,
      tags: null,
      paidBy: null,
      paidTo: null,
      showDetails: true,
      editMode: true,
    };

    dispatch(movementsActions.add(newMovement));

    newMovementType.current.value = 'expense';
    newMovementTitle.current.value = '';
    newMovementAmount.current.value = '';
  };

  return (
    <form className="v-grid-space-between" onSubmit={addNewMovement}>
      <div className="v-grid-gap-small">
        <select className={classes.filled} ref={newMovementType}>
          <option value="expense">-</option>
          <option value="income">+</option>
        </select>
        <div className={classes.formControl}>
          <input
            className={classes.filled}
            type="text"
            placeholder="Title..."
            ref={newMovementTitle}
          />
        </div>
        <input
          className={`${classes.amount} ${classes.filled}`}
          type="number"
          placeholder="Amount..."
          ref={newMovementAmount}
        />
      </div>
      <BaseButton type="submit" priority="primary" onClick={addNewMovement}>
        Add
      </BaseButton>
    </form>
  );
};

export default MovementAddForm;
