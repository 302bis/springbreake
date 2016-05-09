(function() {
  'use strict';

  angular
    .module('app2')
    .controller('Paso1Controller', Paso1Controller);

  /** @ngInject */
  function Paso1Controller($timeout, webDevTec, toastr, $scope, $http) {
    var vm = this;

    function Paso1Controller() {
      vm.classAnimation = '';
    }
    
    $scope.SendData = function () {
           // use $.param jQuery function to serialize data from JSON 
            var data = $.param({
                nombre: $scope.nombre,
                paterno: $scope.paterno,
                materno: $scope.materno,
                fecha_nac: $scope.fecha_nac
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/json;charset=utf-8;'
                }
            }
            $http({
                method:'POST',
                url:"https://microservice-personas-obparticularesmx-dev.appls.boaw.paas.gsnetcloud.com/validateUserData",
                data : {
                    nombre: $scope.nombre,
                    paterno: $scope.paterno,
                    materno: $scope.materno,
                    fecha_nac: $scope.fecha_nac
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data.datos.dato;
            })
            
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        };
    
    
  }
  
})();

