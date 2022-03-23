import { movementsActions } from './movements';

export const sendNewMovement = (newMovement) => {
  return async (dispatch) => {
    const sendRequest = async () => {
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
      await sendRequest();
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
          tags: responseData[key].tags || null,
          paidBy: responseData[key].paidBy || null,
          paidTo: responseData[key].paidTo || null,
          showDetails: false,
        };
        movements.unshift(movement);
      }

      dispatch(movementsActions.setMovements(movements));
    } catch (error) {
      console.log(error.message);
    }
  };
};
