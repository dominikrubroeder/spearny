import { configureStore } from '@reduxjs/toolkit';

import movementsReducer from './movements';
import tagsReducer from './tags';
import paymentMethodsReducer from './payment-methods';

const store = configureStore({
  reducer: {
    movements: movementsReducer,
    tags: tagsReducer,
    paymentMethods: paymentMethodsReducer,
  },
});

export default store;
