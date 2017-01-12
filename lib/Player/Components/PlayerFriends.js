class PlayerFriends{
    constructor(data){
        this.friends = data;
    }

    getFriends(){
        return this.friends;
    }

    isFriend(player){
        for(var friend of this.friends){
            if(friend.name.toLowerCase() == player.toLowerCase()) return true;
        }
        return false;
    }

    getCount(){
        return this.friends.length;
    }

    toJSON(){
        return {friends: this.getFriends()};
    }
}

module.exports = PlayerFriends;