import { useState } from 'react';
import MovementAddForm from './MovementAddForm';
import MovementList from './MovementList';
import MovementListAction from './MovementListActions';

const Movements = () => {
  const [movementListMode, setMovementListMode] = useState('list');
  const [movementSortingMode, setMovementSortingMode] =
    useState('alphabetical');

  const setListMode = (childValue) => {
    setMovementListMode(childValue);
  };

  const setSortingMode = (childValue) => {
    setMovementSortingMode(childValue);
  };

  return (
    <div className="h-grid-gap-big">
      <MovementAddForm />
      <div className="h-grid-gap-small">
        <MovementListAction
          listMode={{ handler: setListMode, initialValue: movementListMode }}
          sortingMode={{
            handler: setSortingMode,
            initialValue: movementSortingMode,
          }}
        />
        <MovementList
          config={{
            listMode: movementListMode,
            sortingMode: movementSortingMode,
          }}
        />
      </div>
    </div>
  );
};

export default Movements;
