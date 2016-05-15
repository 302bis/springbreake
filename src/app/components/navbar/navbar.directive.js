(function() {
  'use strict';
  angular
    .module('app2')
    .directive('topNavbar', topNavbar);
  function topNavbar() {
    var directive = {
      templateUrl: 'app/components/navbar/navbar.html',
    };
    return directive;
  }
})();
