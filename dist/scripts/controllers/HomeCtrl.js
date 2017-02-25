(function() {
    function HomeCtrl($scope, Room) {
        $scope.rooms = Room.all;
        
        $scope.selectRoom = function(room) {
            $scope.currentRoom = room;
            var selectedRoom = room.$id;
            $scope.currentMessages = Room.getMessages(selectedRoom);
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();