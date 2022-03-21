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