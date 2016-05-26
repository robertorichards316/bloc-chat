(function() {
  function HomeCtrl() {
    this.rooms = ['Room 1', 'Room 2', 'Room 3'];
    this.modalRoom = function() {
      console.log("Clicked in modal room");
    }
        this.open = function (){
          var modalInstance = $uibModal.open({
            controller: 'ModalCtrl as modal',
            templateUrl: '/templates/modal.html'
          });
        };
  }

  angular
      .module('blocChat')
      .controller('HomeCtrl', ['$uibModal', '$scope', HomeCtrl]);
})();
