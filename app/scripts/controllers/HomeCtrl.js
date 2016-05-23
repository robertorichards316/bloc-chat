(function() {
  function HomeCtrl() {
    this.rooms = ['Room 1', 'Room 2', 'Room 3'];


  }

  angular
      .module('blocChat')
      .controller('HomeCtrl', HomeCtrl);
})();
