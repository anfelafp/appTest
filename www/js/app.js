
angular.module('starter', ['ionic', 'starter.controllers', 'firebase'])

//consulta a la base de datos, retorna un json con los datos y se crea un array con los objetos
.factory("Items", function($firebaseArray) {
  var itemsRef = new Firebase("https://angelatest.firebaseio.com/");
  return $firebaseArray(itemsRef);
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
   
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
    
      StatusBar.styleLightContent();
    }
  });
})

//configuracion de la app
.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider

  
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

 

  .state('tab.dash', {
    url: '/usuarios',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-usuarios.html',
        controller: 'UsuariosCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'UsuariosCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/usuarios');

});
