import { useState } from 'react';
import MovementAddForm from './MovementAddForm';
import MovementList from './MovementList';
import MovementListAction from './MovementListActions';

const Movements = () => {
  const [movementListMode, setMovementListMode] = useState('list');

  const setListMode = (childValue) => {
    setMovementListMode(childValue);
  };

  return (
    <div className="h-grid-gap-big">
      <MovementAddForm />
      <div className="h-grid-gap-small">
        <MovementListAction testing={setListMode} />
        <MovementList listMode={movementListMode} />
      </div>
    </div>
  );
};

export default Movements;
