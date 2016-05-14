(function() {
  'use strict';

  angular
    .module('app2')
    .directive('cleanBar', cleanBar);

  /** @ngInject */
  function cleanBar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/cleanbar/cleanbar.html',
      scope: {
          creationDate: '='
      },
      controller: CleanbarController
    };

    return directive;

    /** @ngInject */
    function CleanbarController(moment) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
