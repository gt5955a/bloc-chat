(function() {
    function Message($firebaseArray, $cookies, Room) {
        var ref = firebase.database().ref();
        var allMessages = $firebaseArray(ref.child("messages"));
        
        //function getByRoomId(roomId) {
        //    return $firebaseArray(allMessages.orderByChild("roomId").equalTo(roomId));
        //}
        
        function send(newMessage, roomId) {
            allMessages.$add({
                username: $cookies.get('blocChatCurrentUser'),
                content: newMessage,
                sentAt: Date.now(),
                roomId: roomId
            });
        }
        
        return {
            //getByRoomId: getByRoomId,
            send: send
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', 'Room', Message]);
})();