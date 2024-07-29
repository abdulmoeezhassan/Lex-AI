const express = require("express");
const dotenv = require("dotenv");
const ContactForm =require("./routes/contactFrom.js");

const app=express();



app.use(express.json());
dotenv.config();

const PORT=process.env.PORT || 3002;

app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
})