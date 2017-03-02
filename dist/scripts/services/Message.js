(function() {
    function Message($firebaseArray) {        
        return {
            getByRoomId: function(roomId) {
                var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId);
                return $firebaseArray(ref);
            },
            send: function(newMessage, roomId) {
                var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId);
                return $firebaseArray(ref).$add({
                    username: $cookies.blocChatCurrentUser,
                    content: newMessage,
                    sentAt: Date.now(),
                    roomId: roomId
                });
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();