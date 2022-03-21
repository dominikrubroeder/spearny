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
      receivedBy: null,
      receivedFrom: null,
      paidBy: 'PayPal',
      paidTo: 'Zalando GmbH',
      showDetails: false,
      editMode: false,
    },
    {
      id: new Date().toISOString() + Math.random(),
      type: 'expense',
      title: 'iPhone 13 Pro Max',
      amount: 1429.99,
      description: 'Movement description/notes...',
      dateAdded: new Date().toDateString(),
      tags: ['Apple'],
      receivedBy: null,
      receivedFrom: null,
      paidBy: 'VISA',
      paidTo: 'Apple Inc.',
      showDetails: false,
      editMode: false,
    },
    {
      id: new Date().toISOString() + Math.random(),
      type: 'income',
      title: 'Taschengeld',
      amount: 100,
      description: 'Movement description/notes...',
      dateAdded: new Date().toDateString(),
      tags: null,
      receivedBy: 'Cash',
      receivedFrom: 'Parents',
      paidBy: null,
      paidTo: null,
      showDetails: false,
      editMode: false,
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
      paidBy: null,
      paidTo: null,
      showDetails: false,
      editMode: false,
    },
    {
      id: new Date().toISOString() + Math.random(),
      type: 'expense',
      title: 'Restaurant Il Soprano',
      amount: 55,
      description: 'Movement description/notes...',
      dateAdded: new Date().toDateString(),
      tags: ['Food', 'Italien food'],
      receivedBy: null,
      receivedFrom: null,
      paidBy: 'Cash',
      paidTo: 'Restaurant Il Soprano',
      showDetails: false,
      editMode: false,
    },
  ],
};

const movementsSlice = createSlice({
  name: 'movements',
  initialState: initialMovementsState,
  reducers: {
    getMovementById(state, action) {
      const movementId = action.payload.id;
      return state.movements.find((movement) => movement.id === movementId);
    },
    add(state, action) {
      const newMovement = action.payload;
      state.movements.unshift(newMovement);
    },
    update(state, action) {
      const updatedProperty = action.payload.updatedProperty;
      const updatedValue = action.payload.updatedValue;
      const movementId = action.payload.id;

      const movementIndex = state.movements.findIndex(
        (movement) => movement.id === movementId
      );

      state.movements[movementIndex][updatedProperty] = updatedValue;
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
