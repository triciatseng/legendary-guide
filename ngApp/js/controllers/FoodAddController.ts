namespace app.Controllers{
  export class FoodAddController{
    public food: app.i.IFood;

    public addFood(){
      this.FoodService.soloCreate(this.food).then((res) => {
        this.$state.go('Groceries');
      })
    }

    constructor(private FoodService: app.Services.FoodService, private $state: ng.ui.IStateService){}
  }
  angular.module('app').controller('FoodAddController',FoodAddController);
}
