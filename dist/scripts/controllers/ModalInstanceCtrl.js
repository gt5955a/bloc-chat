(function() {
    function ModalInstanceCtrl($scope, $uibModalInstance, $cookies, Room) {
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
            $cookies.put('blocChatCurrentUser', $scope.newUsernameObject.userName);
            $uibModalInstance.close();
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', '$cookies', 'Room', ModalInstanceCtrl]);
})();