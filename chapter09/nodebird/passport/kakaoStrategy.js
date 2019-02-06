const KakaoStrategy = require('passport-kakao').Strategy;
const { User } = require('../models');
module.exports = passport => {
  passport.use(new KakaoStrategy({
    clientID: process.env.KAKAO_ID,
    callbackURL: '/auth/kakao/callback',
  }, async (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    try {
      const exUser = await User.find({ where: { snsId: profile.id, provider: 'kakao' }});
      if (exUser) {
        done(null, exUser);
      } else {
        const newUser = await User.create({
          email: profile._json && profile._json.kaccount_email || 'ttl7917516@naver.com',
          nick: profile.displayName,
          snsId: profile.id,
          provider: 'kakao',
        });
        done(null, newUser);
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
}