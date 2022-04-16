import BaseSwitch from '../base/BaseSwitch';

const MovementListAction = (props) => {
  const publishListMode = (childValue) => {
    props.testing(childValue);
  };
  return (
    <div>
      <div className="v-grid">
        List mode:
        <BaseSwitch
          options={['list', 'grid']}
          initialValue={0}
          variant="minimal"
          onClick={publishListMode}
        />
      </div>
    </div>
  );
};

export default MovementListAction;
