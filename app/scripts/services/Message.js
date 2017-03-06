(function() {
    function Message($firebaseArray, $cookies, Room) {
        var ref = firebase.database().ref().child("messages");
        var allMessages = $firebaseArray(ref);
        
        function getByRoomId(roomId) {
            var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId);
            return $firebaseArray(ref);
        }
        
        function send(newMessage, roomId) {
            allMessages.$add({
                username: $cookies.blocChatCurrentUser,
                content: newMessage,
                sentAt: Date.now(),
                roomId: roomId
            });
        }
        
        return {
            getByRoomId: getByRoomId,
            send: send
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', 'Room', Message]);
})();