class RegionStatus{
    constructor(region, data){
        this._region = region;

        this._status = data.status;

        this._playerCount = data.playerCount;

        this._motd        = [data.motd.mainLine];
        for(let motdLine of data.motd.otherLines){
            this._motd.push(motdLine);
        }
    }

    getRegion(){
        return this._region;
    }

    getStatus(){
        return this._status;
    }

    getPlayerCount(){
        return this._playerCount;
    }

    getMotdLines(){
        return this._motd;
    }

    getMotd(){
        return this._motd.join('\n');
    }

    toJSON(){
        return {
            status        : this.getStatus(),
            motd          : this.getMotdLines(),
            playerCount   : this.getPlayerCount(),
        }
    }
}

module.exports = RegionStatus;