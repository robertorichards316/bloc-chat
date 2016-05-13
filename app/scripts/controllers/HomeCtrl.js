(function() {
  function HomeCtrl() {
    this.rooms = ['room1', 'room2', 'room3'];
  }

  angular
      .module('blocChat')
      .controller('HomeCtrl', HomeCtrl);
})();
