import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../store/movements';
import BaseDropdown from '../../base/BaseDropdown';
import TagsList from '../../tags/TagsList';

const MovementTags = (props) => {
  const dispatch = useDispatch();
  const id = props.id;
  let assignedTags = props.tags;

  const toggleTagAssignment = (e) => {
    dispatch(
      movementsActions.update({
        id: id,
        updatedProperty: 'tags',
        updatedValue: assignedTags,
      })
    );
  };

  return (
    <BaseDropdown
      head={<label>Tags:</label>}
      hasToggle={true}
      helpTitle="Tags"
      helpText="Tags help text"
      isOpen={assignedTags && true}
    >
      <TagsList tagBackground="white" />
    </BaseDropdown>
  );
};

export default MovementTags;
