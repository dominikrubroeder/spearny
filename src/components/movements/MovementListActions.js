import BaseSwitch from '../base/BaseSwitch';

const MovementListAction = (props) => {
  const publishListMode = (childValue) => {
    props.listMode.handler(childValue);
  };

  const publishSortingMode = (childValue) => {
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
          initialValue={listModeOptions.indexOf(props.listMode.initialValue)}
          variant="minimal"
          onClick={publishListMode}
        />
      </div>

      <div className="v-grid">
        Sorting:
        <BaseSwitch
          options={sortingModeOptions}
          initialValue={sortingModeOptions.indexOf(
            props.sortingMode.initialValue
          )}
          variant="minimal"
          onClick={publishSortingMode}
        />
      </div>
    </div>
  );
};

export default MovementListAction;
