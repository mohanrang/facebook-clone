const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// require(".env").config();

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "832238720870-br0rmp9r34q78i8t015qt9dpt45qvn2k.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
