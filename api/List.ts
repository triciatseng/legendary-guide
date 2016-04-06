import * as express from 'express';
import {IListModel} from '../models/List';
import * as mongoose from 'mongoose';

export function controller(List: mongoose.Model<IListModel>){
  return {
    getAll: getAll,
    getOne: getOne,
    search: search,
    create: create,
    update: update,
    remove: remove
  }

  function getAll(req: express.Request, res: express.Response, next: Function){
    List.find({})
      .exec((err,lists) => {
        if (err) return next(err);
        res.json(lists);
      });
  }

  function getOne(req: express.Request, res: express.Response, next: Function){
    List.findOne({_id: req.params.id})
      .exec((err,list) => {
        if (err) return next(err);
        res.json(list);
      });
  }

  function search(req: express.Request, res: express.Response, next: Function){
    if(req.query.query){
      List.find({
        $text: {
          $search: req.query.query
        }
      })
      .exec((err,lists) => {
        if (err) return next(err);
        res.json(lists);
      });
    } else {
      List.find({})
        .exec((err,lists) => {
          if (err) return next(err);
          res.json(lists);
        });
    }
  }

  function create(req: express.Request, res: express.Response, next: Function){
    let l = new List(req.body);
    l.save ((err,list:IListModel) => {
      if (err) return next(err);
      res.json(list);
    });
  }

  function update(req: express.Request, res: express.Response, next: Function){
    List.update({_id:req.params.id},req.body,(err,numRows) => {
      if (err) return next(err);
      res.json({message: 'List has been updated!'});
    });
  }

  function remove(req: express.Request, res: express.Response, next: Function){
    List.remove({_id:req.params.id}, (err) => {
      if (err) return next(err);
      res.json({message: 'List has been removed.'});
    });
  }
}
