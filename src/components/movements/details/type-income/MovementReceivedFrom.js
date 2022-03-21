import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../../store/movements';
import BaseDropdown from '../../../base/BaseDropdown';
import BaseCard from '../../../base/BaseCard';

const MovementReceivedBy = (props) => {
  const dispatch = useDispatch();
  const id = props.id;

  const receivedFromOnChangeHandler = (e) => {
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'receivedFrom',
        updatedValue: e.target.value,
      })
    );
  };

  return (
    <BaseDropdown
      head={<label>Received from:</label>}
      hasToggle={true}
      helpTitle="Received from"
      helpText="From whom did I receive this payment?"
      isOpen={props.initialValue && true}
    >
      <BaseCard background="white" isLabel={true}>
        <select
          value={props.initialValue}
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
      </BaseCard>
    </BaseDropdown>
  );
};

export default MovementReceivedBy;
