(function() {
  'use strict';

  angular
    .module('app2')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      
      .state('main', {
        url: '/inicio',
        templateUrl: 'app/views/main/main.html'
      })
      
      .state('main.beneficios', {
        url: '/beneficios',
        templateUrl: 'app/views/beneficios.html'
      })
      
      .state('main.condiciones', {
        url: '/condiciones',
        templateUrl: 'app/views/condiciones.html'
      })
      .state('main.aviso-de-privacidad', {
        url: '/aviso-de-privacidad',
        templateUrl: 'app/views/aviso-de-privacidad.html'
      })

      
      .state('main.ingresar-telefono', {
        url: '/ingresar-email-y-telefono',
        templateUrl: 'app/views/contacto/data-contacto.html'
      })
      .state('main.ingresa-codigo', {
        url: '/ingresar-codigo',
        templateUrl: 'app/views/contacto/ingresa-codigo.html'
      })
      .state('main.reenviar-codigo', {
        url: '/reenviar-codigo',
        templateUrl: 'app/views/contacto/reenviar-codigo.html'
      })

      
      .state('main.seleccionar-credencial', {
        url: '/seleccionar-credencial',
        templateUrl: 'app/views/datos-usuario/credencial/seleccionar-credencial.html'
      })
      .state('main.subir-ine', {
        url: '/subir-ine',
        templateUrl: 'app/views/datos-usuario/credencial/subir-ine.html'
      })
      .state('main.subir-pasaporte', {
        url: '/subir-pasaporte',
        templateUrl: 'app/views/datos-usuario/credencial/subir-pasaporte.html'
      })
      .state('main.confirmar-credencial', {
        url: '/confirmar-credencial',
        templateUrl: 'app/views/datos-usuario/credencial/confirmar-credencial.html'
      })
      .state('main.validar-credencial', {
        url: '/validar-credencial',
        templateUrl: 'app/views/datos-usuario/credencial/validar-credencial.html'
      })

      
      .state('main.agregar-datos', {
        url: '/agregar-datos',
        templateUrl: 'app/views/datos-usuario/forms/options.html',
        controller: 'Paso1Controller',
        controllerAs: 'data_step1'
      })
      .state('main.agregar-datos.personales', {
        url: '/agregar-datos-personales',
        templateUrl: 'app/views/datos-usuario/forms/formulario_uno.html'
      })
      .state('main.agregar-datos.geograficos', {
        url: '/agregar-datos-geograficos',
        templateUrl: 'app/views/datos-usuario/forms/formulario_dos.html'
      })
      .state('main.agregar-datos.beneficiario', {
        url: '/agregar-datos-beneficiario',
        templateUrl: 'app/views/datos-usuario/forms/formulario_tres.html'
      })
      .state('main.registro-tarjeta', {
        url: '/registro-tarjeta',
        templateUrl: 'app/views/datos-usuario/registro-tarjeta.html'
      })
      
      
      
      .state('main.validacion-general', {
        url: '/validacion-general',
        templateUrl: 'app/views/validacion-general.html'
      })
      .state('main.contrato', {
        url: '/contrato',
        templateUrl: 'app/views/contrato/contrato.html'
      })
      .state('main.confirmacion', {
        url: '/confirmacion',
        templateUrl: 'app/views/contrato/confirmacion.html'
      })
      .state('main.pantalla-de-espera', {
        url: '/pantalla-de-espera',
        templateUrl: 'app/views/espera.html'
      })
      .state('main.pantalla-de-error', {
        url: '/pantalla-de-error',
        templateUrl: 'app/views/pantalla-de-error.html'
      })
      .state('main.notificacion', {
        url: '/notificacion',
        templateUrl: 'app/views/notificacion.html'
      });
      
    $urlRouterProvider.otherwise('/');
  }

})();
