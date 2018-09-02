const puretext = require('puretext');

let counter = 0;
const env = process.env;
const amandaPhone = env.amandaPhone;
const brendaPhone = env.brendaPhone;
const jacobPhone = env.jacobPhone;
const anaPhone = env.anaPhone;
const sendNumber = env.sendNumber;
const test1 = env.test1;
const test2 = env.test2;

module.exports = {

    //ping function
    ping: (req, res) => {
        //save the therapist in an easy format
        const therapist = req.params.therapist;
        //phone number placholder
        let ping = "";
        let body = "";
        const send =sendNumber; 
        const token = "e5dssb";
        //check the value of therapist and then 
        switch (therapist) {
            case "Jacob":
                {
                    ping = test1;
                    body = "Jacob your client is ready for you."
                    console.log(jacobPhone);
                };
                break;
            case "Amanda":
                {
                    ping = test1;
                    body = "Amanda your client is ready for you."
                    console.log(amandaPhone);
                };
                break;
            case "Brenda":
                {
                    ping = test2;
                    body = "Brenda your client is ready for you."
                    console.log(brendaPhone);
                };
                break;
                case "Ana":
                {
                    ping = test1
                    body = "Ana your client is ready for you."
                    console.log(anaPhone);
                }
        }
        let text = {
            toNumber: ping,
            fromNumber: send,
            smsBody: body,
            apiToken: token
        }
        puretext.send(text, (err, response) => {
            if (err) console.log(err);
            else {
                counter++;
                console.log("-------------");
                console.log("successful send ", counter);
                console.log("-------------");
                console.log(response)
            }
            console.log("-------------");

        }
        )
    }


}
