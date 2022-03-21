import { createSlice } from '@reduxjs/toolkit';

// Use this for inital dummy tags data
const initialTagsState = {
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
    {
      id: Math.random().toString(),
      title: '🎥 Cinema',
    },
  ],
};

const tagsSlice = createSlice({
  name: 'tags',
  initialState: initialTagsState,
  reducers: {
    add(state, action) {
      const newTag = action.payload;
      state.tags = state.tags.concat(newTag);
    },
    // delete(state, action) {
    //   const tagId = action.payload;
    // },
    // update(state, action) {
    //   const updatedTag = action.payload;
    //   // index, update Tag...
    // },
  },
});

export const tagsActions = tagsSlice.actions;

export default tagsSlice.reducer;
