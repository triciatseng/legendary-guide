'use strict';
namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $httpProvider: ng.IHttpProvider) => {

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/intro.html'
    }).state('Food', {
      url: '/food-all',
      templateUrl: '/templates/food.html',
      controller: 'ItemHomeController',
      controllerAs: 'vm'
    }).state('FoodDetails', {
      url: '/food-details/:id',
      templateUrl: '/templates/food_details.html',
      controller: 'ItemDetailsController',
      controllerAs: 'vm'
    }).state('FoodAdd', {
      url: '/food-add',
      templateUrl: '/templates/food_add.html',
      controller: 'ItemCreateController',
      controllerAs: 'vm'
    }).state('FoodUpdate', {
      url: '/food-update/:id',
      controller: 'ItemUpdateController',
      controllerAs: 'vm'
    }).state('Login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'UserLoginController',
      controllerAs: 'vm'
    }).state('Register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'UserRegisterController',
      controllerAs: 'vm'
    }).state('Lists', {
      url: '/lists',
      templateUrl: '/templates/list.html',
      controller: 'ListHomeController',
      controllerAs: 'vm'
    }).state('ListAdd',  {
      url: '/list-add',
      templateUrl: '/templates/list_add.html',
      controller: 'ListCreateController',
      controllerAs: 'vm'
    }).state('ListDetails', {
      url: '/list-details/:id',
      templateUrl: '/templates/list_details.html',
      controller: 'ListDetailsController',
      controllerAs: 'vm'
    }).state('ListUpdate', {
      url: '/list-update/:id',
      templateUrl: '/templates/list_update.html',
      controller: 'ListUpdateController',
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('AuthInterceptor');
  });
}
