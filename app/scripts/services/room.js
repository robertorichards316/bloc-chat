(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("blinding-torch-4829.firebaseIO.com");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {
      all: rooms
    };
  }

  angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
})();
