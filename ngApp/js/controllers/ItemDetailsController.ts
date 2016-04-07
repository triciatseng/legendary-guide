namespace app.Controllers{
  export class ItemDetailsController{
    public item: app.i.IItem;
    public days;

    public remove(){
      this.ItemService.remove(this.item._id).then(() => {
        this.$state.go('Food');
      });
    }


    constructor(private ItemService: app.Services.ItemService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService){
      this.item = ItemService.getOne($stateParams['id']);
  }
  }
  angular.module('app').controller('ItemDetailsController',ItemDetailsController);
}
