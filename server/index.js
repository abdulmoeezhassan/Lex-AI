const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const ContactForm =require("./routes/contactFrom.js");
const billing =require("./routes/billing.js");
const user = require('./routes/user.js');
const app=express();
app.use(cors());


app.use(express.json());
dotenv.config();

app.use('/api/user',ContactForm);
app.use('/api/user', billing);
app.use('/api/user', user);

const PORT=process.env.PORT || 3002;


app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
})