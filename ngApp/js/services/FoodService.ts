namespace app.Services{
  interface IFoodResource extends ng.resource.IResource<IFoodResource>,app.i.IFood{}
  interface IFoodClass extends ng.resource.IResourceClass<IFoodResource>{}

  export class FoodService{
    private FoodResource: IFoodClass;

    public getAll(){
      return this.FoodResource.query();
    }

    public getOne(id:string){
      return this.FoodResource.get({id:id});
    }

    public search(query:string){
      if (!query) query = "";
      let q = this.$q.defer();
      this.$http.get('/api/v1/groceries/search?query='+query).then((res) => {
        q.resolve(res.data);
      });
      return q.promise;
    }

    public create(food: app.i.IFood){
      return this.FoodResource.save(food).$promise;
    }

    public soloCreate(food: app.i.IFood){
      return this.FoodResource.save(food).$promise;
    }

    public update(food:app.i.IFood){
      return this.FoodResource.update({id:food._id}).$promise;
    }

    public remove(id:string){
      return this.FoodResource.remove({id:id});
    }

    public soloRemove(id:string){
      return this.FoodResource.remove({id:id});
    }

    constructor(private $resource: ng.resource.IResourceService, private $http: ng.IHttpService, private $q: ng.IQService){
      this.FoodResource = <IFoodClass>$resource('/api/v1/groceries/:id',null, {
        'update': {method: 'PUT'}
      });
    }
  }
  angular.module('app').service('FoodService',FoodService);
}
