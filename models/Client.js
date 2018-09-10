const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    ERCID: { Type: String, required: true },
    Therapist: { type: Schema.ObjectId, ref: "Therapist" }
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = User;