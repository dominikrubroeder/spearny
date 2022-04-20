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

  const listModeOptions = ['list', 'grid'];
  const sortingModeOptions = ['date-added-first', 'alphabetical'];

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
    </div>
  );
};

export default MovementListAction;
