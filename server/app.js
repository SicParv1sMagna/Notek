const express =  require('express');
const app = express();
const passport = require('passport');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const authRouter = require('./internal/router/authRouter');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use('/api/auth', authRouter);

module.exports = app;