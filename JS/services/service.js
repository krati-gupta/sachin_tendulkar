'use strict';

/**
 * @ngdoc service
 * @name sachApp.service:getData
 * @requires $resource
 * @description getting data from the data.json file
 * @author Akshat Gupta <akshatg1274@hotmail.com>
 * @version v1.0
 */

sachApp.factory('getData',['$resource', function ($resource) {
    
    return {
        getQuotes : function () {
            return $resource('http://localhost:8080/public_html/Data/data.json',{
                get:{method:'GET'}
            })
        }
    }
}]);