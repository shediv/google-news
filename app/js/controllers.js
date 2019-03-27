'use strict';

/* Controllers */

angular.module('angularRestfulAuth')
    .controller('HomeCtrl', ['$rootScope', '$scope', '$location', 'Main', function($rootScope, $scope, $location, Main) {
        $scope.newsArticles = [];

        //Get  trending News
        $scope.trending = function() {
            $scope.newsAPI = '/topNews?country='+$scope.countryCode;

            Main.trending($scope.newsAPI, function(res) {
                $scope.newsData = res.data.articles;
                $scope.newsArticles = res.data.articles;
                $scope.count = res.data.articles.length;
                if(res.data.articles.length) $scope.showCarousel = true;
                $location.path('/')                                
            }, function() {
                $rootScope.error = 'Failed to Get News';
            })
        };

        //Get  Get Article Details
        $scope.getArticleDetails = function(url) {
            $scope.diffBotAPI = '/articleDetails?url='+ url;
            Main.articleDetails($scope.diffBotAPI, function(res) {
                  $scope.newsArticles.forEach(function(newsArticle){
                      if(newsArticle.url === url){
                        newsArticle.originalText = res.data.text;
                        newsArticle.originalTextLength = res.data.text.length;
                        newsArticle.summary = false;
                      }
                  $location.path('/')
                });
            }, function() {
                $rootScope.error = 'Failed article details';
            })
          };

        //Get  Get Article Details
        $scope.getArticleSummary = function(url) {
          $scope.diffBotAPI = '/articleDetails?url='+ url;
          Main.articleDetails($scope.diffBotAPI, function(res) {
              return Main.articleSummary(res.data.text).then(function(data){
                $scope.newsArticles.forEach(function(newsArticle){
                    if(newsArticle.url === url){
                      newsArticle.summary = data.summary;
                      newsArticle.summaryLength = data.summary.length;
                      newsArticle.originalText = false;
                    }
                 })
                $location.path('/')
              });
          }, function() {
              $rootScope.error = 'Failed article details';
          })
        };

    }])

.controller('MeCtrl', ['$rootScope', '$scope', '$location', 'Main', function($rootScope, $scope, $location, Main) {

        Main.me(function(res) {
            $scope.myDetails = res;
        }, function() {
            $rootScope.error = 'Failed to fetch details';
        })
}])