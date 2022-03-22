import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../../store/movements';
import BaseDropdown from '../../../base/BaseDropdown';
import BaseCard from '../../../base/BaseCard';

const MovementReceivedBy = (props) => {
  const dispatch = useDispatch();
  const id = props.id;

  const receivedByOnChangeHandler = (e) => {
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'receivedBy',
        updatedValue: e.target.value,
      })
    );
  };

  return (
    <BaseDropdown
      head={<label>Received by:</label>}
      hasToggle={true}
      helpTitle="Received by"
      helpText="By which payment method did I receive this payment"
      isOpen={props.initialValue && true}
    >
      <BaseCard mode="form-control" background="white">
        <select value={props.initialValue} onChange={receivedByOnChangeHandler}>
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

export default MovementReceivedBy;
