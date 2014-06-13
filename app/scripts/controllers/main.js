'use strict';

/**
 * @ngdoc function
 * @name wsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wsApp
 */
angular.module('wsApp')
    .controller('MainCtrl', ['$scope','getDb',function ($scope,getDb) {
        getDb.then(function(res){
            $scope.soundTracks = res.data.GetDatabaseResult.soundTracks;
            console.log ($scope.soundTracks); // debug
        });
    }]);