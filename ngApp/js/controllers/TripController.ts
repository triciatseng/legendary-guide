namespace app.Controllers{
  export class TripController{
    public trips: Array<app.i.ITrip>;




    constructor(private TripService: app.Services.TripService, private $state:ng.ui.IStateService){
      this.trips = TripService.getAll();

    }
  }
  angular.module('app').controller('TripController',TripController);
}
