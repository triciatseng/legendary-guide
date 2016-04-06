namespace app.Services{
  interface IListResource extends ng.resource.IResource<IListResource>,app.i.IList{}
  interface IListClass extends ng.resource.IResourceClass<IListResource>{update(params: Object, body: Object)}
  export class ListService{
    private ListResource: IListClass;

    public getAll(){
      return this.ListResource.query();
    }

    public getOne(id: string){
      return this.ListResource.get({id: id});
    }

    public search(query: string){
      if(!query) query = "";
      let q = this.$q.defer();
      this.$http.get('/api/v1/list/search?query=' + query).then((res) => {
        q.resolve(res.data);
      });
      return q.promise;
    }

    public create(list: app.i.IList){
      return this.ListResource.save(list).$promise;
    }

    public update(list: app.i.IList){
      return this.ListResource.update({id: list._id}, {dateCreated: list.dateCreated, food: list.food}).$promise;
    }

    public remove(id: string){
      return this.ListResource.remove({id: id}).$promise;
    }

    constructor(private $resource: ng.resource.IResourceService, private $http: ng.IHttpService, private $q: ng.IQService){
      this.ListResource = <IListClass>$resource('/api/v1/list/:id',null, {
        'update': {method: 'PUT'}
      });
    }
  }
  angular.module('app').service('ListService',ListService);
}
