namespace app.Controllers{
  export class ListSearchController{
    public lists: Array<app.i.IList>;

    constructor(private ListService: app.Services.ListService, private $stateParams: ng.ui.IStateParamsService) {
      ListService.search($stateParams['query']).then((res:Array<app.i.IList>) => {
        this.lists = res;
      });
    }
  }
  angular.module('app').controller('ListSearchController', ListSearchController);
}
