namespace app.Controllers {
  export class ItemCreateController{
    public item: app.i.IItem;

    public create() {
      this.ItemService.create(this.item).then((res) => {
        this.$state.go('Food');
      })
    }
    constructor(private ItemService: app.Services.ItemService, private $state: ng.ui.IStateService){}
  }
  angular.module('app').controller('ItemCreateController',ItemCreateController);
}
