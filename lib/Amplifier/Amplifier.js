var Player = require('../Player/');

class Amplifier extends Player.Components.Data{
    constructor(data, group){
        super(data, 'playerName');
        this._group          = group;
        this._duration       = data.duration;
        this._activationTime = new Date(data.activationTime);
        this._startTime      = new Date(data.startTime);
        this._endTime        = new Date(data.endTime);
        this._multiplier     = data.multiplier;
    }

    getGroup(){
        return this._group;
    }

    getDuration(){
        return this._duration;
    }

    getActivationTime(){
        return this._activationTime;
    }

    getStartTime(){
        return this._startTime;
    }

    getEndTime(){
        return this._endTime;
    }

    isActive(){
        var now = Date.now();
        return (now >= this.getStartTime().getTime() && now <= this.getEndTime().getTime());
    }

    getMultiplier(){
        return this._multiplier;
    }
}

module.exports = Amplifier;