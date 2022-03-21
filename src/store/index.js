import { configureStore } from '@reduxjs/toolkit';

import movementsReducer from './movements';
import tagsReducer from './tags';

const store = configureStore({
  reducer: { movements: movementsReducer, tags: tagsReducer },
});

export default store;
