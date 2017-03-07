(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        function addRoom(room) {
            rooms.$add({
                $value: room
            });
        }

        function getByRoomId(roomId) {
            return $firebaseArray(firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId));
        }
        
        function createUsername(username) {
            rooms.$add({
                $value: username
            });
        }
        
        return {
            all: rooms,
            newRoom: addRoom,
            getByRoomId: getByRoomId,
            createUsername: createUsername
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();