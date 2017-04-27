class ServerStatus{
    constructor(data){
        this.name           = data.name;
        this.group          = data.group;
        this.playerCount    = data.playerCount;
        this.maxPlayerCount = data.maxPlayerCount;
        this.motd           = data.motd;

        this.getServerGroup  = this.getGroup;
    }

    getName(){
        return this.name;
    }

    getGroup(){
        return this.group;
    }

    getPlayerCount(){
        return this.playerCount;
    }

    getMaxPlayerCount(){
        return this.maxPlayerCount;
    }

    getOnlineRatio(){
        return this.getPlayerCount()/this.getMaxPlayerCount();
    }

    getMotd(){
        return this.motd;
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