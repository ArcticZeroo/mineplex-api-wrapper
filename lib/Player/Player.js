var PlayerComponents = require('./Components');

class Player extends PlayerComponents.Data{
    constructor(data){
        super(data);
        this._accountId = data.accountId;
        this._rank      = data.rank;
        this._lastLogin = new Date(data.lastLogin);
        this._level     = data.level;
        this._levColor  = data.levelColor;
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

    getLevel(){
        return this._level;
    }

    getLevelColor(){
        return this._levColor;
    }
}

module.exports = Player;