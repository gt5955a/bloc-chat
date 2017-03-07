(function() {
    function HomeCtrl($scope, Room, Message) {
        // List all Rooms
        $scope.rooms = Room.all;
        
        // Set Current Room
        $scope.selectRoom = function(room) {
            $scope.currentRoom = room;
            var selectedRoom = room.$id;
            $scope.currentMessages = Room.getByRoomId(selectedRoom);
        };
        
        // Send Message
        $scope.sendMessage = function(room) {
            Message.send($scope.newMessage, $scope.currentRoom.$id);
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', HomeCtrl]);
})();