class PlayerStats{
    constructor(data){
        this.playerStats = data;
    }

    getStats(){
        return this.playerStats;
    }

    getStatsForGame(game){
        if(!this.playerStats[game]) this.playerStats[game] = {};
        return this.playerStats[game];
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
        return JSON.stringify(this.playerStats);
    }

    toJSON(){
        return this.playerStats;
    }

    getTimeIngame(){
        return this.playerStats.Global.TimeInGame;
    }

    //TODO: Finish getTotalExperienceEarned
    /*getTotalExperienceEarned(){
        for(let category of Object.keys())
    }*/
}

module.exports = PlayerStats;