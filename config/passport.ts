import {User} from '../models/User';

let passport = require('passport');
let FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  profileFields: ['id','displayName','email'],
  passReqtoCallback: true
},

function(req,acessToken,refreshToken,profile,next){
  User.findOne({'facebook.id': profile.id})
    .exec((err,user) => {
      if (err) return next(err);
      if (user) {
        req['tempUser'] = user;
        next(null,user);
      } else {
        let u = new User();
        u.name = profile.displayName;
        u.email = profile.email;
        u._id = profile.id;
        u.save((err,user) => {
          if (err) return next(err);
          req['tempUser'] = user;
          next(null,user);
        });
      }
    });
}
));
