const { SlashCommandBuilder } = require("discord.js");

// initialize instance of slashCommandBuilder class
/*
 Slash command names must be between 1-32 characters 
 and contain no capital letters, spaces, or symbols
*/  
const slashCommandBuilder = new SlashCommandBuilder()

slashCommandBuilder
.setName('ping')
.setDescription('Replies with Pong')

// provides command definition
const execute = async(interaction) => {
    await interaction.reply('Pong!');
    const message = await interaction.fetchReply()
    console.log(message);
}

module.exports = 
    {
        data: slashCommandBuilder,
        execute
    }