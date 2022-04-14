import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../../store/movements';
import BaseDropdown from '../../../base/BaseDropdown';
import BaseCard from '../../../base/BaseCard';
import BaseHelpText from '../../../base/BaseHelpText';

const MovementPaidTo = (props) => {
  const dispatch = useDispatch();
  const id = props.id;

  const paidToOnChangeHandler = (e) => {
    dispatch(
      movementsActions.updateProperty({
        id: id,
        updatedProperty: 'paidTo',
        updatedValue: e.target.value,
      })
    );
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
    <BaseDropdown
      head={dropdownHead}
      isOpen={props.initialValue ?? false}
      hasToggle
    >
      <BaseCard mode="form-control" background="white">
        <select
          value={props.initialValue ?? 'Zalando GmbH'}
          onChange={paidToOnChangeHandler}
        >
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
