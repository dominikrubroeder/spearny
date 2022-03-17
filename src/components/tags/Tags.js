import TagsList from './TagsList';
import BaseDropdown from '../base/BaseDropdown';

const Tags = () => {
  return (
    <div>
      <BaseDropdown head={<h2>Tags</h2>}>
        <TagsList />
      </BaseDropdown>
    </div>
  );
};

export default Tags;
