(function() {
    function Message($firebaseArray, $cookies) {
        var ref = var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId);
        var getByRoomId = $firebaseArray(ref);
        
        
        function send(newMessage, roomId) {
            getByRoomId.$add({
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
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();