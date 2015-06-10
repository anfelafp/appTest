

angular.module('starter.controllers', [])

.controller('UsuariosCtrl', function($scope, Items) {
  $scope.items = Items;

  //evento del boton adicionar, recibe un objeto de tipo item para ser adicionado a la base de datos
  $scope.addItem = function(i) {
    var ref = new Firebase("https://angelatest.firebaseio.com/");
    
    ref.push({
      Usuario:{
            Nombre: i.Usuario.Nombre,
            Apellido: i.Usuario.Apellido,
            Imagen: "angela.jpg"
      }
    });

    //limpia el formulario
    i.Usuario.Nombre = "";
    i.Usuario.Apellido ="";
    i.Usuario.Imagen = "";
    $scope.items = i;
    alert("Usuario agregado exitosamente");
  }
})

