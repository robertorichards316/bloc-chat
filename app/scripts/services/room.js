(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("blinding-torch-4829.firebaseIO.com");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));
    var messageRef = firebaseRef.child('messages');

    function addRoom(newRoomName, closeModal) {
      rooms.$add({
        $value: newRoomName
      });
      closeModal();
    }
    function getMessages(rmId) {
      var roomMessages = $firebaseArray(messageRef.orderByChild('roomId').equalTo(rmId));
      return roomMessages;
    }

    return {
      all: rooms,
      addRoom: addRoom,
      getMessages: getMessages
    };
  }

  angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
})();
