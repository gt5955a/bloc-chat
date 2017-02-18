(function() {
    function ModalInstanceCtrl($scope, $uibModalInstance, Room) {
        $scope.newRoomObject = {
            roomTitle: ''
        };
        
        $scope.addRoom = function() {
            var newRoom = $scope.newRoomObject.roomTitle;
            Room.addRoom(newRoom);
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();