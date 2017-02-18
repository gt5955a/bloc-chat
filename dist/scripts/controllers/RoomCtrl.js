(function() {
    function RoomCtrl($scope, $uibModal, Room) {
        $scope.open = function() {
            $uibModal.open({
                templateUrl: '/templates/rooms.html',
                controller: 'ModalInstanceCtrl'
            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', '$uibModal', 'Room', RoomCtrl]);
})();