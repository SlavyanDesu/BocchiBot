<div align="center">
  <img src="https://images5.alphacoders.com/911/911614.png" alt="BocchiBot" width="500" />

# **BocchiBot**

> BocchiBot is a multipurpose WhatsApp bot using wa-automate-nodejs library!
>
>

  <h3>Made with ❤️ by</h3>

  <a href="https://github.com/SlavyanDesu"><img src="https://avatars.githubusercontent.com/u/28254882?v=4" height="128" width="128" /></a>
  <a href="https://github.com/Piyoxz"><img src="https://avatars.githubusercontent.com/u/102013178?v=4" height="128" width="128" /></a>
  <a href="https://github.com/VideFrelan"><img src="https://avatars.githubusercontent.com/u/76523793?v=4" height="128" width="128" /></a>
  <a href="https://github.com/Sansekai"><img src="https://avatars.githubusercontent.com/u/34540627?v=4" height="128" width="128" /></a>

  <a href="https://github.com/SlavyanDesu"><img title="Author" src="https://img.shields.io/badge/Author-SlavyanDesu-purple.svg?style=for-the-badge&logo=github" /></a>

  <img src="https://img.shields.io/npm/v/@open-wa/wa-automate.svg?color=green"/>
  <img src="https://img.shields.io/node/v/@open-wa/wa-automate"/>
  <img src="https://img.shields.io/github/repo-size/SlavyanDesu/BocchiBot" /> <br>
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot.svg?type=shield"/></a>
  <a href="https://www.codefactor.io/repository/github/SlavyanDesu/BocchiBot"><img src="https://www.codefactor.io/repository/github/SlavyanDesu/BocchiBot/badge"/></a>

  <a href="https://github.com/SlavyanDesu/BocchiBot#requirements">Requirements</a> •
  <a href="https://github.com/SlavyanDesu/BocchiBot#installation">Installation</a> •
  <a href="https://github.com/SlavyanDesu/BocchiBot#features">Features</a> •
  <a href="https://github.com/SlavyanDesu/BocchiBot#thanks-to">Thanks to</a> •
  <a href="https://github.com/SlavyanDesu/BocchiBot#license">License</a>
</div>

# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://www.gyan.dev/ffmpeg/builds/)
* [Tesseract](https://github.com/tesseract-ocr/tesseract)

# Installation
## 📝 Cloning the repo
```cmd
> git clone https://github.com/SlavyanDesu/BocchiBot.git
> cd BocchiBot
```

## ✍️ Editing the file
Edit the required value in `config.json`.
```json
{
    "ownerBot": "62812xxxxxxxx@c.us",
    "prefix": ".",
    "nao": "SAUCENAO-API-KEY",
    "openAiKey": "OPENAI-API-KEY",
    "authorStick": "@SlavyanDesu",
    "packStick": "BocchiBot"
}
```

`ownerBot`: your WhatsApp number.   
`prefix`: bot's prefix.   
`nao`: SauceNAO API key. You can get it [here](https://saucenao.com/user.php) by creating an account.   
`openAiKey`: OpenAI API key. You can get it [here](https://platform.openai.com/account/api-keys) by creating an account.   
`authorStick`: name of the author sticker pack.   
`packStick`: name of the sticker pack.   

## 🗣️ Changing Language
Replace all of `eng` to `ind` for Bahasa Indonesia.

## 🛠️ Installing the FFmpeg
* Download one of the available versions of FFmpeg by clicking [this link](https://www.gyan.dev/ffmpeg/builds/).
* Extract the file to `C:\` path.
* Rename the extracted folder to `ffmpeg`.
* Run Command Prompt as Administrator.
* Run this command:
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
It will give us a callback like `SUCCESS: specified value was saved`.
* Now that you've FFmpeg installed, verify that it's working by running this command to see version number:
```cmd
> ffmpeg -version
```

## 🛠️ Installing the Tesserract
* Download the Tesseract program [here](https://s.id/vftesseract).
* Run the Tesseract program with run As Administrator.
* Make sure the Tesseract installation is in the `C:\` folder
* Run Command Prompt as Administrator.
* Run this command:
```cmd
> setx /m PATH "C:\Tesseract-OCR;%PATH%"
```
It will give us a callback like `SUCCESS: specified value was saved`.
* Now that you've Tesseract installed, verify that it's working by running this command to see version number:
```cmd
> tesseract -version
```

## 🔍 Installing the dependencies
```cmd
> npm install
```

## 🆗 Running the bot
Regular node:
```cmd
> npm start
```

PM2:
```cmd
> pm2 start index.js -i max
> pm2 monit
```

After that scan the QR code using your WhatsApp in your phone.

# Features
Type `.help` to your bot number to see the list of commands.

# Thanks to
* [`open-wa/wa-automate-nodejs`](https://github.com/open-wa/wa-automate-nodejs)
* [`YogaSakti/imageToSticker`](https://github.com/YogaSakti/imageToSticker)
* [`uukina`](https://github.com/uukina)
* [`VideFrelan`](https://github.com/VideFrelan)
* [`Pahri123`](https://github.com/Pahri123)
* [`LeviathanH`](https://github.com/LeviathanH)
* [`ferlitopym`](https://github.com/ferlitopym)
* [`AlvioAdjiJanuar`](https://github.com/Piyoxz)
* [`VirusLauncher`](https://github.com/VirusLauncher)
* [`Sansekai`](https://github.com/Sansekai)
* [`Baguettou`](https://github.com/Baguettou)
* [`HAFizh-15`](https://github.com/HAFizh-15)
* [`TheSploit`](https://github.com/TheSploit)
* [`rashidsiregar28`](https://github.com/rashidsiregar28)
* [`irham01`](https://github.com/irham01)
* [`hardiantojek93`](https://github.com/hardiantojek93)
* [`gamingrkp`](https://github.com/gamingrkp)

# License
**BocchiBot** © [SlavyanDesu](https://github.com/SlavyanDesu), released under the MIT License.
Authored and maintained by SlavyanDesu.

<div align="center">
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot?ref=badge_large"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot.svg?type=large" />
</div>
