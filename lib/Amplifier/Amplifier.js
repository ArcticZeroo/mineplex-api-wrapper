var Player = require('../Player/');

class Amplifier extends Player.Components.Data{
    constructor(data, group){
        super(data, 'playerName');
        this.group           = group;
        this.duration        = data.duration;
        this.activationTime  = new Date(data.activationTime);
        this.startTime       = new Date(data.startTime);
        this.endTime         = new Date(data.endTime);
        this.multiplier      = data.multiplier;
    }

    getGroup(){
        return this.group;
    }

    getDuration(){
        return this.duration;
    }

    getActivationTime(){
        return this.activationTime;
    }

    getStartTime(){
        return this.startTime;
    }

    getEndTime(){
        return this.endTime;
    }

    isActive(){
        var now = Date.now();
        return (now >= this.getStartTime().getTime() && now <= this.getEndTime().getTime());
    }

    getMultiplier(){
        return this.multiplier;
    }
}

module.exports = Amplifier;