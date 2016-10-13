class PlayerStats{
    constructor(data){
        this._stats = {};

        for(var item in data){
            var info    = item.split('.');
            var game    = info[0];
            var stat    = info[1];
            var value   = data[item];

            this.addStat(game, stat, value);
        }
    }

    getStats(game){
        if(!this._stats[game]) this._stats[game] = {};
        return this._stats[game];
    }

    getStat(game, stat){
        var gameStats = this.getStats(game);
        return (gameStats[stat]) ? gameStats[stat] : 0;
    }

    addStat(game, stat, value){
        if(!this._stats[game]) this._stats[game] = {};
        this._stats[game][stat] = value;
    }

    toString(){
        return JSON.stringify(this._stats);
    }
}

module.exports = PlayerStats;