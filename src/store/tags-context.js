import React from 'react';

const TagsContext = React.createContext({
  tags: [],
  addTag: (tag) => {},
  deleteTag: (id) => {},
  updateTag: (id) => {},
});

export default TagsContext;
