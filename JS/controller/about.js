'use strict';
/**
 * @ngdoc controller
 * @name sachApp.controller:aboutController
 * @description
 *      Controller for binding the data receiven from data.json file
 * @requires $scope
 * @requires getData
 * @author Akshat Gupta <akshatg1274@hotmail.com>
 * @version 1.0
 */
sachApp.controller('aboutController',['$scope','getData',function ($scope, getData) {
    
    //making service call for retrieving data from data.json

    getData.getQuotes().get().$promise.then(function (data) {
        //using the data received and binding to the view
        $scope.quote = data.quote1;
        $scope.quote1 = data.quote2;
        $scope.quote2 = data.quote5;
        $scope.intro = data.Intro;
        $scope.records = data.records;
    })

    //dynamically handling navbar scrolling
    window.onscroll = function () { navScroll() };

    var navScroll = function () {
        //add class
        if(document.body.scrollTop > 200){
            $('nav').addClass('colorMeNav');
        } else if(document.body.scrollTop <= 30) {
            //remove class
            $('nav').removeClass('colorMeNav')
        }
    }

}]);