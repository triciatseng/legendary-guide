namespace app.Services{
  interface ITripResource extends ng.resource.IResource<ITripResource>,app.i.ITrip{}
  interface ITripClass extends ng.resource.IResourceClass<ITripResource>{}

  export class TripService{
    private TripResource: ITripClass;

    public getAll(){
      return this.TripResource.query();
    }

    public getOne(id:string){
      return this.TripResource.get({id:id});
    }

    public create(trip:app.i.ITrip){
      return this.TripResource.save(trip).$promise;
    }

    public remove(id:string){
      return this.TripResource.remove({id:id}).$promise;
    }

    constructor(private $resource: ng.resource.IResourceService, private $http: ng.IHttpService, private $q: ng.IQService){
      this.TripResource = <ITripClass>$resource('/api/v1/trips/:id', null, {
        'update': {method: 'PUT'}
      });    }
  }
  angular.module('app').service('TripService',TripService);
}
