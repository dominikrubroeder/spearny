import { useDispatch } from 'react-redux';
import { movementsActions } from '../../store/movements';
import { useRef, useState } from 'react';
import classes from './MovementAddForm.module.scss';
import BaseButton from '../base/BaseButton';

const MovementAddForm = (props) => {
  const dispatch = useDispatch();
  const [placeholderIsVisible, setPlaceholderIsVisible] = useState(false);
  const [placeholder, setPlaceholder] = useState('');
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
      dateAdded: new Date().toDateString(),
      tags: [],
      paidBy: '',
      paidTo: '',
      showDetails: true,
      editMode: true,
    };

    dispatch(movementsActions.add(newMovement));

    newMovementType.current.value = 'expense';
    newMovementTitle.current.value = '';
    newMovementAmount.current.value = '';
  };

  const showPlaceholder = (e) => {
    setPlaceholder(() => e.target.placeholder);
    setPlaceholderIsVisible(() => true);
  };

  const hidePlaceholder = () => {
    setPlaceholderIsVisible(() => false);
  };

  return (
    <form className="v-grid-space-between" onSubmit={addNewMovement}>
      <div className="v-grid-gap-small">
        <select className={classes.filled} ref={newMovementType}>
          <option value="expense">-</option>
          <option value="income">+</option>
        </select>
        <div className={classes.formControl}>
          {placeholderIsVisible && (
            <span className={classes.placeholder}>{placeholder}</span>
          )}
          <input
            className={classes.filled}
            type="text"
            placeholder="Title..."
            ref={newMovementTitle}
            onClick={showPlaceholder}
            onBlur={hidePlaceholder}
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
