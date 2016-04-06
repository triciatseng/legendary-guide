namespace app.i {
  export interface IList{
    _id: any;
    dateCreated: number;
    image: string;
    food: Array<string>;

    user: (string | IUser);
    items: (string | IItem);
  }
}
