const express = require('express');

require('dotenv').config();

const app = express();

app.use(express.json());

const inputRouter = require('./src/routes/input.route');

app.use('/input', inputRouter)

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is runnign on port: ${process.env.SERVER_PORT}`);
});
