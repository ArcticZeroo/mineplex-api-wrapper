class PlayerStats{
    constructor(data){
        this._stats = data;
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