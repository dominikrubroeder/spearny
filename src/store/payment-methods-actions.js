import { paymentMethodsActions } from './payment-methods';

export const fetchPaymentMethods = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-spearny-default-rtdb.firebaseio.com/payment-methods.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch payment methods!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const responseData = await fetchData();

      const paymentMethods = [];
      for (const key in responseData) {
        const paymentMethod = {
          id: key,
          title: responseData[key].title,
        };
        paymentMethods.push(paymentMethod);
      }

      dispatch(paymentMethodsActions.setPaymentMethods(paymentMethods));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const sendNewPaymentMethod = (newPaymentMethod) => {
  return async () => {
    const sendAddRequest = async () => {
      const response = await fetch(
        'https://react-spearny-default-rtdb.firebaseio.com/payment-methods.json',
        {
          method: 'POST',
          body: JSON.stringify({ title: newPaymentMethod.title }),
        }
      );

      if (!response.ok) {
        throw new Error(`Sending payment method "${newPaymentMethod}" failed.`);
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
