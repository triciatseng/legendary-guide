namespace app.Controllers {
  export class ListDetailsController{
    public list: app.i.IList;

    public remove() {
      this.ListService.remove(this.list._id).then(() => {
        this.$state.go('Lists');
      });
    }

    constructor(private ListService: app.Services.ListService, private $state: ng.ui.IStateService, private $stateParams: ng.ui.IStateParamsService) {
      this.list = ListService.getOne($stateParams['id']);
    }
  }
  angular.module('app').controller('ListDetailsController', ListDetailsController);
}
