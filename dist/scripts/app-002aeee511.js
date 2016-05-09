!function(){"use strict";angular.module("app2",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","restangular","ui.router","ngMaterial","toastr"])}(),function(){"use strict";function e(e,t,a,o,r){o.SendData=function(){$.param({nombre:o.nombre,paterno:o.paterno,materno:o.materno,fecha_nac:o.fecha_nac});r({method:"POST",url:"https://microservice-personas-obparticularesmx-dev.appls.boaw.paas.gsnetcloud.com/validateUserData",data:{nombre:o.nombre,paterno:o.paterno,materno:o.materno,fecha_nac:o.fecha_nac},headers:{"Content-Type":"application/json"}}).success(function(e,t,a,r){o.PostDataResponse=e.datos.dato}).error(function(e,t,a,r){o.ResponseDetails="Data: "+e+"<hr />status: "+t+"<hr />headers: "+a+"<hr />config: "+r})}}e.$inject=["$timeout","webDevTec","toastr","$scope","$http"],angular.module("app2").controller("Paso1Controller",e)}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{key:"jade",title:"Jade",url:"http://jade-lang.com/",description:"Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.",logo:"jade.png"}];this.getTec=e}angular.module("app2").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("app2").directive("acmeNavbar",e)}(),function(){"use strict";function e(e,t,a){}e.$inject=["$timeout","webDevTec","toastr"],angular.module("app2").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("app2").run(e)}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("beneficios",{url:"/beneficios",templateUrl:"app/views/beneficios.html"}).state("condiciones",{url:"/condiciones",templateUrl:"app/views/condiciones.html"}).state("aviso-de-privacidad",{url:"/aviso-de-privacidad",templateUrl:"app/views/aviso-de-privacidad.html"}).state("ingresar-telefono",{url:"/ingresar-telefono",templateUrl:"app/views/ingresar-telefono.html"}).state("agregar-credencial",{url:"/agregar-credencial",templateUrl:"app/views/agregar-credencial.html"}).state("validar-credencial",{url:"/validar-credencial",templateUrl:"app/views/validar-credencial.html"}).state("agregar-datos",{url:"/agregar-datos",templateUrl:"app/views/forms/options.html",controller:"Paso1Controller",controllerAs:"data_step1"}).state("agregar-datos.personales",{url:"/agregar-datos-personales",templateUrl:"app/views/forms/formulario_uno.html"}).state("agregar-datos.geograficos",{url:"/agregar-datos-geograficos",templateUrl:"app/views/forms/formulario_dos.html"}).state("agregar-datos.beneficiario",{url:"/agregar-datos-beneficiario",templateUrl:"app/views/forms/formulario_tres.html"}).state("registro-tarjeta",{url:"/registro-tarjeta",templateUrl:"app/views/registro-tarjeta.html"}).state("validacion-general",{url:"/validacion-general",templateUrl:"app/views/validacion-general.html"}).state("contrato",{url:"/contrato",templateUrl:"app/views/contrato.html"}).state("confirmacion",{url:"/confirmacion",templateUrl:"app/views/confirmacion.html"}).state("pantalla-de-espera",{url:"/pantalla-de-espera",templateUrl:"app/views/espera.html"}).state("pantalla-de-error",{url:"/pantalla-de-error",templateUrl:"app/views/error.html"}).state("notificacion",{url:"/notificacion",templateUrl:"app/views/notificacion.html"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app2").config(e)}(),function(){"use strict";angular.module("app2").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("app2").config(e)}(),angular.module("app2").run(["$templateCache",function(e){e.put("app/main/main.html","<div layout-gt-xs layout-align=center><md-content><section><br><h1>Página de navegación, app santander mobile</h1><br><md-button ui-sref=beneficios class=md-raised>Beneficios</md-button><md-button ui-sref=condiciones class=md-raised>Condiciones</md-button><md-button ui-sref=aviso-de-privacidad class=md-raised>Aviso de privacidad</md-button><md-button ui-sref=ingresar-telefono class=md-raised>Ingresar teléfono</md-button><md-button ui-sref=agregar-credencial class=md-raised>Agregar foto de la credencial</md-button><md-button ui-sref=validar-credencial class=md-raised>Validar credencial</md-button><md-button ui-sref=agregar-datos class=md-raised>Agregar datos</md-button><md-button ui-sref=agregar-datos.personales class=md-raised>Agregar datos personales</md-button><md-button ui-sref=agregar-datos.geograficos class=md-raised>Agregar datos geograficos</md-button><md-button ui-sref=agregar-datos.beneficiario class=md-raised>Agregar datos de beneficiario</md-button><md-button ui-sref=registro-tarjeta class=md-raised>Registro de tarjeta</md-button><md-button ui-sref=validacion-general class=md-raised>Validación general</md-button><md-button ui-sref=contrato class=md-raised>Contrato</md-button><md-button ui-sref=confirmacion class=md-raised>Confirmación</md-button><md-button ui-sref=pantalla-de-espera class=md-raised>Pantalla de espera</md-button><md-button ui-sref=pantalla-de-error class=md-raised>Pantalla de error</md-button><md-button ui-sref=notificacion class=md-raised>Pantalla de notificación</md-button></section></md-content></div>"),e.put("app/views/agregar-credencial.html",'<div layout-gt-xs layout-align=center><md-content><header><acme-navbar></acme-navbar></header><br><h1>Agregar credencial</h1><br><section flex layout=row layout-align="left center"><md-button ui-sref=home class=md-raised>Home</md-button></section><footer><md-button ui-sref=ingresar-telefono class=md-raised>Paso anterior</md-button></footer></md-content></div>'),e.put("app/views/aviso-de-privacidad.html",'<div layout-gt-xs layout-align=center><md-content><header><acme-navbar></acme-navbar></header><br><h1>Beneficios de la cuenta</h1><br><section flex layout=row layout-align="left center"><md-button ui-sref=home class=md-raised>Home</md-button></section><footer><md-button ui-sref=condiciones class=md-raised>Paso anterior</md-button></footer></md-content></div>'),e.put("app/views/beneficios.html",'<div layout-gt-xs layout-align=center><md-content><header><acme-navbar></acme-navbar></header><br><h1>Beneficios de la cuenta</h1><br><section flex layout=row layout-align="left center"><md-button ui-sref=home class=md-raised>Home</md-button></section><footer></footer></md-content></div>'),e.put("app/views/condiciones.html",'<div layout-gt-xs layout-align=center><md-content><header><acme-navbar></acme-navbar></header><br><h1>Condiciones</h1><br><section flex layout=row layout-align="left center"><md-button ui-sref=home class=md-raised>Home</md-button></section><footer></footer></md-content></div>'),e.put("app/views/confirmacion.html",'<div layout-gt-xs layout-align=center><md-content><header><acme-navbar></acme-navbar></header><br><h1>Beneficios de la cuenta</h1><br><section flex layout=row layout-align="left center"><md-button ui-sref=home class=md-raised>Home</md-button></section><footer></footer></md-content></div>'),e.put("app/views/contrato.html",'<div layout-gt-xs layout-align=center><md-content><header><acme-navbar></acme-navbar></header><br><h1>Beneficios de la cuenta</h1><br><section flex layout=row layout-align="left center"><md-button ui-sref=home class=md-raised>Home</md-button></section><footer></footer></md-content></div>'),e.put("app/views/espera.html",'<div layout-gt-xs layout-align=center><md-content><header><acme-navbar></acme-navbar></header><br><h1>Beneficios de la cuenta</h1><br><section flex layout=row layout-align="left center"><md-button ui-sref=home class=md-raised>Home</md-button></section><footer></footer></md-content></div>'),e.put("app/views/ingresar-telefono.html",'<div layout-gt-xs layout-align=center><md-content><header><acme-navbar></acme-navbar></header><br><h1>Beneficios de la cuenta</h1><br><section flex layout=row layout-align="left center"><md-button ui-sref=home class=md-raised>Home</md-button></section><footer></footer></md-content></div>'),e.put("app/views/notificacion.html",'<div layout-gt-xs layout-align=center><md-content><header><acme-navbar></acme-navbar></header><br><h1>Beneficios de la cuenta</h1><br><section flex layout=row layout-align="left center"><md-button ui-sref=home class=md-raised>Home</md-button></section><footer></footer></md-content></div>'),e.put("app/views/pantalla-de-error.html",'<div layout-gt-xs layout-align=center><md-content><header><acme-navbar></acme-navbar></header><br><h1>Beneficios de la cuenta</h1><br><section flex layout=row layout-align="left center"><md-button ui-sref=home class=md-raised>Home</md-button></section><footer></footer></md-content></div>'),e.put("app/views/registro-tarjeta.html",'<div layout-gt-xs layout-align=center><md-content><header><acme-navbar></acme-navbar></header><br><h1>Beneficios de la cuenta</h1><br><section flex layout=row layout-align="left center"><md-button ui-sref=home class=md-raised>Home</md-button></section><footer></footer></md-content></div>'),e.put("app/views/validacion-general.html",'<div layout-gt-xs layout-align=center><md-content><header><acme-navbar></acme-navbar></header><br><h1>Beneficios de la cuenta</h1><br><section flex layout=row layout-align="left center"><md-button ui-sref=home class=md-raised>Home</md-button></section><footer></footer></md-content></div>'),e.put("app/views/validar-credencial.html",'<div layout-gt-xs layout-align=center><md-content><header><acme-navbar></acme-navbar></header><br><h1>Beneficios de la cuenta</h1><br><section flex layout=row layout-align="left center"><md-button ui-sref=home class=md-raised>Home</md-button></section><footer></footer></md-content></div>'),e.put("app/views/forms/formulario_dos.html",'<div layout=vertical layout-fill><md-content><h2>Formulario dos</h2><article><form name=projectForm><md-input-container class=md-block flex-gt-sm><label>Nombre</label><input id=nombretxt type=text required name=nombre ng-model=nombre><div ng-messages=projectForm.nombre.$error><div ng-message=required>Campo requerido.</div></div></md-input-container><md-input-container class=md-block flex-gt-sm><label>Apellido Paterno</label><input id=idappaterno type=text name=paterno></md-input-container><md-input-container class=md-block flex-gt-sm><label>Apellido Materno</label><input id=idapmaterno type=text name=materno></md-input-container><md-datepicker id=idfecha name=fecha_nac ng-model=fecha_nac md-placeholder="fecha de nacimiento"></md-datepicker>{{ PostDataResponse[0].persona }}<br><!--{{ PostDataResponse }}  --><md-button class=md-raised>SIGUIENTE</md-button></form></article></md-content></div>'),e.put("app/views/forms/formulario_tres.html","<div layout=vertical layout-fill><h2>Formulario tres</h2></div>"),e.put("app/views/forms/formulario_uno.html",'<div layout=vertical layout-fill><md-content><h2>Formulario uno</h2><article><form name=projectForm ng-controller=Paso1Controller><md-input-container class=md-block flex-gt-sm><label>Nombre</label><input id=nombretxt type=text required name=nombre ng-model=nombre><div ng-messages=projectForm.nombre.$error><div ng-message=required>This is required.</div></div></md-input-container><md-input-container class=md-block flex-gt-sm><label>Apellido Paterno</label><input id=idappaterno type=text name=paterno ng-model=paterno></md-input-container><md-input-container class=md-block flex-gt-sm><label>Apellido Materno</label><input id=idapmaterno type=text name=materno ng-model=materno></md-input-container><input id=idfecha type=date class=form-control placeholder="fecha de nacimiento" name=fecha_nac ng-model=fecha_nac> {{ PostDataResponse[0].persona }}<br><!--{{ PostDataResponse }}  --><md-button ng-click=SendData() class=md-raised>SIGUIENTE</md-button></form></article></md-content></div>'),e.put("app/views/forms/options.html",'<div layout-gt-xs layout-align=center><md-content><header><acme-navbar></acme-navbar></header><br><h1>Completa tus datos</h1><br><section flex layout=row layout-align="left center"><md-button ui-sref=.personales class=md-raised>Formulario uno</md-button><md-button ui-sref=.geograficos class=md-raised>Formulario dos</md-button><md-button ui-sref=.beneficiario class=md-raised>Formulario tres</md-button></section><section ng-controller=Paso1Controller>{{ PostDataResponse }}<div ui-view=""></div></section></md-content></div>'),e.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><section flex layout=row layout-align="left center"><div class=navbar-header><a class=navbar-brand href=#><img src=assets/images/isotipo.png> <span>Santander</span></a></div></section></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-002aeee511.js.map
