'use strict';

/**
 * @ngdoc controller
 * @name sachApp.controller:statsController
 * @description
 *      Controller for controlling stats.html page
 * @requires $scope
 * @author Akshat Gupta <akshatg1274@hotmail.com>
 * @version 1.0
 */

sachApp.controller('statsController',['$scope', 'getData',function ($scope, getData) {
    
    getData.getQuotes().get().$promise.then(function (data) {
        //using the data received and binding to the view
        $scope.quote = data.quote4;
        $scope.quote1 = data.quote6;
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