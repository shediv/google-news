'use strict';

angular.module('angularRestfulAuth')
    .factory('Main', ['$http', function($http){
        return {
            //Get Trending News
            trending: function(getUrl, success, error) {
                $http.get(getUrl).then(success, error);
            },
            
            //Get article details
            articleDetails: function(getUrl, success, error) {
                $http.get(getUrl).then(success, error);
            },

            //Get article summary
            articleSummary: function(content) {
                var text = content;
                return $http.post('/summary', {text : text}).then(function(response){
                    return response.data;
                });
            }
        };
    }
]);