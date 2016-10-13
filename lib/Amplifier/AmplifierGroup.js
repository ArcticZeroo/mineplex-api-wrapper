var Amplifier = require('./Amplifier');

class AmplifierGroup{
    constructor(data, group){
        this._group = group;
        this._amplifiers = [];
        data.forEach((amplifier)=>{
           this._amplifiers.push(new Amplifier(amplifier));
        });
    }

    getGroup(){
        return this._group;
    }

    getAmplifiers(){
        return this._amplifiers;
    }
}

module.exports = AmplifierGroup;