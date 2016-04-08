import * as mongoose from 'mongoose';
import * as express from 'express';
import {IFoodModel} from '../models/Food';
import {ITripModel} from '../models/Trip';

export function controller(Food: mongoose.Model<IFoodModel>, Trip: mongoose.Model<ITripModel>){
  return {
    getAll: getAll,
    getOne: getOne,
    search: search,
    create: create,
    soloCreate: soloCreate,
    update: update,
    remove: remove,
    soloRemove: soloRemove
  }
  function getAll(req: express.Request, res: express.Response, next: Function){
    Food.find({})
      .populate('user','name')
      .exec((err,groceries) => {
        if (err) return next(err);
        res.json(groceries);
      });
  }

  function getOne(req: express.Request, res: express.Response, next: Function){
    Food.findOne({_id:req.params.id})
      .populate('user','name')
      .exec((err,data) => {
        if (err) return next(err);
        res.json(data);
      })
  }

  function search(req: express.Request, res: express.Response, next: Function){
    if(req.query.query){
      Food.find({
        $text: {
          $search: req.query.query
        }
      })
      .populate('user','name')
      .exec((err,groceries) => {
        if (err) return next(err);
        res.json(groceries);
      });
    } else {
      Food.find({})
      .populate('user','name')
      .exec((err,groceries) => {
        if (err) return next(err);
        res.json(groceries);
      });
    }
  }

  function create(req: express.Request, res: express.Response, next: Function){
    let f = new Food(req.body);
    f.user = req['payload']._id;
    f.save((err,food) => {
      if (err) return next(err);
      Trip.update({_id:f.trip},{$push:{'groceries':f._id}},(err,result) => {
        if (err) return next(err);
        res.json(f);
      });
    });
  }

  function soloCreate(req: express.Request, res: express.Response, next: Function){
    let f = new Food(req.body);
    f.user = req['payload']._id;
    f.save((err,food: IFoodModel) => {
      if (err) return next(err);
      res.json(food);
    });
  }

  function update(req: express.Request, res: express.Response, next: Function){
    Food.update({_id:req.params.id, user: req['payload']._id},req.body,(err,numRows:any) => {
      if (err) return next(err);
      if (numRows === 0) return next({message: 'Could not update', status:500});
      res.json({message: 'Updated!'});
    });
  }

  function remove(req: express.Request, res: express.Response, next: Function){
    Food.findOneAndRemove({_id:req.params.id,user:req['payload']._id},(err,food) => {
      if (err) return next(err);
      if (food) {
        Trip.update({groceries:req.params.id},{$pull:{groceries:req.params.id}},(err,numRows) => {
          if (err) return next(err);
          res.json({message: 'Removed!'});
        });
      } else {
        next({message: 'Could not remove', status: 500});
      }
    });
  }

  function soloRemove(req: express.Request, res: express.Response, next: Function){
    Food.remove({_id:req.params.id,user:req['payload']._id},(err) => {
      if (err) return next(err);
      res.json({message: 'Removed!'});
    });
  }
}
