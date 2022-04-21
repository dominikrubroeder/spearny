import { useState } from 'react';
import Budget from '../budget/Budget';
import MovementAddForm from './MovementAddForm';
import MovementList from './MovementList';
import MovementListAction from './MovementListActions';

const Movements = () => {
  const [movementListMode, setMovementListMode] = useState('list');
  const [movementSortingMode, setMovementSortingMode] =
    useState('date-added-first');
  const [movementFilterMode, setMovementFilterMode] = useState('show-all');

  return (
    <div className="h-grid-gap-huge">
      <MovementAddForm />

      <div className="v-grid-centered">
        <Budget />
      </div>

      <div className="h-grid">
        <MovementListAction
          values={{
            listModeValue: movementListMode,
            sortingModeValue: movementSortingMode,
            filterModeValue: movementFilterMode,
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
