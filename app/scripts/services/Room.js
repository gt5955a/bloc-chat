(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        function addRoom(room) {
            rooms.$add({
                name: room
            });
        }
        
        return {
            all: rooms,
            new: addRoom
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();