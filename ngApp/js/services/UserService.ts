namespace app.Services{
  export class UserService{
    public status = {_id: null, email: null, name: null};

    public getToken(){
      return this.$window.localStorage.getItem('token');
    }

    public setToken(token: string){
     this.$window.localStorage.setItem('token',token);
    }

    public setUser(){
      let token = this.getToken();
      let u = JSON.parse(atob(token.split('.')[1]));
      this.status.name = u.name;
      this.status.email = u.email;
    }

    public clearUser(){
      this.status._id = null;
      this.status.name = null;
      this.status.email = null;
    }

    public login(user){
      let q = this.$q.defer();
      this.$http.post('/api/v1/users/login',user).then((res) => {
        this.setToken(res.data['token']);
        this.setUser();
        q.resolve();
      });
      return q.promise;
    }

    public logout(){
      this.$window.localStorage.removeItem('token');
      this.clearUser();
    }

    public register(user:app.i.IUser){
      let q = this.$q.defer();
      this.$http.post('/api/v1/users/register',user).then((res) => {
        this.setToken(res.data['token']);
        this.setUser();
        q.resolve();
      });
      return q.promise;
    }

    constructor(private $http: ng.IHttpService, private $q: ng.IQService, private $window: ng.IWindowService){
      if(this.getToken()) this.setUser();
    }
  }
  angular.module('app').service('UserService',UserService);
}
