import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../../store/movements';
import BaseCard from '../../../base/BaseCard';

const MovementType = (props) => {
  const dispatch = useDispatch();
  const id = props.id;

  const typeOnChangeHandler = (e) => {
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'type',
        updatedValue: e.target.value,
      })
    );
  };

  return (
    <BaseCard background="white" isLabel={true}>
      <select value={props.initialValue} onChange={typeOnChangeHandler}>
        <option value="income">+</option>
        <option value="expense">-</option>
      </select>
    </BaseCard>
  );
};

export default MovementType;
