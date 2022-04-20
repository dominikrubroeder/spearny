import { useState } from 'react';
import MovementListActionsToggle from './list-actions/MovementListActionsToggle';
import MovementAddForm from './MovementAddForm';
import MovementList from './MovementList';
import MovementListAction from './MovementListActions';

const Movements = () => {
  const [movementListMode, setMovementListMode] = useState('list');
  const [movementSortingMode, setMovementSortingMode] =
    useState('date-added-first');
  const [movementFilterMode, setMovementFilterMode] = useState('show-all');
  const [showListActions, setShowListActions] = useState(false);

  const setListMode = (childValue) => {
    setMovementListMode(childValue);
  };

  const setSortingMode = (childValue) => {
    setMovementSortingMode(childValue);
  };

  const setFilterMode = (childValue) => {
    setMovementFilterMode(childValue);
  };

  return (
    <div className="h-grid-gap-big">
      <MovementAddForm />

      <div className="h-grid-gap-small">
        <div className="h-grid">
          <MovementListActionsToggle
            state={showListActions}
            onClick={setShowListActions}
          />
        </div>

        {showListActions && (
          <MovementListAction
            listMode={{
              handler: setListMode,
              initialValue: 0,
            }}
            sortingMode={{
              handler: setSortingMode,
              initialValue: 0,
            }}
            filterMode={{
              handler: setFilterMode,
              initialValue: 0,
            }}
          />
        )}

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
