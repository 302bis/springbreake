(function() {
  'use strict';
  angular
    .module('app2')
    .directive('cleanbar', cleanbar);
  function cleanbar() {
    var directive = {
      templateUrl: 'app/components/cleanbar/cleanbar.html',
    };
    return directive;
  }
})();