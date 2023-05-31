const {Configuration, OpenAIApi} = require('openai');

// Create an instance of the OpenAIApi class by passing a configuration object
const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY // your API key goes here
}));

const generateText = async (input, temperature, max_tokens) => {
  // Make a call to the createCompletion method of the OpenAIApi class
  // and pass in an object with the desired parameters
  const response = await openai.createCompletion({
    model: 'text-davinci-003', // specify the model to use
    prompt: input, // specify the prompt
    temperature: temperature || 0.8, // specify the randomness of the generated text
    max_tokens: max_tokens || 800, // specify the maximum number of tokens to generate
  });

  return response.data.choices[0].text;
}

module.exports = generateText;
