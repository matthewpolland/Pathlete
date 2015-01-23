
angular.module('pathleteApp.services', [])

.factory('Info', function ($http) {
  console.log("IN FACTORY");
  var getInfo = function(){
    return $http({
      method: 'GET',
      url: '/userdata'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    getInfo: getInfo,
  };

});
