const { json } = require("express");
const { ONE_SIGNAL_CONFIG } = require("../config/app.config");
const axios = require('axios');

async function SendNotification(data, callback) {
    const headers = {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + ONE_SIGNAL_CONFIG.API_KEY
    };

    const config = {
        method: 'post',
        url: 'https://onesignal.com/api/v1/notifications',
        headers: headers,
        data: data
    };

    try {
        const response = await axios(config);
        console.log(response.data);
        callback(null, response.data);
    } catch (error) {
        console.error(error);
        callback({ message: error });
    }
}



module.exports = { SendNotification }