import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../store/movements';
import BaseDropdown from '../../base/BaseDropdown';
import BaseCard from '../../base/BaseCard';

const MovementDescription = (props) => {
  const dispatch = useDispatch();
  const id = props.id;

  const descriptionOnChangeHandler = (e) => {
    dispatch(
      movementsActions.updateProperty({
        id: id,
        updatedProperty: 'description',
        updatedValue: e.target.value,
      })
    );
  };

  return (
    <BaseCard background="filler">
      <BaseDropdown
        head={<label>Notes:</label>}
        hasToggle={true}
        isOpen={props.description ?? false}
      >
        <textarea
          value={props.description ?? ''}
          placeholder="Some notes..."
          onChange={descriptionOnChangeHandler}
        />
      </BaseDropdown>
    </BaseCard>
  );
};

export default MovementDescription;
