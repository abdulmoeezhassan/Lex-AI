const { Client } = require('pg');
const dotenv = require("dotenv");

dotenv.config();

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Lex-AI',
    password: 'postgres',
    port: 5432,
});

client.connect()
    .then(() => {
        console.log("Connected to PostgreSQL");

        const ContactFormTable = `
        CREATE TABLE IF NOT EXISTS Contact_Form (
         Full_Name VARCHAR(500),
         Email VARCHAR(500),
         Message VARCHAR(500)
        )`;

        const UserTable = `
        CREATE TABLE IF NOT EXISTS User_Table (
         Full_Name VARCHAR(500),
         Email VARCHAR(500),
         user_id VARCHAR(500)
        )`;

        return Promise.all([
            client.query(ContactFormTable),
            client.query(UserTable),
        ]).then(() => {
            console.log("Tables Created or already existed");
        }).catch(error => {
            console.log("Error Connecting to PostgreSQL", error);
        })
    });

module.exports = client;
