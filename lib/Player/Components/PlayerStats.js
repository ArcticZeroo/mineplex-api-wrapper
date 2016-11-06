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

    getStatsForGroup(group){
        return this.getStatsForGame(group);
    }

    getStatForGroup(group, stat){
        return this.getStatsForGame(group, stat);
    }

    /**
     * @returns {Array} statGroups An array of strings which contain all stat categories the player has.
     */
    getStatGroups(){
        return Object.keys(this.getStats());
    }

    toString(){
        return JSON.stringify(this._stats);
    }

    toJSON(){
        return this._stats;
    }
}

module.exports = PlayerStats;