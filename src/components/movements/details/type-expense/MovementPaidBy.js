import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../../store/movements';
import BaseDropdown from '../../../base/BaseDropdown';
import BaseCard from '../../../base/BaseCard';
// import { updateMovement } from '../../../../store/movements-actions';

const MovementPaidBy = (props) => {
  const dispatch = useDispatch();
  const id = props.id;

  const paidByOnChangeHandler = (e) => {
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'paidBy',
        updatedValue: e.target.value,
      })
    );

    // dispatch(updateMovement(id));
  };

  return (
    <BaseDropdown
      head={<label>Paid by:</label>}
      hasToggle={true}
      helpTitle="Paid by"
      helpText="Which payment method did I use to make the payment??"
      isOpen={props.initialValue && true}
    >
      <BaseCard mode="form-control" background="white">
        <select value={props.initialValue} onChange={paidByOnChangeHandler}>
          <option value="Cash">Cash</option>
          <option value="PayPal">PayPal</option>
          <option value="invoice">By Invoice</option>
          <option value="VISA">VISA</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Klarna">Klarna</option>
          <option value="American Express">American Express</option>
        </select>
      </BaseCard>
    </BaseDropdown>
  );
};

export default MovementPaidBy;
