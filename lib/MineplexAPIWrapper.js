var MineplexAPI  = require('mineplex-api');
var ServerStatus = require('./ServerStatus');
var Player       = require('./Player');
var Amplifiers   = require('./Amplifier');
var Ranks        = require('./Ranks');

class MineplexAPIWrapper{
    constructor(apikey){
        this.mineplexAPI = new MineplexAPI(apikey);
        this.ranks       = Ranks;
    }

    getApi(){
        return this.mineplexAPI;
    }

    getServerStatus(callback){
        this.mineplexAPI.get.server((success, res)=>{
            if(!success) return callback(false, res);

            var status = new ServerStatus(res);
            callback(true, status);
        });
    }

    getServerTotal(callback){
        this.mineplexAPI.get.server((success, res)=>{
            if(!success) return callback(false, res);

            var status = new ServerStatus(res);
            callback(true, status.getTotal());
        });
    }

    getServerGroups(callback){
        this.mineplexAPI.get.server((success, res)=>{
            if(!success) return callback(false, res);

            var status = new ServerStatus(res);
            callback(true, status.getGroups());
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
}

module.exports = MineplexAPIWrapper;