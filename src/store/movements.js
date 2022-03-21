import { createSlice } from '@reduxjs/toolkit';

const initialMovementsState = {
  movements: [
    {
      id: new Date().toISOString() + Math.random(),
      type: 'expense',
      title: 'Adidas Hoodie',
      amount: 99.99,
      description: 'Movement description/notes...',
      dateAdded: new Date().toDateString(),
      tags: ['Kleidung', 'Zalando', 'Adidas'],
      paidBy: 'PayPal',
      paidTo: 'Zalando',
    },
    {
      id: new Date().toISOString() + Math.random(),
      type: 'income',
      title: 'Taschengeld',
      amount: 100,
      description: 'Movement description/notes...',
      dateAdded: new Date().toDateString(),
      tags: [],
      receivedBy: 'Cash',
      receivedFrom: 'Parents',
    },
    {
      id: new Date().toISOString() + Math.random(),
      type: 'income',
      title: 'Create Website',
      amount: 1600,
      description: 'Movement description/notes...',
      dateAdded: new Date().toDateString(),
      tags: ['Work', 'Design', 'Development'],
      receivedBy: 'Bank transfer',
      receivedFrom: 'Mustermann GmbH',
    },
    {
      id: new Date().toISOString() + Math.random(),
      type: 'expense',
      title: 'Restaurant Il Soprano',
      amount: 55,
      description: 'Movement description/notes...',
      dateAdded: new Date().toDateString(),
      tags: ['Food', 'Italien food'],
      paidBy: 'Cash',
      paidTo: 'Restaurant Il Soprano',
    },
  ],
};

const movementsSlice = createSlice({
  name: 'movements',
  initialState: initialMovementsState,
  reducers: {
    add(state, action) {
      const newMovement = action.payload;
      state.movements.unshift(newMovement);
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

export const movementsActions = movementsSlice.actions;

export default movementsSlice.reducer;
