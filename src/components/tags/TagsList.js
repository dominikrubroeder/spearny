import { useState } from 'react';
import { useSelector } from 'react-redux';

import Tag from './Tag';
import TagsAddForm from './TagsAddForm';
import BaseCard from '../base/BaseCard';
import BaseButton from '../base/BaseButton';

const TagsList = (props) => {
  const tags = useSelector((state) => state.tags.tags);
  const [showAddForm, setShowAddForm] = useState(false);
  const tagBackground = props.tagBackground || 'light';

  const enableAdding = () => {
    setShowAddForm(() => true);
  };

  return (
    <div className="v-grid-gap-small">
      {tags.map((tag) => (
        <Tag key={tag.id}>{tag.title}</Tag>
      ))}
      {showAddForm && <TagsAddForm />}
      <BaseCard mode="tag" background={tagBackground}>
        <BaseButton mode="text" priority="primary" onClick={enableAdding}>
          +Add new tag
        </BaseButton>
      </BaseCard>
    </div>
  );
};

export default TagsList;
