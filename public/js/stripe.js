/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51JU5UgK0w9DC3f48JRP4NwSGBjj3lLYOSRwqpKAwKSaw2HaY9t0EJzlPRnhUPUWDwCZnokgBHCB948z1VY7EOxHK003tLhwpCh'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2)  Create checkout form + charge credit card
    stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};

// const elements =
