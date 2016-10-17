class PlayerStats{
    constructor(data){
        this._stats = {};

        for(var item in data){
            var info    = item.split('.');
            var game    = info[0];
            var stat    = info.splice(1).join(' ');
            var value   = data[item];

            this.addStat(game, stat, value);
        }
    }

    addStat(game, stat, value){
        if(!this._stats[game]) this._stats[game] = {};
        this._stats[game][stat] = value;
    }

    getStats(){
        return this._stats;
    }

    getStatsForGame(game){
        if(!this._stats[game]) this._stats[game] = {};
        return this._stats[game];
    }

    getStatForGame(game, stat){
        var gameStats = this.getStatsForGame(game);
        return (gameStats[stat]) ? gameStats[stat] : 0;
    }

    toString(){
        return JSON.stringify(this._stats);
    }

    toJSON(){
        return this._stats;
    }
}

module.exports = PlayerStats;