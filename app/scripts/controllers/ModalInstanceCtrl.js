(function() {
    function ModalInstanceCtrl($scope, $uibModalInstance, Room) {
        $scope.newRoomObject = {
            roomTitle: ''
        };
        
        $scope.addRoom = function() {
            var newRoom = $scope.newRoomObject.roomTitle;
            Room.newRoom(newRoom);
        };
        
        $scope.newUsernameObject = {
            userName: ''
        };
        
        $scope.createUsername = function() {
            var newUsername = $scope.newUsernameObject.userName;
            $scope.currentUsername = Room.newUsername(newUsername);
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();