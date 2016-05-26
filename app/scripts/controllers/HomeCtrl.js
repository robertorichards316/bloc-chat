(function() {
  function HomeCtrl() {
    this.rooms = ['Room 1', 'Room 2', 'Room 3'];
    this.modalRoom = function() {
      console.log("Clicked in modal room");
    };

  }

  angular
      .module('blocChat')
      .controller('HomeCtrl', HomeCtrl);
})();
