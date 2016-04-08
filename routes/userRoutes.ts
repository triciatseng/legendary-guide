import * as express from 'express';
import {controller} from '../api/UserController';
import {User} from '../models/User';

const ctrl = controller(User);
const router = express.Router();
const passport = require('passport');

//BASE ROUTE: '/api/v1/users'
router.post('/login',ctrl.login);
router.post('/register',ctrl.register);
router.get('/auth/facebook',passport.authenticate('facebook',{session: false}));
router.get('/auth/facebook/callback',passport.authenticate('facebook',{session: false}),(req,res,next) => {
  res.redirect('/?code='+req['tempUser'].generateJWT());
});

export = router;
