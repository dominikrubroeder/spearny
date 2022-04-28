import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { movementsActions } from '../../store/movements';
import BaseButton from '../base/BaseButton';
import BaseSwitch from '../base/BaseSwitch';
import './MovementListActions.scss';

const MovementListAction = (props) => {
  const dispatch = useDispatch();
  const [showListActions, setShowListActions] = useState(false);
  const { listModeValue, sortingModeValue, filterModeValue } = props.values;
  const { listModeAction, sortingModeAction, filterModeAction } = props.actions;

  const publishListMode = (childValue) => {
    listModeAction.handler(childValue);
  };

  const publishSortingMode = (childValue) => {
    dispatch(movementsActions.sort(childValue));
    sortingModeAction.handler(childValue);
  };

  const publishFilterMode = (childValue) => {
    dispatch(movementsActions.filter(childValue));
    filterModeAction.handler(childValue);
  };

  const listModeOptions = ['list', 'grid'];
  const sortingModeOptions = ['date-added-first', 'alphabetical'];
  const filterModeOptions = [
    'show-all',
    'hide-income',
    'hide-expenses',
    'advanced',
  ];

  return (
    <div>
      <div
        className="movement-list__status-bar v-grid space-between"
        onClick={setShowListActions.bind(
          null,
          (previousValue) => !previousValue
        )}
      >
        <div className="v-grid">
          <div className="v-grid gap-small">
            <FontAwesomeIcon icon="fa-solid fa-folder-tree" />
            {`${listModeValue.charAt(0).toUpperCase()}${listModeValue
              .slice(1)
              .replaceAll('-', ' ')}`}
          </div>
          <div className="v-grid gap-small">
            <FontAwesomeIcon icon="fa-solid fa-sort" />
            {`${sortingModeValue.charAt(0).toUpperCase()}${sortingModeValue
              .slice(1)
              .replaceAll('-', ' ')}`}
          </div>
          <div className="v-grid gap-small">
            <FontAwesomeIcon icon="fa-solid fa-filter" />
            {`${filterModeValue.charAt(0).toUpperCase()}${filterModeValue
              .slice(1)
              .replaceAll('-', ' ')}`}
          </div>
        </div>

        <BaseButton
          className={`movement-list__actions-toggle ${
            showListActions ? 'active' : ''
          }`}
          mode="text"
        >
          <span></span>
          <span></span>
          <span></span>
        </BaseButton>
      </div>

      {showListActions && (
        <div>
          <div className="v-grid">
            Listing:
            <BaseSwitch
              options={listModeOptions}
              initialValue={listModeAction.initialValue}
              variant="minimal"
              onClick={publishListMode}
            />
          </div>

          <div className="v-grid">
            Sorting:
            <BaseSwitch
              options={sortingModeOptions}
              initialValue={sortingModeAction.initialValue}
              variant="minimal"
              onClick={publishSortingMode}
            />
          </div>

          <div className="v-grid">
            Filter:
            <BaseSwitch
              options={filterModeOptions}
              initialValue={filterModeAction.initialValue}
              variant="minimal"
              onClick={publishFilterMode}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovementListAction;
