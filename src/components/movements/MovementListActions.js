import { useDispatch } from 'react-redux';
import { movementsActions } from '../../store/movements';
import BaseSwitch from '../base/BaseSwitch';

const MovementListAction = (props) => {
  const dispatch = useDispatch();

  const publishListMode = (childValue) => {
    props.listMode.handler(childValue);
  };

  const publishSortingMode = (childValue) => {
    dispatch(movementsActions.sort(childValue));
    props.sortingMode.handler(childValue);
  };

  const publishFilterMode = (childValue) => {
    dispatch(movementsActions.filter(childValue));
    props.filterMode.handler(childValue);
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
      <div className="v-grid">
        Listing:
        <BaseSwitch
          options={listModeOptions}
          initialValue={props.listMode.initialValue}
          variant="minimal"
          onClick={publishListMode}
        />
      </div>

      <div className="v-grid">
        Sorting:
        <BaseSwitch
          options={sortingModeOptions}
          initialValue={props.sortingMode.initialValue}
          variant="minimal"
          onClick={publishSortingMode}
        />
      </div>

      <div className="v-grid">
        Filter:
        <BaseSwitch
          options={filterModeOptions}
          initialValue={props.filterMode.initialValue}
          variant="minimal"
          onClick={publishFilterMode}
        />
      </div>
    </div>
  );
};

export default MovementListAction;
