namespace app.Controllers{
  export class ListUpdateController{
    public list: app.i.IList;

    public update() {
      this.ListService.update(this.list).then((res) => {
        this.$state.go('ListDetails',{id: this.list._id});
      });
    }

    constructor(private ListService: app.Services.ListService, private $state: ng.ui.IStateService, private $stateParams: ng.ui.IStateParamsService) {
      this.list = ListService.getOne($stateParams['id']);
    }
  }
  angular.module('app').controller('ListUpdateController',ListUpdateController);
}
