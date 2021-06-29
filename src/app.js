const axios = require('axios');
const baseURL = "https://api.list-discordbot.ga";

async function getBot(id) {
    if(!id) throw new Error('Parameters must be filled');
    if(id.length !== 18) throw new Error('Invalid ID Discord');

    let get = await axios.get(baseURL+'/bot?id='+id);

    return get.data;
}

module.exports = { getBot };
