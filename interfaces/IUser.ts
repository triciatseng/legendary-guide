namespace app.i {
  export interface IUser{
    _id: any;
    email: string;
    password: string;
    name: string;
    imageURL: string;

    food: Array<string|IItem>;
    lists: Array<string|IList>;
  }
}
