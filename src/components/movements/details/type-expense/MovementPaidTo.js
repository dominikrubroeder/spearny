import { useDispatch, useSelector } from 'react-redux';
import { movementsActions } from '../../../../store/movements';
import BaseDropdown from '../../../base/BaseDropdown';
import BaseCard from '../../../base/BaseCard';
import BaseHelpText from '../../../base/BaseHelpText';
import { paymentReceiversActions } from '../../../../store/payment-receiver';
import AddNewEntitiy from '../../detail-actions/AddNewEntity';

const MovementPaidTo = (props) => {
  const dispatch = useDispatch();
  const id = props.id;
  const paymentReceivers = useSelector(
    (state) => state.paymentReceivers.paymentReceivers
  );

  const paidToOnChangeHandler = (e) => {
    dispatch(
      movementsActions.updateProperty({
        id: id,
        updatedProperty: 'paidTo',
        updatedValue: e.target.value,
      })
    );
  };

  const onAdd = (childValue) => {
    // Update payment receivers with a new payment receiver added by the user value
    dispatch(
      paymentReceiversActions.add({
        id: Math.random().toString(),
        title: childValue,
      })
    );

    // Update current movement with new payment method selected
    dispatch(
      movementsActions.updateProperty({
        id: id,
        updatedProperty: 'paidTo',
        updatedValue: childValue,
      })
    );

    // Save payment receivers to Firebase, Save movement to Firebase
  };

  const dropdownHead = (
    <div className="v-grid-space-between">
      <label>Paid to:</label>
      <BaseHelpText title="Paid to">
        To whom did I make the payment?
      </BaseHelpText>
    </div>
  );

  return (
    <BaseCard background="white">
      <BaseDropdown
        head={dropdownHead}
        isOpen={props.initialValue ?? false}
        hasToggle
      >
        <select
          value={props.initialValue ?? 'Zalando GmbH'}
          onChange={paidToOnChangeHandler}
        >
          {paymentReceivers.map((paymentReceiver) => (
            <option key={paymentReceiver.id} value={paymentReceiver.title}>
              {paymentReceiver.title}
            </option>
          ))}
        </select>

        <AddNewEntitiy entityType="payment receiver" onAdd={onAdd} />
      </BaseDropdown>
    </BaseCard>
  );
};

export default MovementPaidTo;
