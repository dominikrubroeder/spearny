import { createSlice } from '@reduxjs/toolkit';

const initialMovementsState = {
  movements: [],
};

const movementsSlice = createSlice({
  name: 'movements',
  initialState: initialMovementsState,
  reducers: {
    setMovements(state, action) {
      state.movements = action.payload;
    },
    add(state, action) {
      const newMovement = action.payload;
      state.movements.unshift(newMovement);
    },
    delete(state, action) {
      const movementId = action.payload;
      state.movements = state.movements.filter(
        (movement) => movement.id !== movementId
      );
    },
    update(state, action) {
      const updatedMovement = action.payload;

      const movementIndex = state.movements.findIndex(
        (movement) => movement.id === updatedMovement.id
      );

      state.movements[movementIndex] = updatedMovement;
    },
    updateProperty(state, action) {
      const updatedProperty = action.payload.updatedProperty;
      const updatedValue = action.payload.updatedValue;
      const movementId = action.payload.id;

      const movementIndex = state.movements.findIndex(
        (movement) => movement.id === movementId
      );

      state.movements[movementIndex][updatedProperty] = updatedValue;
    },
    sort(state, action) {
      const sortingMode = action.payload;

      switch (sortingMode) {
        case 'alphabetical':
          state.movements = state.movements.sort((a, b) => {
            const movementTitleA = a.title.toLowerCase();
            const movementTitleB = b.title.toLowerCase();
            if (movementTitleA < movementTitleB)
              //sort string ascending
              return -1;
            if (movementTitleA > movementTitleB) return 1;
            return 0;
          });
          break;
        case 'date-added-first':
          state.movements = state.movements.sort((a, b) => {
            const movementTitleA = a.dateAdded.toLowerCase();
            const movementTitleB = b.dateAdded.toLowerCase();
            if (movementTitleA < movementTitleB)
              //sort string ascending
              return -1;
            if (movementTitleA > movementTitleB) return 1;
            return 0;
          });
          break;
        default:
          console.log('Default: no sorting mode changes');
          break;
      }
    },
    filter(state, action) {
      const filter = action.payload;

      switch (filter) {
        case 'show-all':
          state.movements = state.movements.map((movement) => {
            return { ...movement, isVisible: true };
          });
          console.log(state.movements);
          break;
        case 'hide-expenses':
          state.movements = state.movements.map((movement) => {
            if (movement.type === 'expense') {
              return { ...movement, isVisible: false };
            } else {
              return { ...movement, isVisible: true };
            }
          });
          console.log(state.movements);
          break;
        case 'hide-income':
          state.movements = state.movements.map((movement) => {
            if (movement.type === 'income') {
              return { ...movement, isVisible: false };
            } else {
              return { ...movement, isVisible: true };
            }
          });
          console.log(state.movements);
          break;
        default:
          console.log('Default: no filter mode');
          break;
      }
    },
    toggleTagAssignment(state, action) {
      const movementId = action.payload.movementId;
      const tag = action.payload.tag;
      const movementIndex = state.movements.findIndex(
        (movement) => movement.id === movementId
      );

      if (!state.movements[movementIndex].tags)
        state.movements[movementIndex].tags = [];

      if (
        state.movements[movementIndex].tags.findIndex(
          (curTag) => curTag.id === tag.id
        ) === -1
      ) {
        state.movements[movementIndex].tags.push(tag);
      } else {
        state.movements[movementIndex].tags = state.movements[
          movementIndex
        ].tags.filter((curTag) => curTag.id !== tag.id);
      }

      console.log(state.movements[movementIndex].tags);
    },
    // This is not working yet (get movement by id, createSelector/useSelector hook?)
    // getMovementById(state, action) {
    //   const movementId = action.payload.id;
    //   return state.movements.find((movement) => movement.id === movementId);
    // },
  },
});

export const movementsActions = movementsSlice.actions;

export default movementsSlice.reducer;
