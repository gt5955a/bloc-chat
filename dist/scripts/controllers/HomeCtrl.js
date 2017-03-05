(function() {
    function HomeCtrl($scope, Room, Message) {
        // List all Rooms
        $scope.rooms = Room.all;
        
        // Set Current Room
        $scope.selectRoom = function(room) {
            $scope.currentRoom = room;
            var selectedRoom = room.$id;
            $scope.currentMessages = Message.getByRoomId(selectedRoom);
            $scope.sendMessage = Message.send($scope.newMessage, selectedRoom);
        };
        
        // Send Message
        //$scope.sendMessage = function(room) {
            //$scope.currentRoom = room;
            //Message.send($scope.newMessage, room.$id);
        //};
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', HomeCtrl]);
})();