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
            $cookies.blocChatCurrentUser = $scope.newUsernameObject.userName;
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', '$cookies', 'Room', ModalInstanceCtrl]);
})();