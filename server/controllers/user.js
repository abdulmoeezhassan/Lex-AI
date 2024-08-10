const client = require('../models/db.js');


const createUser = async (req, res) => {
    const profile = req.body;
    console.log(profile);
    console.log(profile.email);
    console.log(profile.name);
    console.log(profile.id)
    try {
        const createUser = await client.query(
            'INSERT INTO User_Table (Full_Name, Email, user_id) VALUES ($1, $2, $3) RETURNING *',
            [profile.name, profile.email, profile.id]
          );
  
      if (createUser.rows.length > 0) {
        res.status(200).json("User Created Successfully");
      } else {
        res.status(404).json("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Something went wrong");
    }
};
  
const getAllUsers = async(req, res) => {
    console.log("Hello")
    try{
          const getUsers = await client.query('SELECT * FROM User_Table');
          if(getUsers){
             const rows = getUsers.rows;
              res.status(200).json(rows);
          }
          else{
              res.status(404).json("Something went wrong");
          }
    }
    catch(error){
      console.log(error);
      res.status(500).json("Somthing went wrong");
    }
  }
module.exports = { createUser, getAllUsers };