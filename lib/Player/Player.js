var PlayerComponents = require('./Components');

class Player extends PlayerComponents.Data{
    constructor(data){
        super(data);
        this.rank       = data.rank;
        this.lastLogin  = new Date(data.lastLogin);
        this.level      = data.level;
        this.status     = new PlayerComponents.Status(data.status);
        this.friends    = new PlayerComponents.Friends(data.friends);
        this.stats      = new PlayerComponents.Stats(data.stats);
    }

    getRank(){
        return this.rank;
    }

    getLastLogin(){
        return this.lastLogin;
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
        return this.level.value;
    }

    getLevelColor(){
        return this.level.color;
    }

    toJSON(){
        return {
            rank     : this.getRank(),
            level    : this.getLevel(),
            name     : this.getName(),
            uuid     : this.getUUID(),
            friends  : this.getFriends().toJSON(),
            status   : this.getStatus().toJSON(),
            lastLogin: this.getLastLogin(),
            stats    : this.getStats().toJSON()
        }
    }
}

module.exports = Player;