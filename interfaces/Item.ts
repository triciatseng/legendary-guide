namespace app.i{
  export interface IItem{
    _id: any;
    name: string;
    datePurch: number;
    dateExp: number;
    pantryIMG: string;
    fridgeIMG: string;
    storage: string;

    user: (string | IUser);
    list: (string | IList);
  }
}
