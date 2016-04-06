namespace app.Controllers{
  export class ItemUpdateController{
    public item: app.i.IItem;

    public update() {
      this.ItemService.update(this.item).then((res) => {
        this.$state.go('FoodDetails',{id: this.item._id});
      });
    }

    constructor(private ItemService: app.Services.ItemService, private $state: ng.ui.IStateService, private $stateParams: ng.ui.IStateParamsService){
      this.item = ItemService.getOne($stateParams['id']);
    }
  }
  angular.module('app').controller('ItemUpdateController',ItemUpdateController);
}
