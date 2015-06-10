angular.module('starter.controllers', [])

.controller('UsuariosCtrl', function($scope, Items) {
  $scope.items = Items;

  $scope.addItem = function(i) {
    var ref = new Firebase("https://angelatest.firebaseio.com/");
    
    ref.push({
      Usuario:{
            Nombre: i.Usuario.Nombre,
            Apellido: i.Usuario.Apellido,
            Imagen: "ionic.png"
      }
    });
    i.Usuario.Nombre = "";
    i.Usuario.Apellido ="";
    i.Usuario.Imagen = "";
    $scope.items = i;
    var alertPopup = $ionicPopup.alert({
     title: 'Don\'t eat that!',
     template: 'It might taste good'
   });
  }
})

