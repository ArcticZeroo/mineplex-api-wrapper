let RegionStatus = require('./RegionStatus');

class NetworkStatus{
    constructor(data){
        this.us          = new RegionStatus('US', data.US);
        this.eu          = new RegionStatus('EU', data.EU);
        this.playerCount = data.playerCount;
    }

    getPlayerCount(){
        return this.playerCount;
    }

    getRegionEuStatus(){
        return this.us;
    }

    getRegionUsStatus(){
        return this.eu;
    }
}

module.exports = NetworkStatus;