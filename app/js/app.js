'use strict';

angular.module('angularRestfulAuth', [
    'ngRoute',
    'angular-loading-bar',
    'ngMaterial'
])
.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    $routeProvider.
        when('/', {
            templateUrl: 'partials/videos.html',
            controller: 'HomeCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);