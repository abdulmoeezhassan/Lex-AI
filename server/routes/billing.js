const express = require('express');
const sendPayment =require('../controllers/billing.js')

const router = express.Router();



router.post('/billing', sendPayment);

module.exports = router;