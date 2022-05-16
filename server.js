const dotenv = require("dotenv").config();
const accountSid = process.env.TWILIO_ACC_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

client.messages
    .create({
        body: "Trying twilio SMS!",
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.MY_NUMBER,
    })
    .then((message) => {
        console.log(message);
    })
    .catch((e) => {
        console.log("error...->", e);
    });
