const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    Personal: {
        FirstName: { type: String, required: true },
        LastName: { type: String, required: true },
        //LCSW, LFMT ETC
        Title: { type: String, required: true },
        //Owner//Intern//Therapist
        Role: { type: String, required: true },
    },

    Work: {
        //Able to work on other user models
        Administrator: { type: Boolean, required: true },
        //allows us to key value the user surveys based on the owner
        //pairs with Survey Key "Survey Administrator"
        Surveys: [{ type: Schema.ObjectId, ref: "Survey" }],
        //Allows to track against the UID for the Clients
        Clients: [{ type: Schema.ObjectId, ref: "Clients" }]
    }

});

const Employee = mongoose.model("Employee", UserSchema);

module.exports = User;