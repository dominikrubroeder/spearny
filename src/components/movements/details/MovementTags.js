import { useDispatch, useSelector } from 'react-redux';
import { movementsActions } from '../../../store/movements';
import BaseDropdown from '../../base/BaseDropdown';
import Tag from '../../tags/Tag';

const MovementTags = (props) => {
  const tags = useSelector((state) => state.tags.tags);
  const dispatch = useDispatch();
  const id = props.id;
  let assignedTags = props.tags;

  const toggleTagAssignment = (tag) => {
    dispatch(
      movementsActions.toggleTagAssignment({
        movementId: id,
        tag: tag,
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
      {tags.map((tag) => (
        <Tag key={tag.id} onClick={() => toggleTagAssignment(tag)}>
          {tag.title}
        </Tag>
      ))}
    </BaseDropdown>
  );
};

export default MovementTags;
