const router = require("express").Router();
const phonesAPI = require('./phonesAPI');

// Use the phones route 
router.route("/ercphones/ping/:therapist")
    .get(phonesAPI.ping);

module.exports = router;