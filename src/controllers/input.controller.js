const generateText = require('../utils/generateText');

exports.generate = async(req, res) => {
  const {input, temperature, max_tokens} = req.body;

  if (!input) {
    return res.status(400).json({
      error: 'Missing input'
    });
  }
  await generateText(input, temperature, max_tokens).then((response) => {
    res.status(200).json({
      response
    });
  });
}
