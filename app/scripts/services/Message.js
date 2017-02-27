(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo(roomId);
        var messages = $firebaseArray(ref);
        
        function sendMessages(newMessage) {
            
        }
        
        return {
            getMessages: messages,
            sendMessages: sendMessages
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();