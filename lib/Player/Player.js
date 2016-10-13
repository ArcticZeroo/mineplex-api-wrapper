var PlayerComponents = require('./Components');

class Player extends PlayerComponents.Data{
    constructor(data){
        super(data);
        this._accountId = data.accountId;
        this._rank      = data.rank;
        this._lastLogin = new Date(data.lastLogin);
        this.status     = new PlayerComponents.Status(data.playerStatus);
        this.friends    = new PlayerComponents.Friends(data.friends);
        this.stats      = new PlayerComponents.Stats(data.playerStats);
    }

    getAccountId(){
        return this._accountId;
    }

    getRank(){
        return this._rank;
    }

    getLastLogin(){
        return this._lastLogin;
    }

    getStatus(){
        return this.status;
    }

    getFriends(){
        return this.friends
    }

    getStats(){
        return this.stats;
    }
}

module.exports = Player;