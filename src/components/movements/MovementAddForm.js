import { useRef, useState } from 'react';
import styles from './MovementAddForm.module.scss';
import BaseButton from '../BaseButton';

const MovementAddForm = (props) => {
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
        <select className={styles.filled} ref={newMovementType}>
          <option value="expense">-</option>
          <option value="income">+</option>
        </select>
        <div className={styles.formControl}>
          {placeholderIsVisible && (
            <span className={styles.placeholder}>{placeholder}</span>
          )}
          <input
            className={styles.filled}
            type="text"
            placeholder="Title..."
            ref={newMovementTitle}
            onClick={showPlaceholder}
            onBlur={hidePlaceholder}
          />
        </div>
        <input
          className={`${styles.amount} ${styles.filled}`}
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
