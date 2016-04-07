import * as mongoose from 'mongoose';

export interface IItemModel extends app.i.IItem, mongoose.Document{}

let itemSchema = new mongoose.Schema({
  name: {type: String, required: true, lowercase: true},
  datePurch: {type: String, required: true},
  dateExp: {type: String, required: true},
  storage: {type: String, required: true},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  list: {type: mongoose.Schema.Types.ObjectId, ref: 'List'}
});

export let Item = mongoose.model<IItemModel>('Item', itemSchema);
