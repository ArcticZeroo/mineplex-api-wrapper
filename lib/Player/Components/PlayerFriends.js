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
}

module.exports = PlayerFriends;