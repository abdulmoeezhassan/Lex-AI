const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const ContactForm =require("./routes/contactFrom.js");
const billing =require("./routes/billing.js");
const app=express();



app.use(express.json());
dotenv.config();


app.use('/api/user',ContactForm);
app.use('/api/user', billing);

const PORT=process.env.PORT || 3002;

app.use(cors());

app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
})