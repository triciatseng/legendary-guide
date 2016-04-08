namespace app.Controllers{
  export class RegisterController{
    public user: app.i.IUser;

    public register(){
      this.UserService.register(this.user).then(() => {
        this.$state.go('Account');
      })
    }

    constructor(private UserService: app.Services.UserService, private $state: ng.ui.IStateService){}
  }
  angular.module('app').controller('RegisterController',RegisterController);
}
