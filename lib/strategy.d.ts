import OAuth2Strategy = require('passport-oauth2');

/**
 * The Google authentication strategy authenticates requests by delegating to
 * Google using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `cb`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Examples:
 *
 *     passport.use(new GoogleStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/google/callback'
 *       },
 *       function(accessToken, refreshToken, profile, cb) {
 *         User.findOrCreate(..., function (err, user) {
 *           cb(err, user);
 *         });
 *       }
 *     ));
 */
 declare class GoogleOAuth2 extends OAuth2Strategy<GoogleOAuth2.Profile> {
  name: 'google';

  constructor (options: GoogleOAuth2.Options, verify: OAuth2Strategy.VerifyFunction<GoogleOAuth2.Profile>);
}

declare namespace GoogleOAuth2 {
  export interface Options extends OAuth2Strategy.OAuth2Options {
    userProfileURL?: string;
  }

  export interface Profile {
    provider: 'google';
    _raw: string;
    _json: any;
    id: string;
    displayName: string;
    name: {
      familyName: string;
      givenName: string;
    };
    gender?: string;
    emails?: Array<{ value: string, type: string }>;
    photos?: Array<{ value: string }>;
  }
}

export = GoogleOAuth2;
