import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { tagsActions } from '../../store/tags';
import BaseCard from '../base/BaseCard';
import BaseButton from '../base/BaseButton';

const TagsAddForm = () => {
  const dispatch = useDispatch();
  const newTagTitle = useRef();

  const addTag = (e) => {
    e.preventDefault();

    const newTag = {
      id: Math.random().toString(),
      title: newTagTitle.current.value,
    };
    dispatch(tagsActions.add(newTag));

    newTagTitle.current.value = '';
  };

  return (
    <BaseCard mode="tag" background="light">
      <form className="v-grid-space-between-no-wrap" onSubmit={addTag}>
        <input type="text" placeholder="Tag title..." ref={newTagTitle} />
        <BaseButton type="submit" mode="text" priority="primary">
          +
        </BaseButton>
      </form>
    </BaseCard>
  );
};

export default TagsAddForm;
