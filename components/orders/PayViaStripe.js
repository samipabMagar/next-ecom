import React, { useState } from "react";
import Modal from "../Modal";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {config} from "@/config/config";
import { confirmPayment, payViaStripe } from "@/api/orders";
import { toast } from "react-toastify";

const CheckOutForm = ({ id }) => {
  const [show, setShow] = useState(false);
  const stripe = useStripe(); //get the stripe object from the context
  const elements = useElements();  //get the elements object from the context, which is used to create payment method and confirm card payment
  const initPaymentViaStripe = async () => {
    try {
      const res = await payViaStripe(id);
      const clientSecret = res.client_secret; //get the client secret from the response.

      const result = await stripe.confirmCardPayment(clientSecret, { //confirm the card payment with the client secret and the card details
        payment_method: { //create a payment method with the card details
          card: elements.getElement(CardElement), //get the card element from the elements object and pass it to the payment method
        },
      });

      if (result && result.paymentIntent?.status == "succeeded") { //if the payment is successful, confirm the payment on the server and show a success message
        await confirmPayment(id);

        setShow(false);
        return toast.success("Payment successful!");
      }
    } catch (error) {
      toast.error("Payment failed:", error);
    }
  };
  return (
    <>
      <button onClick={() => setShow(true)} className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 cursor-pointer">
        Pay Via Stripe
      </button>
      <Modal
        show={show}
        setShow={setShow}
        title="Card Payment"
        onConfirm={initPaymentViaStripe}
      >
            <div className="py-10">
          <CardElement />
        </div>
      </Modal>
    </>
  );
};

const PayViaStripe = ({ id }) => {
  const stripePromise = loadStripe(config.stripeKey); //init stripe with publishable key
  return (
    //wrap the component with Elements provider and pass the stripe promise to it
    //Elements provider will make the stripe object available to all the components inside it
    <Elements stripe={stripePromise}> 
      <CheckOutForm id={id} />
    </Elements>
  );
};

export default PayViaStripe;
