//Trips -- view all shopping Trips TripController
//TripDetails -- add food to trip TripDetailsController
//Groceries -- see all food items and search FoodController
//AddFood -- add food item FoodAddController
//FoodUpdate -- see details and delete food FoodUpdateController

'use strict';
namespace app{
  angular.module('app', ['ui.router','ngResource','ui.bootstrap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $httpProvider: ng.IHttpProvider
  ) => {
      $stateProvider.state('Home', {
        url: '/',
        templateUrl: '/templates/intro.html'
      }).state('Login', {
        url: '/login',
        templateUrl: '/templates/login.html',
        controller: 'UserController',
        controllerAs: 'vm'
      }).state('Register', {
        url: '/register',
        templateUrl: '/templates/register.html',
        controller: 'RegisterController',
        controllerAs: 'vm'
      }).state('Account', {
        url: '/account',
        templateUrl: '/templates/account.html',
        controller: 'AccountController',
        controllerAs: 'vm'
      }).state('Trips', {
        url: '/shoppingtrips',
        templateUrl: '/templates/trips.html',
        controller: 'TripController',
        controllerAs: 'vm'
      }).state('AddTrip', {
        url: '/trip-add',
        templateUrl: '/templates/trip-add.html',
        controller: 'TripAddController',
        controllerAs: 'vm'
      }).state('TripDetails', {
        url: '/trip-details/:id',
        templateUrl: '/templates/trip-details.html',
        controller: 'TripDetailsController',
        controllerAs: 'vm'
      }).state('Groceries', {
        url: '/groceries',
        templateUrl: '/templates/groceries.html',
        controller: 'FoodController',
        controllerAs: 'vm'
      }).state('AddFood', {
        url: '/food-add',
        templateUrl: '/templates/food-add.html',
        controller: 'FoodAddController',
        controllerAs: 'vm'
      }).state('FoodUpdate', {
        url: 'food-update',
        templateUrl: '/templates/food-update.html',
        controller: 'FoodUpdateController',
        controllerAs: 'vm'
      });
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
      $httpProvider.interceptors.push('AuthInterceptor');
  });
}
