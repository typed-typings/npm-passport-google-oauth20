/// <reference path="bundle.d.ts" />

import GoogleStrategy = require('passport-google-oauth20');

new GoogleStrategy({
    clientID: 'abc',
    clientSecret: '123',
    callbackURL: 'http://127.0.0.1:3000/auth/google/callback'
  },
  function (accessToken, refreshToken, profile, cb) {
    return cb(null, {});
  }
);
