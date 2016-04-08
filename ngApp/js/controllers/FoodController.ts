namespace app.Controllers{
  export class FoodController{
    public groceries: Array<app.i.IFood>;

    constructor(private FoodService: app.Services.FoodService,private $stateParams: ng.ui.IStateParamsService){
      FoodService.search($stateParams['query']).then((res:Array<app.i.IFood>) => {
        this.groceries = res;
      });

      this.groceries = FoodService.getAll();
    }
  }
  angular.module('app').controller('FoodController',FoodController);
}
