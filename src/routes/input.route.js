const express = require('express');

const {
  generate
} = require('../controllers/input.controller');

const router = express.Router({ mergeParams: true });

router.route('/generate')
  .post(generate);

module.exports = router;
