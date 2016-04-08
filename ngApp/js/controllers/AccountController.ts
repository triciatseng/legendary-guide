namespace app.Controllers{
  export class AccountController{
    public trip: app.i.ITrip;
    public food: app.i.IFood;

    public createTrip(){
      this.TripService.create(this.trip).then((res) => {
        this.$state.go('TripDetails');
      });
    }

    public addFood(){
      this.FoodService.soloCreate(this.food).then((res) => {
        this.$state.go('Groceries');
      });
    }

    public logout(){
      this.UserService.logout();
      this.$state.go('Login');
    }

    constructor(private $stateParams: ng.ui.IStateParamsService, private TripService: app.Services.TripService, private UserService: app.Services.UserService, private $location: ng.ILocationService, private $state: ng.ui.IStateService, private FoodService: app.Services.FoodService){

      if($location.search().code){
        UserService.setToken($location.search().code);
        UserService.setUser();
        $location.search("");
        if($location.hash()) $location.hash("");
      }
    }
  }
  angular.module('app').controller('AccountController',AccountController);
}
