const axios = require('axios');
const baseURL = "https://api.list-discordbot.ga";


/**
 * @param id {string}
 * @returns {Promise<object>}
 */

async function getBot(id) {
    if(!id) throw new Error('Parameters must be filled');
    if(id.length !== 18) throw new Error('Invalid ID Discord');
    try {
        let get = await axios.get(baseURL + '/bot?id=' + id);
        return get.data;
    } catch (e) {
        throw new Error('An error occured when fetching data, make sure if bot exist.');
    }
}

module.exports = { getBot };
