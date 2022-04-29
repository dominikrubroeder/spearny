import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../../store/movements';
import BaseCard from '../../../base/BaseCard';

const MovementAmount = (props) => {
  const dispatch = useDispatch();
  const id = props.id;

  const amountOnChangeHandler = (e) => {
    dispatch(
      movementsActions.updateProperty({
        id: id,
        updatedProperty: 'amount',
        updatedValue: +e.target.value,
      })
    );
  };

  return (
    <BaseCard mode="form-control" background="filler">
      <input
        type="text"
        value={props.initialValue}
        placeholder="Amount value"
        onChange={amountOnChangeHandler}
      />
    </BaseCard>
  );
};

export default MovementAmount;
