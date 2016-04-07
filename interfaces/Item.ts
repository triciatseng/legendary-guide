namespace app.i{
  export interface IItem{
    _id: any;
    name: string;
    datePurch: string;
    dateExp: string;
    storage: string;

    user: (string | IUser);
    list: (string | IList);
  }
}
