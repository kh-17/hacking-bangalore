const express = require('express');
const session = require('express-session');
const cors = require('cors');
const config = require('./config');

// configure sessions
const app = express();

app.use(session(
    {
      secret: '1234567890',
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: 'auto',
        httpOnly: true,
        maxAge: 3600000
      }
    })
  );
  

app.use(express.json());

app.use(cors({
  origin: true,
  credentials: true
}));

app.use('/user', require('./routes/user'));
app.use('/login', require('./routes/login'));
app.use('/oauth-callback', require('./routes/oauth-callback'));
app.use('/logout', require('./routes/logout'));

app.listen(config.serverPort, () => console.log(`FusionAuth example app listening on port ${config.serverPort}.`));
