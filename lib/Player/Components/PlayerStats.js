class PlayerStats{
    constructor(data){
        this.stats = data;
    }

    getStats(){
        return this.stats;
    }

    getStatsForGame(game){
        if(!this.stats[game]) this.stats[game] = {};
        return this.stats[game];
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
        return JSON.stringify(this.stats);
    }

    toJSON(){
        return this.stats;
    }
}

module.exports = PlayerStats;