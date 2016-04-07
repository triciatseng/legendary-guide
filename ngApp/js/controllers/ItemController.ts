namespace app.Controllers {
  export class ItemHomeController {
    public food: Array <app.i.IItem>;


    constructor(private ItemService: app.Services.ItemService) {
      this.food = ItemService.getAll();
    }
  }

  angular.module('app').controller('ItemHomeController', ItemHomeController);
}
