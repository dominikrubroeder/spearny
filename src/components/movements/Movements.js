import { useState } from 'react';
import MovementAddForm from './MovementAddForm';
import MovementList from './MovementList';
import MovementListAction from './MovementListActions';

const Movements = () => {
  const [movementListMode, setMovementListMode] = useState('list');
  const [movementSortingMode, setMovementSortingMode] =
    useState('date-added-first');
  const [movementFilterMode, setMovementFilterMode] = useState('show-all');

  return (
    <div className="h-grid-gap-big">
      <MovementAddForm />

      <div className="h-grid-gap-small">
        <MovementListAction
          values={{
            listModeValue: movementListMode,
            sortingModeValue: movementSortingMode,
            filterModeValue: movementListMode,
          }}
          actions={{
            listModeAction: {
              handler: setMovementListMode,
              initialValue: 0,
            },
            sortingModeAction: {
              handler: setMovementSortingMode,
              initialValue: 0,
            },
            filterModeAction: {
              handler: setMovementFilterMode,
              initialValue: 0,
            },
          }}
        />

        <MovementList
          config={{
            list: movementListMode,
            sorting: movementSortingMode,
            filters: movementFilterMode,
          }}
        />
      </div>
    </div>
  );
};

export default Movements;
