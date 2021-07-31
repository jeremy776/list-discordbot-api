# List DiscordBot API

**How to install list-discordbot-api**
+ ```npm install list-discordbot-api```

---

# Example
### getBot(id)
```js
const LDB = require("list-discordbot-api");

const BotInfo = await LDB.getBot("727893291265425469");

console.log(BotInfo);

// Result
// {
//   "id": "727893291265425469",
//   "prefix": "!",
//   "name": "List DiscordBot",
//   "avatarURL": "https://cdn.discordapp.com/avatars/727893291265425469/ca1f37e4d0d02e410eff60851e59a2c5.webp",
//   "discriminator": "8833",
//   "shortDesc": "A website where you can add the bots that you create, and you can also search for bots created by other developers",
//   "totalVotes": 0,
//   "totalServers": 0,
//   "website": "list-discordbot.ga",
//   "supportServer": null,
//   "library": "discord.js",
//   "tags": [
//     "Moderation",
//     "Dashboard"
//   ],
//   "status": "Approved",
//   "owner": {
//     "username": "Side",
//     "discriminator": "1234"
//   }
// }

```
