namespace app.Controllers{
  export class ListCreateController {
    public list: app.i.IList;

    public create() {
      this.ListService.create(this.list).then((res) => {
        this.$state.go('Lists');
      })
    }

    constructor(private ListService: app.Services.ListService, private $state: ng.ui.IStateService) {}
  }
  angular.module('app').controller('ListCreateController',ListCreateController);
}
