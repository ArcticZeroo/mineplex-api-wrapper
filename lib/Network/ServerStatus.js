class ServerStatus{
    constructor(data){
        this._name           = data.name;
        this._group          = data.group;
        this._playerCount    = data.playerCount;
        this._maxPlayerCount = data.maxPlayerCount;
        this._motd           = data.motd;

        this.getServerGroup  = this.getGroup;
    }

    getName(){
        return this._name;
    }

    getGroup(){
        return this._group;
    }

    getPlayerCount(){
        return this._playerCount;
    }

    getMaxPlayerCount(){
        return this._maxPlayerCount;
    }

    getOnlineRatio(){
        return this.getPlayerCount()/this.getMaxPlayerCount();
    }

    getMotd(){
        return this._motd;
    }

    toJSON(){
        return {
            name          : this.getName(),
            group         : this.getGroup(),
            motd          : this.getMotd(),
            playerCount   : this.getPlayerCount(),
            maxPlayerCount: this.getMaxPlayerCount()
        }
    }
}

module.exports = ServerStatus;