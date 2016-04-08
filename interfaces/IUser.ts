namespace app.i {
  export interface IUser{
    _id: any;
    email: string;
    password: string;
    name: string;

    groceries: Array<string | IFood>;
    trips: Array<string | ITrip>;
  }
}
