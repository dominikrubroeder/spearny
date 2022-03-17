import { useContext, useRef } from 'react';
import TagsContext from '../../store/tags-context';
import BaseCard from '../base/BaseCard';
import BaseButton from '../base/BaseButton';

const TagsAddForm = () => {
  const tagsCtx = useContext(TagsContext);
  const newTagTitle = useRef();

  const addTag = (e) => {
    e.preventDefault();

    const newTag = {
      id: Math.random().toString(),
      title: newTagTitle.current.value,
    };
    tagsCtx.addTag(newTag);

    newTagTitle.current.value = '';
  };

  return (
    <BaseCard background="light">
      <form onSubmit={addTag}>
        <input type="text" placeholder="Add new tag..." ref={newTagTitle} />
        <BaseButton type="submit" mode="link" priority="primary">
          +
        </BaseButton>
      </form>
    </BaseCard>
  );
};

export default TagsAddForm;
