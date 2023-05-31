const express = require('express');

const {
  generate
} = require('../controllers/input.controller');

const {
  generateImage
} = require('../controllers/image.controller');

const router = express.Router({ mergeParams: true });

router.route('/generate')
  .post(generate);

router.route('/generateImage')
  .post(generateImage);

module.exports = router;
