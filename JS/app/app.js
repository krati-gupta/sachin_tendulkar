'use strict'

/**
 * @ngdoc overview
 * @name sachApp
 * @description Main module of the application handling routing.
 * 'ngResource' - for making RESTful calls
 * 'ngRoute' - for defining and controlling routing
 * @author Akshat Gupta <akshatg1274@hotmail.com>
 * @version v1.0
 */

var sachApp = angular.module('sachApp',['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {
        //defining routes for routing, like when about comes load about.html
        $routeProvider
            .when('/',{
                templateUrl : 'views/main.html',
                controller: 'mainController'
            })

            .when('/about',{
                templateUrl: 'views/about.html',
                controller: 'aboutController'
            })

            .when('/stats',{
                templateUrl: 'views/stats.html',
                controller: 'statsController'
            })
    })