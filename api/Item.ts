import * as express from 'express';
import {IItemModel} from '../models/Item';
import * as mongoose from 'mongoose';

export function controller(Item: mongoose.Model<IItemModel>){
  return{
    getAll: getAll,
    getOne: getOne,
    search: search,
    create: create,
    update: update,
    remove: remove
  }

  function getAll(req: express.Request, res: express.Response, next: Function) {
    Item.find({})
      .exec((err, items) => {
        if (err) return next(err);
        res.json(items);
      });
  }

  function getOne(req: express.Request, res: express.Response, next: Function) {
    Item.findOne({_id: req.params.id})
      .exec((err,item) => {
        if (err) return next(err);
        res.json(item);
      });
  }

  function search(req: express.Request, res: express.Response, next: Function) {
    if(req.query.query) {
      Item.find({
        $text: {
          $search: req.query.query
        }
      })
      .exec((err, items) => {
        if (err) return next(err);
        res.json(items);
      });
    } else {
      Item.find({})
      .exec((err, items) => {
        if (err) return next(err);
        res.json(items);
      });
    }
  }

  function create(req: express.Request, res: express.Response, next: Function) {
    let i = new Item(req.body);
    i.save ((err,item:IItemModel) => {
      if (err) return next(err);
      res.json(item);
    });
  }

  function update(req: express.Request, res: express.Response, next: Function) {
    Item.update({_id:req.params.id},req.body,(err,numRows) => {
      if (err) return next(err);
      res.json({message: 'Item has been updated.'});
    });
  }

  function remove(req: express.Request, res: express.Response, next: Function) {
    Item.remove({_id:req.params.id}, (err) => {
      if (err) return next(err);
      res.json({message: 'Item has been removed.'});
    });
  }
}
