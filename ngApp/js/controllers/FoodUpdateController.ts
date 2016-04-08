namespace app.Controllers{
  export class FoodUpdateController{
    public food: app.i.IFood;

    public update(){
    this.FoodService.update(this.food).then((res) => {
      this.$state.go('Groceries');
    })
    }

    public removeFood(){
      this.FoodService.soloRemove(this.food._id).then(() => {
        this.$state.go('Groceries');
      })
    }

    constructor(private FoodService: app.Services.FoodService, private $state: ng.ui.IStateService, private $stateParams: ng.ui.IStateParamsService){
      this.food = FoodService.getOne($stateParams['id']);
    }
  }
  angular.module('app').controller('FoodUpdateController',FoodUpdateController);
}
