const axios = require("axios");

const baseURL = "https://api.list-discordbot.ga/";

async function getBot(id) {
  if(!id) throw new Error("Parameter id must be filled");
  if(isNaN(id)) throw new Error("ID must be a number");
  if(id.length !== 18) throw new Error("Invalid Discord ID");
  let data = await axios.get(baseURL + "/bot?id="+id);
  return data.data;
}

module.exports = { getBot };