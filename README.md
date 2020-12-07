<div align="center">
<img src="https://images5.alphacoders.com/911/911614.png" alt="BocchiBot" width="500" />

# BocchiBot

> BocchiBot is a multipurpose WhatsApp bot using wa-automate-nodejs library!
>
>

<p align="center">
  <a href="https://github.com/SlavyanDesu"><img src="https://avatars3.githubusercontent.com/u/28254882?s=400&u=25765902db0b709938966cf4127ac11af5eafb5d&v=4" height="128" width="128" /></a>
</p>
<p align="center">
  <a href="https://github.com/SlavyanDesu"><img title="Author" src="https://img.shields.io/badge/Author-SlavyanDesu-purple.svg?style=for-the-badge&logo=github" /></a>
</p>
<p align="center">
  <a href="https://github.com/SlavyanDesu/BocchiBot"><img title="Stars" src="https://img.shields.io/github/stars/SlavyanDesu/BocchiBot?color=red&style=flat-square" /></a>
  <a href="https://github.com/SlavyanDesu/BocchiBot/network/members"><img title="Forks" src="https://img.shields.io/github/forks/SlavyanDesu/BocchiBot?color=red&style=flat-square" /></a>
  <a href="https://github.com/SlavyanDesu/BocchiBot/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/SlavyanDesu/BocchiBot?label=watchers&color=blue&style=flat-square" /></a> <br>
  <a href="https://www.codefactor.io/repository/github/SlavyanDesu/BocchiBot"><img src="https://www.codefactor.io/repository/github/SlavyanDesu/BocchiBot/badge" /></a>
  <a href="https://www.npmjs.com/package/@open-wa/wa-automate"><img src="https://img.shields.io/npm/v/@open-wa/wa-automate.svg?color=green" /></a>
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot.svg?type=shield"/></a>
  <img src="https://img.shields.io/node/v/@open-wa/wa-automate" />
  <img src="https://img.shields.io/badge/maintained%3F-yes-green.svg?style=flat" />
</p>
<p align="center">
  <a href="https://github.com/SlavyanDesu/BocchiBot#installation">Installation</a> •
  <a href="https://github.com/SlavyanDesu/BocchiBot#features">Features</a> •
  <a href="https://github.com/SlavyanDesu/BocchiBot#thanks-to">Thanks to</a> •
  <a href="https://github.com/SlavyanDesu/BocchiBot#license">License</a>
</p>
<details>
  <summary>Contact me!</summary>

  [WhatsApp](https://wa.me/6281294958473)

  [Facebook](https://facebook.com/jazz.overdose)

  [Twitter](https://twitter.com/sl_avyan)

  [Instagram](https://www.instagram.com/rl_slavyan)

  [Discord](https://discord.com/users/446297580431998977)

</details>
</div>


---



# Installation
## 📝 Cloning this repo
```bash
> git clone https://github.com/SlavyanDesu/BocchiBot
> cd BocchiBot
```

## ✍️ Editing the file
Edit the required value in `config.json`.
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
bocchi.reply(from, ind.wrongFormat(), id)
```
To
```js
bocchi.reply(from, eng.wrongFormat(), id)
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
| Multi lewds        |    Premium   |
| Multi fetish       |    Premium   |
| Nekopoi            |      ✔️      |

# Thanks to
* [`Open-Wa/wa-automate-nodejs`](https://github.com/open-wa/wa-automate-nodejs)
* [`YogaSakti/imageToSticker`](https://github.com/YogaSakti/imageToSticker)

# License
**BocchiBot** © [SlavyanDesu](https://github.com/SlavyanDesu), released under the MIT License.
Authored and maintained by SlavyanDesu.

<p align="center">
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot?ref=badge_large"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot.svg?type=large" />
</p>  
