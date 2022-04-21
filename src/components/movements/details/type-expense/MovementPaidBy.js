import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movementsActions } from '../../../../store/movements';
import { paymentMethodsActions } from '../../../../store/payment-methods';
import {
  fetchPaymentMethods,
  sendNewPaymentMethod,
} from '../../../../store/payment-methods-actions';
import BaseDropdown from '../../../base/BaseDropdown';
import BaseCard from '../../../base/BaseCard';
import BaseHelpText from '../../../base/BaseHelpText';
import AddNewEntitiy from '../../detail-actions/AddNewEntity';

const MovementPaidBy = (props) => {
  const dispatch = useDispatch();
  const id = props.id;
  const paymentMethods = useSelector(
    (state) => state.paymentMethods.paymentMethods
  );

  /** useEffect() hook to only trigger this dispatch action once
   * the dispatch function will never change, so it won't recall this block again
   */
  useEffect(() => {
    dispatch(fetchPaymentMethods());
  }, [dispatch]);

  const paidByOnChangeHandler = (e) => {
    dispatch(
      movementsActions.updateProperty({
        id: id,
        updatedProperty: 'paidBy',
        updatedValue: e.target.value,
      })
    );
  };

  const dropdownHead = (
    <div className="v-grid-space-between">
      <label>Paid by:</label>
      <BaseHelpText title="Paid by">
        Which payment method did I use to make the payment?
      </BaseHelpText>
    </div>
  );

  const onAdd = (childValue) => {
    const newPaymentMethod = {
      id: Math.random().toString(),
      title: childValue,
    };

    // Update payment methods with a new payment methods added by the user value
    dispatch(paymentMethodsActions.add(newPaymentMethod));

    // Update current movement with new payment method selected
    dispatch(
      movementsActions.updateProperty({
        id: id,
        updatedProperty: 'paidBy',
        updatedValue: childValue,
      })
    );

    // Save payment methods to Firebase
    dispatch(sendNewPaymentMethod(newPaymentMethod));
  };

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
          {paymentMethods.map((paymentMethod) => (
            <option key={paymentMethod.id} value={paymentMethod.title}>
              {paymentMethod.title}
            </option>
          ))}
        </select>

        <AddNewEntitiy entityType="payment method" onAdd={onAdd} />
      </BaseDropdown>
    </BaseCard>
  );
};

export default MovementPaidBy;
