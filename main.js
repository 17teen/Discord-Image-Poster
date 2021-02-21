// Github: https://github.com/17teen 
// Discord: 7teen#3868

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { red, green, blue, yellow, cyan, greenBright, cyanBright, redBright, blueBright, } = require('chalk');
/**
 * Accessing settings.json
 */
const settings = require('./settings.json');
const WebhookID = settings.WEBHOOK_ID;
const Webhooktoken = settings.WEBHOOK_TOKEN;
const UserToken = settings.USER_TOKEN;
const UserID = settings.USER_ID;
const UserPrefix = settings.USER_PREFIX;
const AllowUser = settings.ALLOW_USERS;
const webhook = new Discord.WebhookClient(WebhookID, Webhooktoken);
let counter = 0;

const Title = String.raw`


                        ██████╗  ██████╗ ███████╗████████╗███████╗██████╗ 
                        ██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗
                        ██████╔╝██║   ██║███████╗   ██║   █████╗  ██████╔╝
                        ██╔═══╝ ██║   ██║╚════██║   ██║   ██╔══╝  ██╔══██╗
                        ██║     ╚██████╔╝███████║   ██║   ███████╗██║  ██║
                        ╚═╝      ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
                                                  

`;
console.log(cyanBright(Title));

if (AllowUser === false) {
    /**
     * For the webhook
     */
    fs.readdir('images/', (e, files) => {
        var i = 0;
        files.map((f) => {
            counter += 1;
            setTimeout(() => {
                const Attachment = new Discord.Attachment(`images/${f}`);
                webhook.send(Attachment).then(() => {
                    console.log(greenBright(`[MANAGER #${i++}]: ${f} was sent succesfully`))
                    fs.unlinkSync(`images/${f}`)
                }).catch(e => console.log(red(`[MANAGER #${i++}]: ${f} could not be sent "${e.message}"`)))
            }, counter * 1000);
        })
    })
}  else {
    console.log(red('                ╔════════════════════════════════════════════════════════════════════════════════╗'));
    console.log(red('                ‖                                 User Only                                      ‖'));
    console.log(red('                ╚════════════════════════════════════════════════════════════════════════════════╝'));
}

if (AllowUser === true) {
    client.on("ready", () => {
        console.log(red('                ╔════════════════════════════════════════════════════════════════════════════════╗'));
        console.log(red('                ‖                          Made by 7teen#3868                                    ‖'));
        console.log(red('                ╚════════════════════════════════════════════════════════════════════════════════╝'));
        console.log(greenBright(`                ‖                          [©] USER: ${client.user.username}#${client.user.discriminator}`));
        console.log(greenBright(`                ‖                          [©] PREFIX: ${UserPrefix}                                     `));
        console.log(greenBright(`                ‖                          [©] ALLOW USERS: ${AllowUser}                                 `));
        console.log(red('                ╔════════════════════════════════════════════════════════════════════════════════╗'));
        console.log(red('                ‖                                                                                ‖'));
        console.log(red('                ╚════════════════════════════════════════════════════════════════════════════════╝'));
    });

    client.on("message", async message => {
        if (message.author.id !== UserID) {
            return;
        }
    
        if (message.content.startsWith(UserPrefix) && message.author.id === UserID) {
            console.log(cyan(`[COMMAND RAN] :: ${message.content}`));
        }

        if (message.content.startsWith(UserPrefix + 'post')){
            fs.readdir('images/', (e, files) => {
                var i = 0;
                files.map((f) => {
                    counter += 1;
                    setTimeout(() => {
                        const Attachment = new Discord.Attachment(`images/${f}`);
                        message.channel.send(Attachment).then(() => {
                            console.log(greenBright(`[MANAGER #${i++}]: ${f} was sent succesfully`))
                            fs.unlinkSync(`images/${f}`)
                        }).catch(e => console.log(red(`[MANAGER #${i++}]: ${f} could not be sent "${e.message}"`)))
                    }, counter * 1000);
                })
            })
            message.delete();
        }
    })

    client.login(UserToken);
} else {
    console.log(red('                ╔════════════════════════════════════════════════════════════════════════════════╗'));
    console.log(red('                ‖                                Webhook Only                                    ‖'));
    console.log(red('                ╚════════════════════════════════════════════════════════════════════════════════╝'));
}