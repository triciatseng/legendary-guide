import * as mongoose from 'mongoose';
import * as express from 'express';
import {IUserModel} from '../models/User';

export function controller(User:mongoose.Model<IUserModel>){
  return{
    login: login,
    register: register
  }

  function login(req: express.Request, res: express.Response, next: Function){
    if (!req.body.email) return next({message: 'Email is required to login.'});
    if (!req.body.password) return next({message: 'Password is required to login.'});

    User.findOne({email:req.body.email})
      .exec((err,user) => {
        if (err) return next(err);
        if (!user) return next ({message: 'Incorrect login info provided'});
        user.comparePassword(req.body.password,(err,isMatch) => {
          if (err) return next(err);
          if (!isMatch) return next({message: 'Incorrect login info provided'});
          else res.json({token: user.generateJWT()});
        });
      });
  }

  function register(req: express.Request, res: express.Response, next: Function){
    let u = new User(req.body);
    u.hashPassword(req.body.password,(err,hash) => {
      if (err) return next(err);
      u.password = hash;
      u.save((err,user:IUserModel) => {
        if (err) return next(err);
        res.json({token:user.generateJWT()});
      });
    });
  }
}
