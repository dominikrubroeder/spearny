import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../../store/movements';
import BaseDropdown from '../../../base/BaseDropdown';
import BaseCard from '../../../base/BaseCard';
import BaseHelpText from '../../../base/BaseHelpText';

const MovementReceivedBy = (props) => {
  const dispatch = useDispatch();
  const id = props.id;

  const receivedFromOnChangeHandler = (e) => {
    dispatch(
      movementsActions.updateProperty({
        id: id,
        updatedProperty: 'receivedFrom',
        updatedValue: e.target.value,
      })
    );
  };

  const dropdownHead = (
    <div className="v-grid-space-between">
      <label>Received from:</label>
      <BaseHelpText title="Received from:">
        Reveiced from help text
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
          onChange={receivedFromOnChangeHandler}
        >
          <option value="Zalando GmbH">Zalando GmbH</option>
          <option value="Luca Walther">Luca Walther</option>
          <option value="Patrick Rubroeder">Patrick Rubröder</option>
          <option value="Apple Inc.">Apple Inc.</option>
          <option value="Starbucks">Starbucks</option>
          <option value="Restaurant Il Soprano">Restaurant Il Soprano</option>
          <option value="Amazon.com Inc.">Amazon.com Inc.</option>
        </select>
      </BaseDropdown>
    </BaseCard>
  );
};

export default MovementReceivedBy;
