import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../store/movements';
import BaseDropdown from '../../base/BaseDropdown';
import BaseCard from '../../base/BaseCard';

const MovementDescription = (props) => {
  const id = props.id;
  const dispatch = useDispatch();

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
    <Fragment>
      <BaseDropdown
        head={<label>Notes:</label>}
        hasToggle={true}
        isOpen={props.description && true}
      >
        <BaseCard background="white" isLabel={true}>
          <textarea
            rows="3"
            value={props.description}
            placeholder="Some notes..."
            onChange={descriptionOnChangeHandler}
          />
        </BaseCard>
      </BaseDropdown>
    </Fragment>
  );
};

export default MovementDescription;
