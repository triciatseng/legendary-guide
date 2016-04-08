import * as mongoose from 'mongoose';
import * as express from 'express';
import {ITripModel} from '../models/Trip';
import {IFoodModel} from '../models/Food';

export function controller(Trip: mongoose.Model<ITripModel>, Food: mongoose.Model<IFoodModel>) {
  return{
    getAll: getAll,
    getOne: getOne,
    create: create,
    remove: remove
  }

  function getAll(req: express.Request, res: express.Response, next: Function){
    Trip.find({})
      .populate('user','name')
      .exec((err,trips) => {
        if (err) return next(err);
        res.json(trips);
      });
  }

  function getOne(req: express.Request, res: express.Response, next: Function){
    Trip.findOne({_id:req.params.id})
      .populate('user','name')
      .populate('groceries','-trip')
      .exec((err,data) => {
        if (err) return next(err);
        Food.populate(data.groceries, {path: 'user', select: 'name', model: 'User'}, (err,response) => {
          if (err) return next(err);
          res.json(data);
        });
      });
  }

  function create(req: express.Request, res: express.Response, next: Function){
    req.body.dateCreated = Date.now();
    let t = new Trip(req.body);
    t.user = req['payload']._id;
    t.save((err, trip:ITripModel) => {
      if (err) return next(err);
      res.json(trip);
    })
  }

  function remove(req: express.Request, res: express.Response, next: Function){
    Trip.findOneAndRemove({_id:req.params.id,user:req['payload']._id},(err,trip) => {
      if (err) return next(err);
      if (trip) {
        Food.remove({trip:req.params.id},(err) => {
          if (err) return next(err);
          res.json({message: 'Deleted!'});
        });
      } else {
        next({mesage: 'Could not delete', status: 500});
      }
    });
  }
}
