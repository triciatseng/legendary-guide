import * as mongoose from 'mongoose';

export interface IFoodModel extends app.i.IFood, mongoose.Document{}

let foodSchema = new mongoose.Schema({
  foodName: {type: String, required: true},
  datePurch: {type: Number, required: true},
  dateExp: {type: Number, required: true},
  storage: {type: String, required: true},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  trip: {type: mongoose.Schema.Types.ObjectId, ref: 'Trip'}
});

export let Food = mongoose.model<IFoodModel>('Food',foodSchema);
