class PlayerData{
    constructor(data, nameKey){
        this._uuid = data.uuid;
        this._name = (nameKey) ? data[nameKey] : data.name;
    }

    getUUID(){
        return this._uuid;
    }

    getName(){
        return this._name;
    }

}

module.exports = PlayerData;