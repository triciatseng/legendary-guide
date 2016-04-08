namespace app.Controllers{
  export class TripAddController{
    public trip: app.i.ITrip;

    public createTrip(){
      this.TripService.create(this.trip).then((res) => {
        this.$state.go('TripDetails');
      });
    }

    constructor(private TripService: app.Services.TripService, private $state: ng.ui.IStateService){}
  }
  angular.module('app').controller('TripAddController',TripAddController);
}
