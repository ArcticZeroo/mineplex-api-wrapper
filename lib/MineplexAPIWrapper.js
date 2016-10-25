var MineplexAPI  = require('mineplex-api');
var ServerStatus = require('./ServerStatus');
var Player       = require('./Player');
var Amplifiers   = require('./Amplifier');

class MineplexAPIWrapper{
    constructor(apikey){
        this.api = new MineplexAPI(apikey);
    }

    getServerStatus(callback){
        this.api.get.server((success, res)=>{
            if(!success) return callback(false, res);

            var status = new ServerStatus(res);
            callback(true, status);
        });
    }

    getServerTotal(callback){
        this.api.get.server((success, res)=>{
            if(!success) return callback(false, res);

            var status = new ServerStatus(res);
            callback(true, status.getTotal());
        });
    }

    getServerGroups(callback){
        this.api.get.server((success, res)=>{
            if(!success) return callback(false, res);

            var status = new ServerStatus(res);
            callback(true, status.getGroups());
        });
    }

    getPlayerInfo(player, callback){
        this.api.get.player.info(player, (success, res)=>{
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

    getPlayerFriends(player, callback){
        this.api.get.player.friends(player, (success, res)=>{
            if(!success) return callback(false, res);

            callback(true, new Player.Components.Friends(res));
        });
    }

    getPlayerStatus(player, callback){
        this.api.get.player.status(player, (success, res)=>{
            if(!success) return callback(false, res);

            callback(true, new Player.Components.Status(res));
        });
    }

    getAmplifierGroups(callback){
        this.api.get.amplifierGroup((success, res)=>{
            if(!success) return callback(false, res);

            callback(true, res);
        });
    }

    getAmplifiers(callback){
        this.api.get.amplifier.all((success, res)=>{
            if(!success) return callback(false, res);

            callback(true, new Amplifiers.AmplifierGroups(res));
        });
    }

    getAmplifiersForGroup(group, callback){
        this.api.get.amplifier.specific(group, (success, res)=>{
            if(!success) return callback(false, res);

            callback(true, new Amplifiers.AmplifierGroup(res));
        });
    }
}

module.exports = MineplexAPIWrapper;