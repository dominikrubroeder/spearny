import { paymentPartnersActions } from './payment-partner';

export const fetchPaymentPartners = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-spearny-default-rtdb.firebaseio.com/payment-partners.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch payment partners!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const responseData = await fetchData();

      const paymentPartners = [];
      for (const key in responseData) {
        const paymentPartner = {
          id: key,
          title: responseData[key].title,
        };
        paymentPartners.push(paymentPartner);
      }

      dispatch(paymentPartnersActions.setPaymentPartners(paymentPartners));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const sendNewPaymentPartner = (newPaymentPartner) => {
  return async () => {
    const sendAddRequest = async () => {
      const response = await fetch(
        'https://react-spearny-default-rtdb.firebaseio.com/payment-partners.json',
        {
          method: 'POST',
          body: JSON.stringify({ title: newPaymentPartner.title }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Sending payment parnter "${newPaymentPartner.title}" failed.`
        );
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
