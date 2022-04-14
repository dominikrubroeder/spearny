import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../store/movements';
import BaseDropdown from '../../base/BaseDropdown';
import BaseCard from '../../base/BaseCard';

const MovementDescription = (props) => {
  const dispatch = useDispatch();
  const id = props.id;

  const descriptionOnChangeHandler = (e) => {
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'description',
        updatedValue: e.target.value,
      })
    );
  };

  return (
    <BaseDropdown
      head={<label>Notes:</label>}
      hasToggle={true}
      isOpen={props.description ?? false}
    >
      <BaseCard mode="form-control" background="white">
        <textarea
          value={props.description ?? ''}
          placeholder="Some notes..."
          onChange={descriptionOnChangeHandler}
        />
      </BaseCard>
    </BaseDropdown>
  );
};

export default MovementDescription;
