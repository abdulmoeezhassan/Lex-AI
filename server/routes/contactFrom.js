const express = require("express");
const createContactForm = require("../controllers/contactForm.js");

const router = express.Router();

router.post('/api/contact', createContactForm);


exports.router =  router;

