(function() {
  'use strict';

  angular
    .module('app2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    function MainController() {
      vm.classAnimation = '';
    }
  }

  function MainController($scope, $http){
    $http.get('assets/data/content.json').success(function(data) {
      $scope.content = data;
    });
  }


})();

