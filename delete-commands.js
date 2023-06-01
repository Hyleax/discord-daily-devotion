require('dotenv').config();

const { REST, Routes } = require('discord.js');


const rest = new REST().setToken(process.env.BOT_TOKEN);


// for guild-based commands
rest.delete(Routes.applicationGuildCommand(process.env.CLIENT_ID, process.env.GUILD_ID, "1110980379998949417"))
	.then(() => console.log('Successfully deleted guild command'))
	.catch(console.error);