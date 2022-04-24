import { useDispatch } from 'react-redux';
import { movementsActions } from '../../store/movements';
import { useRef } from 'react';
import { sendNewMovement } from '../../store/movements-actions';
import classes from './MovementAddForm.module.scss';
import BaseCard from '../base/BaseCard';
import BaseButton from '../base/BaseButton';

const MovementAddForm = () => {
  const dispatch = useDispatch();
  const newMovementType = useRef();
  const newMovementTitle = useRef();
  const newMovementAmount = useRef();

  const addNewMovement = (e) => {
    e.preventDefault();

    if (
      newMovementTitle.current.value.trim() === '' ||
      newMovementAmount.current.value.trim() === ''
    )
      return;

    const newMovement = {
      id: new Date().toISOString() + Math.random(),
      dateAdded: new Date().toDateString(),
      type: newMovementType.current.value,
      title: newMovementTitle.current.value,
      amount:
        newMovementType.current.value === 'expense'
          ? -+newMovementAmount.current.value
          : +newMovementAmount.current.value,
      description: null,
      isRegular: null,
      tags: null,
      paidBy: null,
      paidTo: null,
      receivedBy: null,
      receivedFrom: null,
      showDetails: true,
      isVisible: true,
    };

    dispatch(movementsActions.add(newMovement));
    dispatch(sendNewMovement(newMovement));

    newMovementType.current.value = 'expense';
    newMovementTitle.current.value = '';
    newMovementAmount.current.value = '';
  };

  return (
    <form className="v-grid-space-between np" onSubmit={addNewMovement}>
      <div className="v-grid-gap-small">
        <BaseCard mode="form-control" background="light">
          <select ref={newMovementType}>
            <option value="expense">-</option>
            <option value="income">+</option>
          </select>
        </BaseCard>
        <BaseCard mode="form-control" background="light">
          <input type="text" placeholder="Title..." ref={newMovementTitle} />
        </BaseCard>
        <BaseCard mode="form-control" background="light">
          <input
            className={classes.amount}
            type="number"
            placeholder="Amount..."
            ref={newMovementAmount}
          />
        </BaseCard>
      </div>
      <BaseButton type="submit" priority="primary" onClick={addNewMovement}>
        Add
      </BaseButton>
    </form>
  );
};

export default MovementAddForm;
