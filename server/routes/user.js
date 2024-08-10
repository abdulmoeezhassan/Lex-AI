const express = require('express');
const { createUser, getAllUsers } = require('../controllers/user.js');


const router = express.Router();


router.post('/createuser', createUser);
router.get('/getusers', getAllUsers);


module.exports = router;