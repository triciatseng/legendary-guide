namespace app.Controllers{
  export class TripDetailsController{
    public trip: app.i.ITrip;
    public food: app.i.IFood;

    public addFood(){
      this.food.trip = this.trip._id;
      this.FoodService.create(this.food).then((res) => {
        this.trip.groceries.push(res);
        this.food.foodName = "";
        this.food.datePurch = null;
        this.food.dateExp = null;
        this.food.storage = "";
        this.$state.go('TripsDetails',{id: this.trip._id});
      });
    }

    public removeFood(f:app.i.IFood){
      this.FoodService.remove(f._id).then(() => {
        this.trip.groceries.splice(this.trip.groceries.indexOf(f),1);
      });
    }

    public cancelTrip(){
      this.TripService.remove(this.trip._id).then(() => {
        this.$state.go('Trips');
      });
    }

    constructor(private TripService: app.Services.TripService,private FoodService: app.Services.FoodService, private $state:ng.ui.IStateService,private $stateParams: ng.ui.IStateParamsService){
      this.trip = TripService.getOne($stateParams['id']);
    }
  }
  angular.module('app').controller('TripDetailsController',TripDetailsController);
}
