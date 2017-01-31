const MineplexAPI = require('mineplex-api');
const Ranks       = require('./Ranks');

class MineplexAPIWrapper{
    constructor(apikey) {
        this.api         = new MineplexAPI(apikey);
        this.mineplexAPi = this.api;

        this.ranks       = Ranks;

        this.getPlayerInfo         = this.api.get.player.info;
        
        function getPlayerComponentFunc(component) {
            return (player, cb)=>{
                this.getPlayerInfo(player, (err, res)=>{
                    if(err) return cb(err);

                    cb(null, res[component]);
                });
            }
        }
        
        this.getPlayerStats        = getPlayerComponentFunc('stats');
        this.getPlayerLevel        = getPlayerComponentFunc('level');
        this.getPlayerUUID         = getPlayerComponentFunc('uuid');
        this.getPlayerGems         = getPlayerComponentFunc('gems');
        this.getPlayerRank         = getPlayerComponentFunc('rank');

        this.getPlayerFriends      = this.api.get.player.friends;
        this.getPlayerStatus       = this.api.get.player.status;

        //Amplifiers
        this.getAmplifierGroups    = this.api.get.amplifier.groups;
        this.getAmplifiers         = this.api.get.amplifier.all;
        this.getAmplifiersForGroup = this.api.get.amplifier.specific;

        //Network
        this.getNetworkStatus      = this.api.get.network.status;

        this.getRegionUsStatus     = this.api.get.network.us.status;
        this.getRegionUsServer     = this.api.get.network.us.status;

        this.getRegionEuStatus     = this.api.get.network.eu.status;
        this.getRegionEuServer     = this.api.get.network.eu.status;


        //Fountain
        this.getFountainStatus     = this.api.get.fountain;
    }
}

module.exports = MineplexAPIWrapper;