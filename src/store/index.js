import { configureStore } from '@reduxjs/toolkit';

import movementsReducer from './movements';
import tagsReducer from './tags';
import paymentMethodsReducer from './payment-methods';
import paymentPartnersReducer from './payment-partner';

const store = configureStore({
  reducer: {
    movements: movementsReducer,
    tags: tagsReducer,
    paymentMethods: paymentMethodsReducer,
    paymentPartners: paymentPartnersReducer,
  },
});

export default store;
