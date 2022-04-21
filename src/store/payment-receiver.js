import { createSlice } from '@reduxjs/toolkit';

const initialpaymentReceivers = {
  paymentReceivers: [
    {
      id: Math.random().toString(),
      title: 'Amazon Inc.',
    },
    {
      id: Math.random().toString(),
      title: 'Apple Inc.',
    },
    {
      id: Math.random().toString(),
      title: 'Luca Walther',
    },
    {
      id: Math.random().toString(),
      title: 'Patrick Rubröder',
    },
    {
      id: Math.random().toString(),
      title: 'Restaurant Il Soprano',
    },
    {
      id: Math.random().toString(),
      title: 'Starbucks',
    },
    {
      id: Math.random().toString(),
      title: 'Zalando GmbH',
    },
  ],
};

const paymentReceiversSlice = createSlice({
  name: 'paymentReceivers',
  initialState: initialpaymentReceivers,
  reducers: {
    add(state, action) {
      const newPaymentReceiver = action.payload;
      const updatedPaymentReceivers =
        state.paymentReceivers.concat(newPaymentReceiver);
      const sortedPaymentReceivers = updatedPaymentReceivers.sort(function (
        a,
        b
      ) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      state.paymentReceivers = sortedPaymentReceivers;
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

export const paymentReceiversActions = paymentReceiversSlice.actions;

export default paymentReceiversSlice.reducer;
