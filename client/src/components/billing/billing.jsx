import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from "axios";

const stripePromise = loadStripe("pk_test_51PiVILRuyWvYsE9N2L4wsSeCwrIaWMMc6m4af4ZizxviRXDhSzkhYSlFMZND7tCxFAxYFaxAKvkb3d69iVObOQ7v00qIDnqvoG");

export const Billing = (props) => {
  const { price } = props;
  const [CardholderName, setCardholderName] = useState('');
  const [Price, setPrice] = useState('');
  const [error, setError] = useState({});

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    setPrice(price);
  }, [price]);

  const handleError = () => {
    let newError = {};
    if (CardholderName.trim().length === 0) newError.name = 'Please Enter Your Name';
    setError(newError);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleError();

    if (Object.keys(error).length === 0) {
      const cardNumberElement = elements.getElement(CardNumberElement);
      const cardExpiryElement = elements.getElement(CardExpiryElement);
      const cardCvcElement = elements.getElement(CardCvcElement);

      const { error, token } = await stripe.createToken(cardNumberElement, {
        name: CardholderName,
      });

      if (error) {
        console.log(error);
      } else {
        axios.post(`${process.env.REACT_APP_SERVER}/api/user/billing`, {
          token: token.id,
          amount: Price,
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      }
    }
  };

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "white",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "white"
        }
      },
      invalid: {
        color: "white",
        iconColor: "white"
      }
    }
  };

  return (
    <div className="pt-14">
      <div>
        <h1 className="text-center text-5xl text-white">Billing</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center flex-col gap-8">
          <div className="pt-14">
            <input 
              placeholder="Card holder name" 
              value={CardholderName} 
              onChange={(e) => setCardholderName(e.target.value)} 
              className="h-14 lg:w-[20vw] md:w-[25vw] w-[70vw] rounded-md p-2 border border-gray-300" 
            />
            {error.name && <span className="text-red-400">{error.name}</span>}
          </div>
          <div className="w-[70vw] md:w-[25vw] lg:w-[20vw]">
            <CardNumberElement options={CARD_ELEMENT_OPTIONS} className="h-14 rounded-md p-2 border border-gray-300" />
          </div>
          <div className="w-[70vw] md:w-[25vw] lg:w-[20vw]">
            <CardExpiryElement options={CARD_ELEMENT_OPTIONS} className="h-14 rounded-md p-2 border border-gray-300" />
          </div>
          <div className="w-[70vw] md:w-[25vw] lg:w-[20vw]">
            <CardCvcElement options={CARD_ELEMENT_OPTIONS} className="h-14 rounded-md p-2 border border-gray-300" />
          </div>
          <div className="pb-7">
            <input 
              placeholder="Price" 
              value={price} 
              // readOnly 
              className="h-14 lg:w-[20vw] md:w-[25vw] w-[70vw] rounded-md p-2 border border-gray-300" 
            />
          </div>
        </div>
        <div className="flex items-center justify-center pt-8">
          <button 
            className="text-white border w-40 hover:bg-slate-400 h-10 rounded-md" 
            type="submit"
            disabled={!stripe}
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};