import client from "../models/models.";

const createContactForm = async (req, res) => {
    try {
        const { formData } = req.body;

        const createForm = await client.query('INSERT INTO Contact_Form (Full_Name, Email, Message) VALUES ($1, $2, $3) RETURNING *', [formData.fullName, formData.email, formData.message]);

        if (createForm.rows.length > 0) {
            res.status(200).json("Form Submitted Successfully");
        } else {
            res.status(500).json("Error submitting Form");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json("An error occurred while submitting the form."); 
    }
};

module.exports = { createContactForm };
