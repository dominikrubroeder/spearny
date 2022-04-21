import { createSlice } from '@reduxjs/toolkit';

const initialpaymentPartners = {
  paymentPartners: [
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

const paymentPartnersSlice = createSlice({
  name: 'paymentPartners',
  initialState: initialpaymentPartners,
  reducers: {
    add(state, action) {
      const newPaymentPartner = action.payload;
      const updatedPaymentPartners =
        state.paymentPartners.concat(newPaymentPartner);
      const sortedpaymentPartners = updatedPaymentPartners.sort(function (
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
      state.paymentPartners = sortedpaymentPartners;
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

export const paymentPartnersActions = paymentPartnersSlice.actions;

export default paymentPartnersSlice.reducer;
