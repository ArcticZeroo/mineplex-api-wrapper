class RegionStatus{
    constructor(region, data){
        this.region = region;

        this.status = data.status;

        this.playerCount = data.playerCount;

        this.motd        = [data.motd.mainLine];
        for(let motdLine of data.motd.otherLines){
            this.motd.push(motdLine);
        }
    }

    getRegion(){
        return this.region;
    }

    getStatus(){
        return this.status;
    }

    getPlayerCount(){
        return this.playerCount;
    }

    getMotdLines(){
        return this.motd;
    }

    getMotd(){
        return this.motd.join('\n');
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