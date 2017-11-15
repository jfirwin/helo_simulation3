const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , cors = require('cors')
    , massive = require('massive')
    , Auth0Strategy = require('passport-auth0')
    , passport = require('passport')
    , logout = require('express-passport-logout');


require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors())
app.use(session({
  secret: 'process.env.SESSION_SECRET',
  resave: false,
  saveUninitialized: true
}));

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db);
})

// app.use(express.static(__dirname + '/helo_simulation3_frontend/build/'));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
  domain: process.env.AUTH_DOMAIN,
  clientID: process.env.AUTH_CLIENT_ID,
  clientSecret: process.env.AUTH_CLIENT_SECRET,
  callbackURL: process.env.AUTH_CALLBACK_URL
  },
  function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db');
    db.get_user([profile.identities[0].user_id])
    .then( user => {
      if(user[0]) {
        done(null, { id: user[0].auth_id })
      } else {
        db.create_user([profile.identities[0].user_id])
          .then( newUser => {
            done(null, { id: user[0].auth_id })
          })
      }
  });
}));

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
  failureRedirect: process.env.AUTH_FAILURE_URL
}),
function(req, res) {
  if(!req.user) {
    throw new Error('user null');
  }
  res.redirect(process.env.AUTH_SUCCESS_URL)
});

app.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect(process.env.AUTH_LOGOUT_URL)
})

passport.serializeUser(function(user, done){
  done(null, user);
});

passport.deserializeUser(function(user, done){
  app.get('db').get_user([user.id])
    .then( db_user => {
      done(null, db_user[0].auth_id);
    });
});

const port = 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));
