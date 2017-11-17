const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , cors = require('cors')
    , massive = require('massive')
    , Auth0Strategy = require('passport-auth0')
    , passport = require('passport')
    , logout = require('express-passport-logout')
    , cookieParser = require('cookie-parser');


require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000', credentials: true}))
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(session({
  secret: process.env.SESSION_SECRET,
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
  callbackURL: process.env.AUTH_CALLBACK_URL,
  scope: 'openid'
  },
  function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db');
    db.user.get_auth([profile.identities[0].user_id])
    .then( user => {
      if(user[0]) {
        done(null, { id: user[0].id })
      } else {
        db.user.create_user([profile.identities[0].user_id])
          .then( newUser => {
            done(null, { id: newUser[0].id })
          })
      }
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(user, done){
  app.get('db').user.get_user([user.id])
    .then( user => {
      done(null, user);
    });
});

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

app.get('/api/user',
  (req, res, next) => {
    console.log(req.session)
    app.get('db').user.get_user([req.session.passport.user])
      .then( user => {
        console.log('db call user', user)
        return res.status(200).send(JSON.stringify(user));
      })
      .catch(err => {
        console.log(err)
        return res.status(500).send(err);
      })
})

app.put('/api/updateUser',
  (req, res, next) => {
    console.log('put', req.session.passport)
    console.log('update data', req.body)
    let {firstName, lastName, gender, hairColor, eyeColor, hobby, birthDay, birthMonth, birthYear} = req.body;
    app.get('db').user.update_user([
      req.session.passport.user,
      firstName,
      lastName,
      gender,
      hairColor,
      eyeColor,
      hobby,
      birthDay,
      birthMonth,
      birthYear
    ])
      .then( user => {
        console.log('db call user', user)
        return res.status(200).send(user);
      })
      .catch(err => {
        console.log(err)
        return res.status(500).send(JSON.stringify(err));
      })
  }
)

const port = 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));
