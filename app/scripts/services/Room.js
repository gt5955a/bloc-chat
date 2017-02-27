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
        
        function createUsername(username) {
            // console.log(username);
            rooms.$add({
                $value: username
            });
        }
        
        return {
            all: rooms,
            newRoom: addRoom,
            getMessages: getMessages,
            createUsername: createUsername
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();