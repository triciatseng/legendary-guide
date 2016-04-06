namespace app.Controllers{
  export class ItemSearchController{
    public food: Array<app.i.IItem>;

    constructor(private $stateParams: ng.ui.IStateParamsService, private ItemService: app.Services.ItemService){
      ItemService.search($stateParams['query']).then((res:Array<app.i.IItem>) => {
        this.food = res;
      });
    }
  }
  angular.module('app').controller('ItemSearchController',ItemSearchController);
}
