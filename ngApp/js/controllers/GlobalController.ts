namespace app.Controllers{
  export class GlobalController{
    public status = {_id:null, name:null, email:null};

    constructor(private UserService: app.Services.UserService){
      this.status = UserService.status;
    }
  }
  angular.module('app').controller('GlobalController',GlobalController);
}
