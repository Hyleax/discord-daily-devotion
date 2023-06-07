const { callChatGPT } = require('../../openaiAPI')
const {SlashCommandBuilder} = require('discord.js')

const slashCommandBuilder = new SlashCommandBuilder()
slashCommandBuilder
.setName('gen-devo-qts')
.setDescription('generates devotion questions based on the verse or passage entered')
.addStringOption(option => 
    option
    .setName('book')
    .setDescription('enter a book of the bible')
    .setRequired(true))
.addIntegerOption(option => 
    option
    .setName('chapter')
    .setDescription('enter a bible chapter')
    .setRequired(true))
.addIntegerOption(option => 
    option
    .setName('verse')
    .setDescription('enter a verse number')
    .setRequired(true))
.addIntegerOption(option => 
    option
    .setName('to_verse')
    .setDescription("enter a verse number (enter 0 when querying only a single verse)")
    .setRequired(true))

const execute = async(interaction) => {

    // parse user options
    const book = interaction.options.getString('book')
    const chapter = interaction.options.getInteger('chapter')
    const verse = interaction.options.getInteger('verse')
    const toVerse = interaction.options.getInteger('to_verse')
    const biblePassage = `${book.toUpperCase()} ${chapter}: ${verse}${toVerse !== 0 ? " - "+toVerse :""}`

    // defer bot response
    await interaction.deferReply();
    // chuck into chatGPT api
    const questions = await callChatGPT(biblePassage)
    // reply with response
    await interaction.editReply(questions)
 
}

module.exports = {
    data: slashCommandBuilder,
    execute
}