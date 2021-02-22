# Discord-Image-Poster
Simple tool that posts images to a specified channel for you while you carry on using discord.

| Image Poster User | Image Poster Webhook | 
| ------------- | ------------- | 
| ![result](https://media.discordapp.net/attachments/812263474829852672/813014021241700412/unknown.png) | ![result](https://media.discordapp.net/attachments/812263474829852672/812264645007376404/unknown.png) |

# Why?

*If you want to send a mass amount of images to someone or to a channel while still being able to use discord instead of waiting for all the files to be uploaded this is the tool for you.*

## Requirements Before Set-up:

1. [Node.JS](https://nodejs.org/en/) installed.
2. Code Editor: VSC(recommended), Sublime, Atom etc.

## Set-up: Script

1. Run the `Launch` file and wait for all the packages to be installed.
1. Right click on the 'settings.json' file.
2. Open the file either on Notepad or a code editor i.e VSC (Visual Studio Code).
3. Fill in ALL the gaps.
4. Save.

## Settings Properties
- `WEBHOOK_ID`| `string` | Your Webhook ID.
- `WEBHOOK_TOKEN`| `string` | Your Webhook token.
- `USER_TOKEN`| `string` | Your account token | How to get token? [Click Here](https://www.youtube.com/watch?v=YEgFvgg7ZPI)
- `USER_ID`| `string` | User ID | Must be corresponding with token or tool won't work.
- `ALLOW_USERS`| `bool` | Default set to `true`. Allows the use of your account.

### Example: `settings.json`

```
{
    "WEBHOOK_ID": "812241824567263253",
    "WEBHOOK_TOKEN": " ",
    "ALLOW_USERS": true,
    "USER_TOKEN": " ",
    "USER_ID"   : "709827684888215582",
    "USER_PREFIX": "-"
}
```

# Start-up:

1. Add images to the `/images` folder.
2. Run the `run.bat` file. | Double Left Click.

## Limitations: Webhook

* Limit: All webhooks can only upload up to 8MB of file size.
* Limit: The bigger the file the longer it takes to upload.

## Limitations: User

* Limit: 8MB files if user has no nitro.
* Limit: 50MB files if user has nitro classic.
* Limit: 100MB files if user has nitro boost.
* Limit: The bigger the file the longer it takes to upload.

| Showcase #1 | 
| ------------- | 
| ![result](https://media.discordapp.net/attachments/812263474829852672/812264877862420500/unknown.png) | 

## How it works:
User:
* On command.

Webhook:
* On start-up. No commands needed.


# Disclaimer

This involves the use of selfbots/botting your account, which is against discord ToS. Use this at your own risk.

Creds to: [@MikeHawkVeryHard](https://github.com/MikeHawkVeryHard) for image posting functionality.

## Contact Me

﹒[Discord](https://discord.com/users/709827684888215582)
﹒[Discord Server](https://discord.gg/E3K3JPysSn)
﹒[Telegram](https://t.me/clairvoyant7teen)
﹒[Steam](https://steamcommunity.com/id/seven777teen/)
