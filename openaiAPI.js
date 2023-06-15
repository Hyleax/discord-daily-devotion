const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const configuration = new Configuration({
    organization: process.env.ORG_ID,
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const callChatGPT = async(verse) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `can you give me ${verse} in NIV formatted by 'verse number. verse', can you also generate 3 devotions questions from it, can you also add a fourth question analyzing this passage in detail?`,
        max_tokens: 500,
        temperature: 0,
      });
      return response.data.choices[0].text
}

module.exports = { callChatGPT }