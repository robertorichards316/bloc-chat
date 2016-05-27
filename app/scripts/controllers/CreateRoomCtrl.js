(function() {
  function CreateRoomCtrl($scope, $modalInstance, Room) {

    $scope.newRoom = {};

    $scope.createNewRoom = function(){
      if(!$scope.newRoom.name || $scope.newRoom.name !== ''){
        var newRoom = {
          name: $scope.newRoomName
        };

        Room.create(newRoom).then(function(){
          $scope.newRoom.name = '';
          $modalInstance.close();
        });

      } else {
        alert("Room name is undefined");
      }
    };

    $scope.cancel = function(){
      $modalInstance.close('cancel');
    };
  }

  angular
    .module('BlocChat')
    .controller('CreateRoomCtrl', ['$scope', '$modalInstance', 'Room', CreateRoomCtrl]);
})();
