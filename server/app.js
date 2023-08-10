const express =  require('express');
const app = express();
const passport = require('passport');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const authRouter = require('./internal/router/authRouter');
const directoryRouter = require('./internal/router/directoryRouter');
const noteRouter = require('./internal/router/noteRouter');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use('/api/auth', authRouter);
app.use('/api', directoryRouter);
app.use('/api', noteRouter);


module.exports = app;