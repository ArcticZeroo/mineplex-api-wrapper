var AmplifierGroup = require('./AmplifierGroup');

class AmplifierGroups{
    constructor(data){
        this.groups = {};
        for(var group in data){
            this.groups[group] = new AmplifierGroup(data[group], group);
        }
    }

    getGroups(){
        return this.groups;
    }

    getGroup(group){
        return this.groups[group];
    }

}

module.exports = AmplifierGroups;