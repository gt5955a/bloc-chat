(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        function addRoom(room) {
            console.log(rooms);
            rooms.$add({
                $value: room
            });
        }
        
        return {
            all: rooms,
            newRoom: addRoom
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();