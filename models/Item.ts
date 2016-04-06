import * as mongoose from 'mongoose';

export interface IItemModel extends app.i.IItem, mongoose.Document{}

let itemSchema = new mongoose.Schema({
  name: {type: String, required: true},
  datePurch: {type: Number, required: true},
  dateExp: {type: Number, required: true},
  pantryIMG: {type: String, default: ''},
  fridgeIMG: {type: String, default: ''},
  freezerIMG: {type: String, default: ''},
  storage: {type: String, required: true},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  list: {type: mongoose.Schema.Types.ObjectId, ref: 'List'}
});

export let Item = mongoose.model<IItemModel>('Item', itemSchema);
