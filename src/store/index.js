import { configureStore } from '@reduxjs/toolkit';

import movementsReducer from './movements';
import tagsReducer from './tags';
import paymentMethodsReducer from './payment-methods';
import paymentReceiverReducer from './payment-receiver';

const store = configureStore({
  reducer: {
    movements: movementsReducer,
    tags: tagsReducer,
    paymentMethods: paymentMethodsReducer,
    paymentReceivers: paymentReceiverReducer,
  },
});

export default store;
