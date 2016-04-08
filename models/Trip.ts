import * as mongoose from 'mongoose';

export interface ITripModel extends app.i.ITrip, mongoose.Document{}

let tripSchema = new mongoose.Schema({
  dateCreated: {type: Number},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  groceries: {type: mongoose.Schema.Types.ObjectId, ref: 'Food'}
});

export let Trip = mongoose.model<ITripModel>('Trip',tripSchema);
