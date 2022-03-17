import { useReducer } from 'react';

import TagsContext from './tags-context';

// Use this for inital dummy tags data
const defaultTagsState = {
  tags: [
    {
      id: Math.random().toString(),
      title: '🧢 Kleidung',
    },
    {
      id: Math.random().toString(),
      title: '🥢 Food',
    },
    {
      id: Math.random().toString(),
      title: '🎮 Gaming',
    },
    {
      id: Math.random().toString(),
      title: '👨🏽‍💻 Apple',
    },
  ],
};

const tagsReducer = (state, action) => {
  if (action.type === 'ADD') {
    // Array.prototype.concat() returns a new array and pushes the argument into it
    const updatedTags = state.tags.concat(action.tag);
    return {
      tags: updatedTags,
    };
  }
  if (action.type === 'REMOVE') {
  }
  if (action.type === 'UPDATE') {
  }

  return defaultTagsState;
};

const TagsProvider = (props) => {
  const [tagsState, dispatchTagsAction] = useReducer(
    tagsReducer,
    defaultTagsState
  );

  const addTag = (tag) => {
    dispatchTagsAction({ type: 'ADD', tag: tag });
    console.log('1: addTag');
  };

  const deleteTag = (id) => {
    dispatchTagsAction({ type: 'REMOVE', id: id });
  };

  const tagsContext = {
    tags: tagsState.tags,
    addTag: addTag,
    deleteTag: deleteTag,
  };

  return (
    <TagsContext.Provider value={tagsContext}>
      {props.children}
    </TagsContext.Provider>
  );
};

export default TagsProvider;
