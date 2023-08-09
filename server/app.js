const express =  require('express');
const app = express();

const authRouter = require('./internal/router/authRouter');

app.use('/api/auth', authRouter);

module.exports = app;