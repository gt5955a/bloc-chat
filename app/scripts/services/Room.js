(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        function addRoom(room) {
        //  console.log(rooms);
            rooms.$add({
                $value: room
            });
        }
        
        function getMessages(roomId) {
            return $firebaseArray(firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId));
        }
        
        return {
            all: rooms,
            newRoom: addRoom,
            getMessages: getMessages
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();