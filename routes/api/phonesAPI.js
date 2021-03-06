
let counter = 0;
const env = process.env;
const { amandaPhone, brendaPhone, jacobPhone, anaPhone, mylesPhone, sendNumber, test1, test2, accountSid, authToken } = env
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
                    ping = jacobPhone;
                    body = "Jacob your client is ready for you."
                    console.log(jacobPhone);
                };
                break;
            case "Amanda":
                {
                    ping = amandaPhone;
                    body = "Amanda your client is ready for you."
                    console.log(amandaPhone);
                };
                break;
            case "Brenda":
                {
                    ping = brendaPhone;
                    body = "Brenda your client is ready for you."
                    console.log(brendaPhone);
                };
                break;
            case "Ana":
                {
                    ping = anaPhone;
                    body = "Ana your client is ready for you."
                    console.log(body)
                    console.log(test1)
                    console.log(anaPhone);
                    console.log(body)
                }
                break;
            case "Myles" :
             {
                 ping = mylesPhone;
                 body = "Myles your client is ready for you."
                 console.log(mylesPhone);
             }
             break;
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
                console.log(message.sid);
                res.send("Text message sent");
            })
            .done();
    }
}



