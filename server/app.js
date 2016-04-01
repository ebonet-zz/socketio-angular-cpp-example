(function() {
  'use strict';

  var app = angular.module('socket-example',['btford.socket-io'])


  app.controller('MainController', ['$scope','SocketService','$log',
    function($scope,socket, $log){

      var nickname = "hello";

      $scope.msgs = []
      $scope.sendMessage = function(msg) {
        socket.emit('message', msg)
      };

      $scope.$on('socket:message', function(ev, data) {
        $scope.msgs.push(data)
      })
    }
  ])

  app.factory('SocketService', ['socketFactory', function(socketFactory) {
    var socket = socketFactory({
      ioSocket: io.connect('/?client=web')
    });

    socket.forward('message');

    return socket;
  }])

})();
