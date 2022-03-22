import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../../store/movements';
import BaseDropdown from '../../../base/BaseDropdown';
import BaseCard from '../../../base/BaseCard';

const MovementPaidTo = (props) => {
  const dispatch = useDispatch();
  const id = props.id;

  const paidToOnChangeHandler = (e) => {
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'paidTo',
        updatedValue: e.target.value,
      })
    );
  };

  return (
    <BaseDropdown
      head={<label>Paid to:</label>}
      hasToggle={true}
      helpTitle="Paid to"
      helpText="To whom did I make the payment?"
      isOpen={props.initialValue && true}
    >
      <BaseCard mode="form-control" background="white">
        <select value={props.initialValue} onChange={paidToOnChangeHandler}>
          <option value="Zalando GmbH">Zalando GmbH</option>
          <option value="Luca Walther">Luca Walther</option>
          <option value="Patrick Rubroeder">Patrick Rubröder</option>
          <option value="Apple Inc.">Apple Inc.</option>
          <option value="Starbucks">Starbucks</option>
          <option value="Restaurant Il Soprano">Restaurant Il Soprano</option>
          <option value="Amazon.com Inc.">Amazon.com Inc.</option>
        </select>
      </BaseCard>
    </BaseDropdown>
  );
};

export default MovementPaidTo;
