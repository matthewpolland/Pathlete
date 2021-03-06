'use strict';

/**
 * @ngdoc function
 * @name pathleteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pathleteApp
 */
app.controller('MainCtrl', function ($scope, $http, Info) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //user info
    $scope.userInfo

    $scope.getUserInfo = function(){
      Info.getInfo()
        .then(function(user){
          $scope.userInfo = user;
        });
    }
  });
