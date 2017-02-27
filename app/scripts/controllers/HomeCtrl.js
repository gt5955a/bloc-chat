(function() {
    function HomeCtrl($scope, Room, Message) {
        $scope.rooms = Room.all;
        
        $scope.selectRoom = function(room) {
            $scope.currentRoom = room;
            var selectedRoom = room.$id;
            $scope.currentMessages = Message.getMessages(selectedRoom);
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', HomeCtrl]);
})();