class Fountain{
    constructor(data){
        this.brawlActive = data.brawlActive;
        this.percent     = data.percent;
    }

    isBrawlActive(){
        return this.brawlActive;
    }

    getBrawlActiveString(){
        return (this.brawlActive) ? 'active' : 'inactive';
    }

    getPercentFull(){
        return this.percent;
    }

    getMultiplier(){
        var percentFull = this.getPercentFull();
        if(percentFull >= 300) return 3.0;
        if(percentFull >= 200) return 2.0;
        return 1.0;
    }
}

module.exports = Fountain;