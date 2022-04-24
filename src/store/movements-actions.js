import { movementsActions } from './movements';

export const sendNewMovement = (newMovement) => {
  return async (dispatch) => {
    const sendAddRequest = async () => {
      const response = await fetch(
        'https://react-spearny-default-rtdb.firebaseio.com/movements.json',
        {
          method: 'POST',
          body: JSON.stringify(newMovement),
        }
      );

      if (!response.ok) {
        throw new Error('Sending movement failed.');
      }
    };

    try {
      await sendAddRequest();
      // Do some other stuff...
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchMovements = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-spearny-default-rtdb.firebaseio.com/movements.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch movements!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const responseData = await fetchData();

      const movements = [];
      for (const key in responseData) {
        const movement = {
          id: key,
          dateAdded: responseData[key].dateAdded,
          type: responseData[key].type,
          title: responseData[key].title,
          amount: responseData[key].amount,
          description: responseData[key].description || null,
          isRegular: responseData[key].isRegular || null,
          tags: responseData[key].tags || null,
          paidBy: responseData[key].paidBy || null,
          paidTo: responseData[key].paidTo || null,
          receivedBy: responseData[key].receivedBy || null,
          receivedFrom: responseData[key].receivedFrom || null,
          showDetails: false,
          isVisible: true,
        };
        movements.unshift(movement);
      }

      dispatch(movementsActions.setMovements(movements));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updateMovement = (updatedMovement) => {
  return async (dispatch) => {
    const sendUpdateRequest = async () => {
      const response = await fetch(
        `https://react-spearny-default-rtdb.firebaseio.com/movements/${updatedMovement.id}.json`,
        {
          method: 'PATCH',
          body: JSON.stringify({
            dateAdded: updatedMovement.dateAdded,
            type: updatedMovement.type,
            title: updatedMovement.title,
            amount: updatedMovement.amount,
            description: updatedMovement.description,
            isRegular: updatedMovement.isRegular,
            tags: updatedMovement.tags,
            paidBy: updatedMovement.paidBy,
            paidTo: updatedMovement.paidTo,
            receivedBy: updatedMovement.receivedBy,
            receivedFrom: updatedMovement.receivedFrom,
            showDetails: false,
            isVisible: true,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Updating movement ${updatedMovement.id} failed.`);
      }
    };

    try {
      await sendUpdateRequest();
    } catch (error) {
      console.log(error.message);
    }
  };
};
