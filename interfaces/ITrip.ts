namespace app.i{
  export interface ITrip{
      _id: any;
      dateCreated: number;
      dummy: number;
      groceries: [string | IFood];
      user: (string | IUser);
  }
}
