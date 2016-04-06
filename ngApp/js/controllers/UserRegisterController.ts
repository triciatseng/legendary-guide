namespace app.Controllers {
  export class UserRegisterController{
    public user = {name: undefined, email: undefined, password: undefined, imageURL: undefined, _id: undefined};

    public register() {
      this.UserService.register(this.user).then(() => {
        this.$state.go('Home');
      })
    }

    constructor(private UserService: app.Services.UserService, private $state: ng.ui.IStateService) {}
  }
  angular.module('app').controller('UserRegisterController',UserRegisterController);
}
