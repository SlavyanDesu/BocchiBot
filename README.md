<div align="center">
<img src="./material/Elaina.png" alt="Elaina" width="500" />

# Elaina-Bot

> Elaina is a multipurpose WhatsApp bot using wa-automate-nodejs library!
>
>

<p align="center">
  <a href="https://github.com/slavyandesu"><img src="https://avatars3.githubusercontent.com/u/28254882?s=400&u=25765902db0b709938966cf4127ac11af5eafb5d&v=4" height="128" width="128" /></a>
</p>
<p align="center">
  <a href="https://github.com/slavyandesu"><img title="Author" src="https://img.shields.io/badge/Author-SlavyanDesu-red.svg?style=for-the-badge&logo=github" /></a>
</p>
<p align="center">
  <a href="https://www.codefactor.io/repository/github/slavyandesu/elaina-bot"><img src="https://www.codefactor.io/repository/github/slavyandesu/elaina-bot/badge" /></a>
  <a href="https://www.npmjs.com/package/@open-wa/wa-automate"><img src="https://img.shields.io/npm/v/@open-wa/wa-automate.svg?color=green" /></a>
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2Felaina-bot?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2Felaina-bot.svg?type=shield"/></a>
  <img src="https://img.shields.io/node/v/@open-wa/wa-automate" />
  <a href="https://github.com/slavyandesu/elaina-bot"><img title="Stars" src="https://img.shields.io/github/stars/slavyandesu/elaina-bot?color=red&style=flat-square" /></a>
  <a href="https://github.com/slavyandesu/elaina-bot/network/members"><img title="Forks" src="https://img.shields.io/github/forks/slavyandesu/elaina-bot?color=red&style=flat-square" /></a>
  <a href="https://github.com/slavyandesu/elaina-bot/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/slavyandesu/elaina-bot?label=watchers&color=blue&style=flat-square" /></a>
  <img src="https://img.shields.io/badge/maintained%3F-yes-green.svg?style=flat" />
</p>
<p align="center">
  <a href="https://github.com/SlavyanDesu/elaina-bot#installation">Installation</a> •
  <a href="https://github.com/SlavyanDesu/elaina-bot#features">Features</a> •
  <a href="https://github.com/SlavyanDesu/elaina-bot#thanks-to">Thanks to</a> •
  <a href="https://github.com/SlavyanDesu/elaina-bot#license">License</a>
</p>
<details>
  <summary>Contact me!</summary>

  [WhatsApp](https://wa.me/6281294958473)

  [Facebook](https://faecbook.com/jazz.overdose)

  [Twitter](https://twitter.com/sl_avyan)

  [Instagram](https://www.instagram.com/rl_slavyan)

  [Discord](https://discord.com/users/446297580431998977)

</details>
</div>

---


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2Felaina-bot.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2Felaina-bot?ref=badge_large)

# Installation
## 📝 Cloning this repo
```bash
> git clone https://github.com/SlavyanDesu/elaina-bot
> cd elaina-bot
```

## ✍️ Editing the file
Edit the required value in `config.example.json`, after that rename the file to `config.json`.
```json
{
    "ownerBot": "62812xxxxxxxx@c.us", 
    "prefix": "$",
    "uaOverride": "WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
    "token": "put-your-token-here",
    "nao": "put-your-token-here"
}
```
`ownerBot`: your WhatsApp number.  
`prefix`: bot's prefix.  
`uaOverride`: your user agent.  
`token`: API token. You can get it [here](https://api.i-tech.id) by creating an account.  
`nao`: SauceNAO API token. You can get it [here](https://saucenao.com/user.php) by creating an account.

## 🗣️ Changing language
Wanna change the language of the bot to English? Simply replace all `ind` in `message/index.js` to `eng`  
Example:
```js
client.reply(from, ind.wrongFormat(), id)
```
To
```js
client.reply(from, eng.wrongFormat(), id)
```

## 🔍 Installing the dependencies
```bash
> npm install
```

## 🆗 Running the bot
```bash
> npm start
```
After that scan the QR code using your WhatsApp apps in your phone!

# Features
If you want to unlock premium commands, please contact me~
|  Sticker Maker  | Availability |
| :-------------: | :----------: |
| Send image      |      ✔️      |
| Reply to image  |      ✔️      |

|       Misc       | Availability |
| :--------------: | :----------: |
| Say              |      ✔️      |
| Lyric            |      ✔️      |
| Shortlink        |      ✔️      |
| Wikipedia        |      ✔️      |
| KBBI search      |      ✔️      |
| IG stalk         |      ✔️      |

|      Weeb Zone     | Availability |
| :----------------: | :----------: |
| Neko               |      ✔️      |
| Wallpaper          |      ✔️      |
| Kemono             |      ✔️      |
| Kusonime           |      ✔️      |
| Komiku             |      ✔️      |
| Anime tracer       |      ✔️      |
| Source finder      |      ✔️      |

|        Bot       | Availability |
| :--------------: | :----------: |
| NSFW toogle      |      ✔️      |
| Server usage     |      ✔️      |
| List block       |      ✔️      |
| Ping             |      ✔️      |
| Delete           |      ✔️      |

|       Owner      | Availability |
| :--------------: | :----------: |
| Broadcast        |      ✔️      |
| Clear messages   |      ✔️      |
| Leave all groups |      ✔️      |
| Ban              |      ✔️      |
| Unban            |      ✔️      |
| Eval             |      ✔️      |
| Shutdown         |      ✔️      |

|    Moderation    | Availability |
| :--------------: | :----------: |
| Add              |      ✔️      |
| Kick             |      ✔️      |
| Promote          |      ✔️      |
| Demote           |      ✔️      |
| Leave            |      ✔️      |
| Everyone         |      ✔️      |

|        NSFW        | Availability |
| :----------------: | :----------: |
| Lewds              |      ✔️      |
| nHentai lookup     |      ✔️      |
| nHentai downloader |    Premium   |
| XNXX downloader    |    Premium   |
| Multi lewds        |    Premium   |
| Multi fetish       |    Premium   |
| Nekopoi            |      ✔️      |

# Thanks to
* [`Open-Wa/wa-automate-nodejs`](https://github.com/open-wa/wa-automate-nodejs)
* [`YogaSakti/imageToSticker`](https://github.com/YogaSakti/imageToSticker)

# License
**elaina-bot** © [SlavyanDesu](https://github.com/SlavyanDesu), released under the MIT License.
Authored and maintained by SlavyanDesu.
