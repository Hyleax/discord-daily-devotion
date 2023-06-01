const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const configuration = new Configuration({
    organization: "org-x2rimMChIwy5KgzJOttKFCBQ",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const callChatGPT = async(verse) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `can you generate 4 devotion questions for ${verse}`,
        max_tokens: 200,
        temperature: 0,
      });
      return response.data.choices[0].text
}

module.exports = { callChatGPT }