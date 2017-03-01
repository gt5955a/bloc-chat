(function() {
    function Message($firebaseArray) {        
        return {
            getByRoomId: function(roomId) {
                var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId);
                return $firebaseArray(ref);
            },
            // sendMessages: sendMessages
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();