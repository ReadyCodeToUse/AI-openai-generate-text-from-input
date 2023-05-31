const generateImage = require('../utils/generateImage');

exports.generateImage = async(req, res) => {
  const {input, n, size} = req.body;

  if (!input) {
    return res.status(400).json({
      error: 'Missing input'
    });
  }
  await generateImage(input, n, size).then((response) => {
    const data = response.data;
    res.status(200).json({
      data
    });
  });
}
