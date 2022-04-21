import { createSlice } from '@reduxjs/toolkit';

const initialpaymentReceivers = {
  paymentReceivers: [
    {
      id: Math.random().toString(),
      title: 'Zalando GmbH',
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
      title: 'Apple Inc.',
    },
    {
      id: Math.random().toString(),
      title: 'Starbucks',
    },
    {
      id: Math.random().toString(),
      title: 'Restaurant Il Soprano',
    },
    {
      id: Math.random().toString(),
      title: 'Amazon Inc.',
    },
  ],
};

const paymentReceiversSlice = createSlice({
  name: 'paymentReceivers',
  initialState: initialpaymentReceivers,
  reducers: {
    add(state, action) {
      const newpaymentReceiver = action.payload;
      state.paymentReceivers =
        state.paymentReceivers.concat(newpaymentReceiver);
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
