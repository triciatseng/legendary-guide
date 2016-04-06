import * as mongoose from 'mongoose';

export interface IListModel extends app.i.IList, mongoose.Document{}

let listSchema = new mongoose.Schema({

  dateCreated: {type: Number, required: true},
  image: {type: String, default: ''},
  food: {type: Array, required: true},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  items: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'}
});

export let List = mongoose.model<IListModel>('List', listSchema);
