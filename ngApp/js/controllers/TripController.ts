namespace app.Controllers{
  export class TripController{
    public trips: Array<app.i.ITrip>;
    public trip: app.i.ITrip;

    public createTrip(){
      this.TripService.create(this.trip).then((res) => {
        this.$state.go('TripDetails',{id:this.trip._id});
      });
    }

    constructor(private TripService: app.Services.TripService, private $state:ng.ui.IStateService){
      this.trips = TripService.getAll();

    }
  }
  angular.module('app').controller('TripController',TripController);
}
