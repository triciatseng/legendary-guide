namespace app.i {
  export interface IFood{
    _id: any;
    foodName: string;
    datePurch: number;
    dateExp: number;
    storage: string;

    trip: (string | ITrip);
    user: (string | IUser);
  }
}
