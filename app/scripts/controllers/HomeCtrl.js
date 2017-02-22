(function() {
    function HomeCtrl($scope, Room) {
        $scope.rooms = Room.all;
        
        $scope.selectRoom = function(room) {
            var selectedRoom = room.$id;
            Room.getMessages(selectedRoom);
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();