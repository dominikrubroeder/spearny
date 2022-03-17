import { useState, useContext } from 'react';
import TagsContext from '../../store/tags-context';
import TagsAddForm from './TagsAddForm';
import BaseCard from '../base/BaseCard';
import BaseButton from '../base/BaseButton';

const TagsList = () => {
  const tagsCtx = useContext(TagsContext);
  const [showAddForm, setShowAddForm] = useState(false);

  const enableAdding = () => {
    setShowAddForm(() => true);
  };

  return (
    <div className="v-grid-gap-small">
      {tagsCtx.tags.map((tag) => (
        <BaseCard background="light" key={tag.id}>
          {tag.title}
        </BaseCard>
      ))}
      {showAddForm && <TagsAddForm />}
      <BaseCard background="light">
        <BaseButton mode="link" priority="primary" onClick={enableAdding}>
          +Add new tag
        </BaseButton>
      </BaseCard>
    </div>
  );
};

export default TagsList;
