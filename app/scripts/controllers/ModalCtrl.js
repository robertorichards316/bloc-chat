(function() {
  function ModalCtrl() {
    this.newRoomName;

    this.addRoom = function() {
      Room.addRoom(this.newRoomName, this.cancel);
    };

  }

  angular
      .module('blocChat')
      .controller('ModalCtrl', ['Room', ModalCtrl]);
})();
