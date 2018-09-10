const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SurveyTemplate = new Schema({
    Timeframe: {
        Monthly: {Type: Boolean,required: true},
        Month: {Type: Date},
        Start: {Type: Date},
        End: {Type: Date},
        //turn surveys off and on
        Active: {Type: Boolean, required: true},
    },
    Questions: []
});

const SurveyTemplate = mongoose.model("SurveyTemplate", SurveySchema);

module.exports = User;