const express = require('express');
const stripe = require('stripe')('sk_test_51PiVILRuyWvYsE9NVnTRPzNWfQ162BSadz2Xti7XFP6GVi4n5581PaLd6wZaTu6uJdxSewN7vEjlT5rqx6ZzUtfm00RFqBeU3F');

const sendPayment = async(req,res) =>{
  console.log("Payment");
    try{
      const { token, amount } = req.body;
      const charge = await stripe.charges.create({
        amount:amount*100,
        currency:'usd',
        source: token
      });
      
      res.status(200).json({success: charge});
      
    }
    catch(e){
      res.status(500).json({error: e.message})
      throw (e);
    }
}


module.exports = sendPayment ;