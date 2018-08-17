const request = require("request");
const config = require("./config.json");

const type = config.type;
const token = config.token;
// types: bravery, brilliance, balance

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

if (!type || !token) return console.log("Please fill out the config file correctly!");

// sends request to api server.
request(`https://hypesquad.io/api/hype/${type}/${token}`, (error, response, body) => {
    if (error) throw error;
    console.log(body); // return with the message sent from api server and console.log it
});