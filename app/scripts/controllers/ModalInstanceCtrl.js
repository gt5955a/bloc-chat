(function() {
    function ModalInstanceCtrl($scope, $uibModalInstance, Room) {
        $scope.newRoomObject = {
            roomTitle: ''
        };
        
        $scope.addRoom = function() {
            var newRoom = $scope.newRoomObject.roomTitle;
            Room.newRoom(newRoom);
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();