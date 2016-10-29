var AmplifierGroup = require('./AmplifierGroup');

class AmplifierGroups{
    constructor(data){
        this._groups = {};
        for(var group in data){
            this._groups[group] = new AmplifierGroup(data[group], group);
        }
    }

    getGroups(){
        return this._groups;
    }

    getGroup(group){
        return this._groups[group];
    }

}

module.exports = AmplifierGroups;