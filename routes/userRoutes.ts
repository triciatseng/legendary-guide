import * as express from 'express';
import {controller} from '../api/User';
import {User} from '../models/User';

const router = express.Router();
const ctrl = controller(User);
const passport = require('passport');

//Base Route: /api/v1/users

//POST: /api/v1/users/login
router.post('/login',ctrl.login);

//POST: /api/v1/users/register
router.post('/register',ctrl.register);

router.get('/auth/facebook', passport.authenticate('facebook', {session: false}));
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {session: false}),
  (req, res, next) => {
    res.redirect('/?code=' + req['tempUser'].generateJWT());
});

export = router;
