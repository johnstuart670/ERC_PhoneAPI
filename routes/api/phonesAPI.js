
let counter = 0;
const env = process.env;
const { amandaPhone, brendaPhone, jacobPhone, anaPhone, sendNumber, test1, test2, accountSid, authToken } = env
const client = require('twilio')(accountSid, authToken);

module.exports = {

    //ping function
    ping: (req, res) => {
        //save the therapist in an easy format
        const therapist = req.params.therapist;
        //phone number placholder
        let ping = "";
        let body = "";
        const send = sendNumber;
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
            case "Myles" :
             {
                 ping = test1
                 body = "Myles your client is ready for you."
                 console.log(mylesPhone)
             }
        }

        client.messages
            .create({
                body: body,
                from: send,
                to: ping
            }).then(message => {
                counter++;
                console.log("-------------");
                console.log("successful send ", counter);
                console.log("-------------");
                console.log(message.sid)
            })
            .done();
    }
}



