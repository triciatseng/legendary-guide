namespace app.Controllers{
  export class UserController{
    public status = {_id:null, name:null, email:null}
    public user = {};

    public login(){
      this.UserService.login(this.user).then(() => {
        this.$state.go('Account');
      })
    }

    constructor(private UserService: app.Services.UserService, private $state: ng.ui.IStateService){
      this.status = UserService.status;
    }
  }
  angular.module('app').controller('UserController',UserController);
}
