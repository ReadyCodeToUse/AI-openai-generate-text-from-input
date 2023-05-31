const {Configuration, OpenAIApi} = require('openai');
// Create an instance of the OpenAIApi class by passing a configuration object
const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY // your API key goes here
}));

const generateImage = async (input, n, size) => {
  const response = await openai.createImage({
    prompt: input, //A text description of the desired image(s). The maximum length is 1000 characters.
    n: n || 2, // The number of images to generate. Must be between 1 and 10.
    size: size || "1024x1024", // The size of the generated images. Must be one of 256x256, 512x512, or 1024x1024.
  });

  return response.data;
}

module.exports = generateImage;
