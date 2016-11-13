class Fountain{
    constructor(data){
        this._brawlActive = data.brawlActive;
        this._percent     = data.percent;
    }

    isBrawlActive(){
        return this._brawlActive;
    }

    getPercentFull(){
        return this._percent;
    }

    getMultiplier(){
        var percentFull = this.getPercentFull();
        if(percentFull >= 300) return 3.0;
        if(percentFull >= 200) return 2.0;
        return 1.0;
    }
}

module.exports = Fountain;