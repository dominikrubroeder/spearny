import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../../store/movements';
import BaseCard from '../../../base/BaseCard';

const MovementTitle = (props) => {
  const dispatch = useDispatch();
  const id = props.id;

  const titleOnChangeHandler = (e) => {
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'title',
        updatedValue: e.target.value,
      })
    );
  };

  return (
    <BaseCard
      className="v-grid-item-expand"
      mode="form-control"
      background="white"
    >
      <input
        type="text"
        value={props.initialValue}
        placeholder="Add title..."
        onChange={titleOnChangeHandler}
      />
    </BaseCard>
  );
};

export default MovementTitle;
