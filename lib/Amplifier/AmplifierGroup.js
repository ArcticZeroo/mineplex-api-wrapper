var Amplifier = require('./Amplifier');

class AmplifierGroup{
    constructor(data, group){
        this.group = group;
        this.amplifiers = [];
        data.forEach((amplifier)=>{
           this.amplifiers.push(new Amplifier(amplifier));
        });
    }

    getGroup(){
        return this.group;
    }

    getAmplifiers(){
        return this.amplifiers;
    }
}

module.exports = AmplifierGroup;