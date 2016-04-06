namespace app.Controllers {
  export class ListHomeController {
    public list: Array <app.i.IList>;

    constructor(private ListService: app.Services.ListService) {
      this.list = ListService.getAll();
    }
  }

  angular.module('app').controller('ListHomeController', ListHomeController);
}
