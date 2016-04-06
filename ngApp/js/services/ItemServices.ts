namespace app.Services {
  interface IItemResource extends ng.resource.IResource<IItemResource>,app.i.IItem{}
  interface IItemClass extends ng.resource.IResourceClass<IItemResource>{update(params: Object, body: Object)}

  export class ItemService{
    private ItemResource: IItemClass;

    public getAll(){
      return this.ItemResource.query();
    }

    public getOne(id: string){
      return this.ItemResource.get({id: id});
    }

    public search(query: string){
      if(!query) query = "";
      let q = this.$q.defer();
      this.$http.get('/api/v1/food/search?query=' + query).then((res) => {
        q.resolve(res.data);
      });
      return q.promise;
    }

    public create(item: app.i.IItem){
      return this.ItemResource.save(item).$promise;
    }

    public update(item: app.i.IItem){
      return this.ItemResource.update({id: item._id}, {name: item.name, datePurch: item.datePurch, dateExp: item.dateExp, storage: item.storage}).$promise;
    }

    public remove(id: string){
      return this.ItemResource.remove({id: id}).$promise;
    }

    constructor(private $resource: ng.resource.IResourceService, private $http: ng.IHttpService, private $q: ng.IQService){
      this.ItemResource = <IItemClass>$resource('/api/v1/food/:id', null, {
        'update': {method: 'PUT'}
      });
    }
  }
  angular.module('app').service('ItemService', ItemService);
}
