import { createSlice } from '@reduxjs/toolkit';

const initialPaymentMethods = {
  paymentMethods: [
    {
      id: Math.random().toString(),
      title: 'American Express',
    },
    {
      id: Math.random().toString(),
      title: 'Bank transfer',
    },
    {
      id: Math.random().toString(),
      title: 'Cash',
    },
    {
      id: Math.random().toString(),
      title: 'Invoice',
    },
    {
      id: Math.random().toString(),
      title: 'Klarna',
    },
    {
      id: Math.random().toString(),
      title: 'PayPal',
    },
    {
      id: Math.random().toString(),
      title: 'VISA',
    },
  ],
};

const paymentMethodsSlice = createSlice({
  name: 'paymentMethods',
  initialState: initialPaymentMethods,
  reducers: {
    setPaymentMethods(state, action) {
      state.paymentMethods = [...state.paymentMethods, ...action.payload];
    },
    add(state, action) {
      const newPaymentMethod = action.payload;
      const updatedPaymentMethods =
        state.paymentMethods.concat(newPaymentMethod);
      const sortedPaymentMethods = updatedPaymentMethods.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      state.paymentMethods = sortedPaymentMethods;
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

export const paymentMethodsActions = paymentMethodsSlice.actions;

export default paymentMethodsSlice.reducer;
