var MineplexAPI  = require('mineplex-api');
var Player       = require('./Player');
var Amplifiers   = require('./Amplifier');
var Ranks        = require('./Ranks');
var ServerStatus = require('./Network');
var Fountain     = require('./Fountain');

class MineplexAPIWrapper{
    constructor(apiKey) {
        this.mineplexAPI = new MineplexAPI(apiKey);
        this.ranks       = Ranks;
        this.components  = {
            Player      : Player,
            Amplifiers  : Amplifiers,
            ServerStatus: ServerStatus,
            Fountain    : Fountain
        }
    }

    getApi(){
        return this.mineplexAPI;
    }

    getNetworkStatus(callback){
        this.mineplexAPI.get.network.status((success, res)=>{
            if(!success) return callback(false, res);

            callback(true, new ServerStatus.Network(res));
        });
    }

    getRegionUsStatus(callback){
        this.mineplexAPI.get.network.us.status((success, res)=>{
            if(!success) return callback(false, res);

            callback(true, new ServerStatus.Region('US', res));
        });
    }

    getRegionUsServer(server, callback){
        this.mineplexAPI.get.network.us.server(server, (success, res)=>{
            if(!success) return callback(false, res);

            callback(true, new ServerStatus.Server(res));
        });
    }

    getRegionEuStatus(callback){
        this.mineplexAPI.get.network.eu.status((success, res)=>{
            if(!success) return callback(false, res);

            callback(true, new ServerStatus.Region('EU', res));
        });
    }

    getRegionEuServer(server, callback){
        this.mineplexAPI.get.network.eu.server(server, (success, res)=>{
            if(!success) return callback(false, res);

            callback(true, new ServerStatus.Server(res));
        });
    }

    getPlayerInfo(player, callback){
        this.mineplexAPI.get.player.info(player, (success, res)=>{
            if(!success) return callback(false, res);

            callback(true, new Player.Player(res));
        });
    };

    getPlayerStats(player, callback){
        this.getPlayerInfo(player, (success, res)=>{
            if(!success) return callback(false, res);

            callback(true, res.getStats());
        });
    }

    getPlayerRank(player, callback){
        this.getPlayerInfo(player, (success, res)=>{
            if(!success) return callback(false, res);

            callback(true, res.getRank());
        });
    }

    getPlayerUUID(player, callback){
        this.getPlayerInfo(player, (success, res)=>{
            if(!success) return callback(false, res);

            callback(true, res.getUUID());
        });
    }

    getPlayerLevel(player, callback){
        this.getPlayerInfo(player, (success, res)=>{
            if(!success) return callback(false, res);

            callback(true, res.getLevel());
        });
    }

    getPlayerFriends(player, callback){
        this.mineplexAPI.get.player.friends(player, (success, res)=>{
            if(!success) return callback(false, res);

            callback(true, new Player.Components.Friends(res));
        });
    }

    getPlayerStatus(player, callback){
        this.mineplexAPI.get.player.status(player, (success, res)=>{
            if(!success) return callback(false, res);

            callback(true, new Player.Components.Status(res));
        });
    }

    getAmplifierGroups(callback){
        this.mineplexAPI.get.amplifierGroup((success, res)=>{
            if(!success) return callback(false, res);

            callback(true, res);
        });
    }

    getAmplifiers(callback){
        this.mineplexAPI.get.amplifier.all((success, res)=>{
            if(!success) return callback(false, res);

            callback(true, new Amplifiers.AmplifierGroups(res));
        });
    }

    getAmplifiersForGroup(group, callback){
        this.mineplexAPI.get.amplifier.specific(group, (success, res)=>{
            if(!success) return callback(false, res);

            callback(true, new Amplifiers.AmplifierGroup(res));
        });
    }

    getFountainStatus(callback){
        this.mineplexAPI.get.fountain((success, res)=>{
            if(!success) return callback(false, res);

            callback(true, new Fountain(res));
        });
    }
}

module.exports = MineplexAPIWrapper;