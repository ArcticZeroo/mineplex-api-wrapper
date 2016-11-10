class PlayerFriends{
    constructor(data){
        this._friends = data;
    }

    getFriends(){
        return this._friends;
    }

    isFriend(player){
        return (this._friends.indexOf(player) > -1);
    }

    getAmount(){
        return this._friends.length;
    }

    toJSON(){
        return {friends: this.getFriends()};
    }
}

module.exports = PlayerFriends;