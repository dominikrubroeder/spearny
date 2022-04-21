import { createSlice } from '@reduxjs/toolkit';

const initialPaymentMethods = {
  paymentMethods: [
    {
      id: Math.random().toString(),
      title: 'Cash',
    },
    {
      id: Math.random().toString(),
      title: 'PayPal',
    },
    {
      id: Math.random().toString(),
      title: 'Invoice',
    },
    {
      id: Math.random().toString(),
      title: 'VISA',
    },
    {
      id: Math.random().toString(),
      title: 'Mastercard',
    },
    {
      id: Math.random().toString(),
      title: 'Klarna',
    },
    {
      id: Math.random().toString(),
      title: 'American Express',
    },
  ],
};

const paymentMethodsSlice = createSlice({
  name: 'paymentMethods',
  initialState: initialPaymentMethods,
  reducers: {
    add(state, action) {
      const newPaymentMethod = action.payload;
      state.paymentMethods = state.paymentMethods.concat(newPaymentMethod);
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
