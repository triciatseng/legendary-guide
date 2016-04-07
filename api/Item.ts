import * as express from 'express';
import {IItemModel} from '../models/Item';
import * as mongoose from 'mongoose';
import {IListModel} from '../models/List';

export function controller(Item: mongoose.Model<IItemModel>, List: mongoose.Model<IListModel>){
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
      .populate ('user','name')
      .exec((err, items) => {
        if (err) return next(err);
        res.json(items);
      });
  }

  function getOne(req: express.Request, res: express.Response, next: Function) {
    Item.findOne({_id: req.params.id})
      .populate('user','name')
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
      .populate('user','name')
      .exec((err, items) => {
        if (err) return next(err);
        res.json(items);
      });
    } else {
      Item.find({})
      .populate('user','name')
      .exec((err, items) => {
        if (err) return next(err);
        res.json(items);
      });
    }
  }

  function create(req: express.Request, res: express.Response, next: Function) {
    let i = new Item(req.body);
    i.user = req['payload']._id;
    i.save ((err,item:IItemModel) => {
      if (err) return next(err);
      res.json(item);
    });
  }

  function update(req: express.Request, res: express.Response, next: Function) {
    Item.update({_id:req.params.id, user:req['payload']._id},req.body,(err,numRows) => {
      if (err) return next(err);
      res.json({message: 'Item has been updated.'});
    });
  }

  function remove(req: express.Request, res: express.Response, next: Function) {
    Item.remove({_id:req.params.id, user:req['payload']._id}, (err) => {
      if (err) return next(err);
      res.json({message: 'Item has been removed.'});
    });
  }
}
