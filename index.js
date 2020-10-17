const Discord = require('discord.js')
const client = new Discord.Client()
const token = require('./config.json').token

client.login(token)
    .catch(console.log)

client.on('ready', () => {
    console.log('connected')
})

client.on('guildMemberRemove', member => {
    member.guild.systemChannel.send(`<@${member.id}> just left the server`)
        .catch(console.log)
})

client.on('guildMemberAdd', member => {
    member.guild.systemChannel.send(`<@${member.id}> just joined the server`)
        .catch(console.log)
})
