const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , cors = require('cors')
    , massive = require('massive')
    , Auth0Strategy = require('passport-auth0')
    , passport = require('passport');

require('dotenv').config();

const app = express();

app.use(bodyParser);
app.use(cors())
app.use(session({
  secret: 'process.env.SESSION_SECRET',
  resave: false,
  saveUninitialized: true
}));

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db);
})

var strategy = new Auth0Strategy({
  domain: process.env.AUTH_DOMAIN,
  clientID: process.env.AUTH_CLIENT_ID,
  clientSecret: process.env.AUTH_CLIENT_SECRET,
  callbackURL: process.env.AUTH_CALLBACK_URL
  },
  function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db');

    db.get_user([profile.identities[0].user.id])
    .then( user => {
      if(user[0]) {
        return done(null, { auth_id: user[0].id })
      } else {
        db.create_user([profile.identities[0].user.id])
          .then( newUser => {
            return done(null, { auth_id: user[0].id })
          })
      }
  });

passport.use(strategy);

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3001/profile',
  failureRedirect: 'http://localhost:3001/'
}));





  })

const port = 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));
