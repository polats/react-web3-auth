const express = require('express');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');

const Web3Strategy = require('passport-web3');

/**
 * Called when authorization succeeds. Perform any additional verification here,
 * and either return the user's data (if valid), or deny authorization by
 * passing an error to the `done` callback.
 */
const onAuth = (address, done, req, params) => {
  // signature successful
  // find user if exists, then login

  // if not, create new account

  // return login result
  req.res.send(
    {
      address: req.body.address,
      client_sig: req.body.signed,
      server_sig: params.signed
    }
  )

  // optional additional validation. To deny auth:
  // done(new Error('User is not authorized.'));
  // User.findOne({ address }, (err, user) => done(err, user));
};
const web3Strategy = new Web3Strategy(onAuth);

passport.use(web3Strategy);

// Create a new Express application.
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

app.post('/login', passport.authenticate('web3'));

// Serve any static files
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
