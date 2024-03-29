import { useDispatch, useSelector } from 'react-redux';
import { movementsActions } from '../../../../store/movements';
import { paymentPartnersActions } from '../../../../store/payment-partner';
import { sendNewPaymentPartner } from '../../../../store/payment-partner-actions';
import BaseDropdown from '../../../base/BaseDropdown';
import BaseCard from '../../../base/BaseCard';
import BaseHelpText from '../../../base/BaseHelpText';
import AddNewEntitiy from '../../detail-actions/AddNewEntity';

const MovementPaidTo = (props) => {
  const dispatch = useDispatch();
  const id = props.id;
  const paymentPartners = useSelector(
    (state) => state.paymentPartners.paymentPartners
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
    const newPaymentPartner = {
      id: Math.random().toString(),
      title: childValue,
    };

    // Update payment receivers with a new payment receiver added by the user value
    dispatch(paymentPartnersActions.add(newPaymentPartner));

    // Update current movement with new payment method selected
    dispatch(
      movementsActions.updateProperty({
        id: id,
        updatedProperty: 'paidTo',
        updatedValue: childValue,
      })
    );

    // Save payment receivers to Firebase
    dispatch(sendNewPaymentPartner(newPaymentPartner));
  };

  const dropdownHead = (
    <div className="v-grid space-between">
      <label>Paid to:</label>
      <BaseHelpText title="Paid to">
        To whom did I make the payment?
      </BaseHelpText>
    </div>
  );

  return (
    <BaseCard background="filler">
      <BaseDropdown
        head={dropdownHead}
        isOpen={props.initialValue ?? false}
        hasToggle
      >
        <select
          value={props.initialValue ?? 'Zalando GmbH'}
          onChange={paidToOnChangeHandler}
        >
          {paymentPartners.map((paymentPartner) => (
            <option key={paymentPartner.id} value={paymentPartner.title}>
              {paymentPartner.title}
            </option>
          ))}
        </select>

        <AddNewEntitiy entityType="payment receiver" onAdd={onAdd} />
      </BaseDropdown>
    </BaseCard>
  );
};

export default MovementPaidTo;
