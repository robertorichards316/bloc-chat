(function() {
  function HomeCtrl(Room, $modal) {
    this.rooms = Room.all;

    this.createRoomModal = function() {
      $modal.open({
        templateUrl: 'templates/createRoomModal.html',
        controller: 'CreateRoomCtrl',
        size: 'sm'
      });
    };

    this.changeRoom = function() {
      console.log('room was clicked!');
    };
  }

  angular
    .module('BlocChat')
    .controller('HomeCtrl', ['Room', '$modal', HomeCtrl]);
})();
