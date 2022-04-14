import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../../store/movements';
import BaseDropdown from '../../../base/BaseDropdown';
import BaseCard from '../../../base/BaseCard';
import BaseHelpText from '../../../base/BaseHelpText';

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

  const dropdownHead = (
    <div className="v-grid-space-between">
      <label>Received by:</label>
      <BaseHelpText title="Received by:">Reveiced by help text</BaseHelpText>
    </div>
  );

  return (
    <BaseDropdown
      head={dropdownHead}
      isOpen={props.initialValue && true}
      hasToggle
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
