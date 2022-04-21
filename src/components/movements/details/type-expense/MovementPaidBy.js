import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../../store/movements';
import BaseDropdown from '../../../base/BaseDropdown';
import BaseCard from '../../../base/BaseCard';
import BaseHelpText from '../../../base/BaseHelpText';
import BaseButton from '../../../base/BaseButton';
import AddNewEntitiy from '../../detail-actions/AddNewEntity';
// import { updateMovement } from '../../../../store/movements-actions';

const MovementPaidBy = (props) => {
  const dispatch = useDispatch();
  const id = props.id;

  const paidByOnChangeHandler = (e) => {
    dispatch(
      movementsActions.updateProperty({
        id: id,
        updatedProperty: 'paidBy',
        updatedValue: e.target.value,
      })
    );

    // dispatch(updateMovement(id));
  };

  const dropdownHead = (
    <div className="v-grid-space-between">
      <label>Paid by:</label>
      <BaseHelpText title="Paid by">
        Which payment method did I use to make the payment?
      </BaseHelpText>
    </div>
  );

  return (
    <BaseCard background="white">
      <BaseDropdown
        head={dropdownHead}
        isOpen={props.initialValue && true}
        hasToggle
      >
        <select
          value={props.initialValue ?? 'Cash'}
          onChange={paidByOnChangeHandler}
        >
          <option value="Cash">Cash</option>
          <option value="PayPal">PayPal</option>
          <option value="invoice">By Invoice</option>
          <option value="VISA">VISA</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Klarna">Klarna</option>
          <option value="American Express">American Express</option>
        </select>

        <AddNewEntitiy
          entityType="payment method"
          onAdd={console.log('onAdd')}
        />
      </BaseDropdown>
    </BaseCard>
  );
};

export default MovementPaidBy;
