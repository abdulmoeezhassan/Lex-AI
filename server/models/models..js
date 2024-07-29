const { Client } = require('pg');
const dotenv =require("dotenv");

dotenv().config();

const client = new Client({
    user: process.env.POSTGRES_USER,
    host: 'localhost',
    database: 'Lex-AI',
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
});

client.connect()
    .then(() => {
        console.log("Connected to PostgreSQL");
        const ContactFormTable = `
        CREATE TABLE IF NOT EXISTS Contact_Form(
         Full_Name VARCHAR(500),
         Email VARCHAR(500),
         Message VARCHAR(500),
        )`;
        return Promise.all([
            client.query(ContactFormTable),
        ]).then(() => {
            console.log("Tables Created or already existed");
        }).catch(error => {
            console.log("Error Connecting to PostgreSQL", error);
        })
    })

module.exports = client;