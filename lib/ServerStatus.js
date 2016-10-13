class ServerStatus{
    constructor(data){
        this._total  = data.total;
        this._groups = data.groups;
    }

    getTotal(){
        return this._total;
    }

    isGroup(group){
        return (this._groups) ? true : false;
    }

    getGroups(){
        return this._groups;
    }

    getGroup(group){
        return this._groups[group];
    }
}

module.exports = ServerStatus;