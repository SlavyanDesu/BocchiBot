<div align="center">
<img src="https://images5.alphacoders.com/911/911614.png" alt="BocchiBot" width="500" />

# BocchiBot

> BocchiBot is a multipurpose WhatsApp bot using wa-automate-nodejs library!
>
>

<p align="center">
  <a href="https://github.com/SlavyanDesu"><img src="https://avatars3.githubusercontent.com/u/28254882?s=400&u=25765902db0b709938966cf4127ac11af5eafb5d&v=4" height="128" width="128" /></a>
  <a href="https://github.com/uukina"><img src="https://avatars0.githubusercontent.com/u/54493113?s=400&u=9072f9bb6abf7185f4aea2fe12ed57c8dfb1e4f2&v=4" height="128" width="128" /></a>
  <a href="https://github.com/MrPawNO"><img src="https://avatars3.githubusercontent.com/u/13583912?s=400&u=8ef1749d80622ca2d5011d71171e5f8ac76334fb&v=4" height="128" width="128" /></a> <br>
  <a href="https://github.com/Pahri123"><img src="https://avatars1.githubusercontent.com/u/66406056?s=400&v=4" height="128" width="128" /></a>
  <a href="https://github.com/LeviathanH"><img src="https://avatars3.githubusercontent.com/u/75152820?s=400&u=8934104bf58533111f2f4cef7be5d72ebb79d75c&v=4" height="128" width="128" /></a>
  <a href="https://github.com/ferlitopym"><img src="https://avatars3.githubusercontent.com/u/33126545?s=400&u=04eff969ece93ae3d9cde917dc2b1649a721888f&v=4" height="128" width="128" /></a> <br>
  <a href="https://github.com/AlvioAdjiJanuar"><img src="https://avatars2.githubusercontent.com/u/68207798?s=400&u=29439908cd661d11443391cb74f5b07267b71117&v=4" height="128" width="128" /></a>
</p>

<p align="center">
  <a href="https://github.com/SlavyanDesu"><img title="Author" src="https://img.shields.io/badge/Author-SlavyanDesu-purple.svg?style=for-the-badge&logo=github" /></a>
</p>

<p align="center">
  <a href="https://github.com/SlavyanDesu/BocchiBot"><img title="Stars" src="https://img.shields.io/github/stars/SlavyanDesu/BocchiBot?color=red&style=flat-square" /></a>
  <a href="https://github.com/SlavyanDesu/BocchiBot/network/members"><img title="Forks" src="https://img.shields.io/github/forks/SlavyanDesu/BocchiBot?color=red&style=flat-square" /></a>
  <a href="https://github.com/SlavyanDesu/BocchiBot/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/SlavyanDesu/BocchiBot?label=watchers&color=blue&style=flat-square" /></a> <br>
  <a href="https://www.npmjs.com/package/@open-wa/wa-automate"><img src="https://img.shields.io/npm/v/@open-wa/wa-automate.svg?color=green" /></a>
  <img src="https://img.shields.io/node/v/@open-wa/wa-automate" />
  <img src="https://img.shields.io/badge/maintained%3F-yes-green.svg?style=flat" />
  <img src="https://img.shields.io/github/repo-size/SlavyanDesu/BocchiBot" /> <br>
  <img src="https://img.shields.io/david/SlavyanDesu/BocchiBot" />
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot.svg?type=shield"/></a>
  <a href="https://www.codefactor.io/repository/github/SlavyanDesu/BocchiBot"><img src="https://www.codefactor.io/repository/github/SlavyanDesu/BocchiBot/badge" /></a>
</p>

<p align="center">
  <a href="https://github.com/SlavyanDesu/BocchiBot#requirements">Requirements</a> •
  <a href="https://github.com/SlavyanDesu/BocchiBot#installation">Installation</a> •
  <a href="https://github.com/SlavyanDesu/BocchiBot#features">Features</a> •
  <a href="https://github.com/SlavyanDesu/BocchiBot#thanks-to">Thanks to</a> •
  <a href="https://github.com/SlavyanDesu/BocchiBot#license">License</a>
</p>

<details>
  <summary>Contact me!</summary>

  [Facebook](https://facebook.com/jazz.overdose)

  [Twitter](https://twitter.com/sl_avyan)

  [Instagram](https://www.instagram.com/rl_slavyan)

  [Discord](https://discord.com/users/446297580431998977)

</details>

<h4 align="center">
  <a href="https://chat.whatsapp.com/LTTm0HGvFRu7uU23mr7ZaR">Join WA BOT DEV Indonesia!</a>
</h4>
</div>

# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip) (for sticker GIF command)
* Any text editor

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
    "token": "api-key",
    "nao": "api-key",
    "vhtear": "api-key"
}
```

`ownerBot`: your WhatsApp number.  
`prefix`: bot's prefix.  
`uaOverride`: your user agent.  
`token`: API token. You can get it [here](https://api.i-tech.id) by creating an account. After that, set your server/host static IP in [here](https://api.i-tech.id/settings/profile).  
`nao`: SauceNAO API token. You can get it [here](https://saucenao.com/user.php) by creating an account.  
`vhtear`: VHTear API token. You can get it [here](https://api.vhtear.com/) by purchasing his API key.   

## 🗣️ Changing language
If you want to change the language, replace all `ind` function to `eng`.   
Example:
```js
ind.wrongFormat()
```
To:
```js
eng.wrongFormat()
```

## 🔍 Installing the dependencies
```bash
> npm install
```

## 🆗 Running the bot
Regular node:
```bash
> npm start
```

PM2:
```bash
> pm2 start index.js
> pm2 monit
```

PM2 with cron job (restart after 5 hours):
```bash
> pm2 start index.js --cron "* */5 * * *"
> pm2 monit
```

After that scan the QR code using your WhatsApp apps in your phone!

# Features
If you want to unlock premium commands, please contact me~

|   Unique Features   |  Conditions  |
| :-----------------: | :----------: |
| Register            |      ✔️      |
| Leveling            |      ✔️      |

|     Sticker Maker     | Availability |
| :-------------------: | :----------: |
| Send/reply image      |      ✔️      |
| Send/reply GIF        |      ✔️      |
| Send/reply MP4        |      ✔️      |
| Text to sticker       |      ✔️      |
| Text to sticker GIF   |      ✔️      |
| Sticker to image      |      ✔️      |

|      Downloader     | Availability |
| :-----------------: | :----------: |
| Facebook video      |      ✔️      |
| YouTube audio/video |      ✔️      |
| Joox                |      ✔️      |
| TikTok                |      ✔️      |

|       Misc       | Availability |
| :--------------: | :----------: |
| Say              |      ✔️      |
| Lyric            |      ✔️      |
| Shortlink        |      ✔️      |
| Wikipedia        |      ✔️      |
| KBBI search      |      ✔️      |
| IG stalk         |      ✔️      |
| GSMArena         |      ✔️      |
| Food receipt     |      ✔️      |
| YouTube search   |      ✔️      |
| TTS              |      ✔️      |
| AFK              |      ✔️      |
| Distance         |      ✔️      |
| Find Sticker     |      ✔️      |
| List surah       |      ✔️      |
| Surah            |      ✔️      |
| Random contact   |      ✔️      |
| Play             |      ✔️      |
| Whois            |      ✔️      |

|      Primbon     | Availability |
| :--------------: | :----------: |
| Weton jodoh      |      ✔️      |
| Zodiac           |      ✔️      |
| Ramal weton      |      ✔️      |

|        Fun       | Availability |
| :--------------: | :----------: |
| Harta tahta      |      ✔️      |
| Calender         |      ✔️      |
| Write            |      ✔️      |
| Missing person   |      ✔️      |
| Valentine        |      ✔️      |
| Glitch text      |      ✔️      |
| SimSimi          |      ✔️      |
| Blackpink logo   |      ✔️      |
| Pornhub logo     |      ✔️      |
| Galaxy text      |      ✔️      |

|      Weeb Zone     | Availability |
| :----------------: | :----------: |
| Neko               |      ✔️      |
| Wallpaper          |      ✔️      |
| Kemono             |      ✔️      |
| Kusonime           |      ✔️      |
| Komiku             |      ✔️      |
| Anime tracer       |      ✔️      |
| Source finder      |      ✔️      |
| Random waifu       |      ✔️      |

|        Bot       | Availability |
| :--------------: | :----------: |
| NSFW toogle      |      ✔️      |
| Bot stats        |      ✔️      |
| List block       |      ✔️      |
| Ping             |      ✔️      |
| Delete           |      ✔️      |
| Report bug       |      ✔️      |
| Group join       |      ✔️      |

|        Owner       | Availability |
| :----------------: | :----------: |
| Broadcast          |      ✔️      |
| Clear all messages |      ✔️      |
| Leave all groups   |      ✔️      |
| Get session        |      ✔️      |
| Ban                |      ✔️      |
| Evaluates JS       |      ✔️      |
| Shutdown           |      ✔️      |
| Add premium user   |      ✔️      |
| Set status         |      ✔️      |

|    Moderation    | Availability |
| :--------------: | :----------: |
| Add              |      ✔️      |
| Kick             |      ✔️      |
| Promote          |      ✔️      |
| Demote           |      ✔️      |
| Leave            |      ✔️      |
| Everyone         |      ✔️      |
| Toogle NSFW      |      ✔️      |
| Set group icon   |      ✔️      |
| Anti-link        |      ✔️      |
| Welcome          |      ✔️      |
| Auto-sticker     |      ✔️      |
| Mute group       |      ✔️      |

|        NSFW        | Availability |
| :----------------: | :----------: |
| Lewds              |      ✔️      |
| nHentai lookup     |      ✔️      |
| Fetish             |      ✔️      |
| Latest Nekopoi     |      ✔️      |
| Waifu NSFW         |      ✔️      |
| Pornhub downloader |      ✔️      |
| Waifu 18+          |      ✔️      |
| nHentai downloader |    Premium   |
| Multi lewds        |    Premium   |
| Multi fetish       |    Premium   |

# Thanks to
* [`open-wa/wa-automate-nodejs`](https://github.com/open-wa/wa-automate-nodejs)
* [`YogaSakti/imageToSticker`](https://github.com/YogaSakti/imageToSticker)
* [`uukina`](https://github.com/uukina)
* [`MrPawNO`](https://github.com/MrPawNO)
* [`Pahri123`](https://github.com/Pahri123)
* [`LeviathanH`](https://github.com/LeviathanH)
* [`ferlitopym`](https://github.com/ferlitopym)
* [`AlvioAdjiJanuar`](https://github.com/AlvioAdjiJanuar)

# License
**BocchiBot** © [SlavyanDesu](https://github.com/SlavyanDesu), released under the MIT License.
Authored and maintained by SlavyanDesu.

<p align="center">
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot?ref=badge_large"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot.svg?type=large" />
</p>  
