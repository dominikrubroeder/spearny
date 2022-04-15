import { useDispatch, useSelector } from 'react-redux';
import { movementsActions } from '../../../store/movements';
import BaseCard from '../../base/BaseCard';
import BaseDropdown from '../../base/BaseDropdown';
import BaseHelpText from '../../base/BaseHelpText';
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

  const dropdownHead = (
    <div className="v-grid-space-between">
      <label>Tags:</label>
      <BaseHelpText title="Tags">Tags help text</BaseHelpText>
    </div>
  );

  return (
    <BaseCard background="white">
      <BaseDropdown head={dropdownHead} isOpen={assignedTags && true} hasToggle>
        {tags.map((tag) => (
          <Tag key={tag.id} onClick={() => toggleTagAssignment(tag)}>
            {tag.title}
          </Tag>
        ))}
      </BaseDropdown>
    </BaseCard>
  );
};

export default MovementTags;
