class PlayerData{
    constructor(data, nameKey){
        this.uuid = data.uuid;
        this.name = (nameKey) ? data[nameKey] : data.name;
    }

    getUUID(){
        return this.uuid;
    }

    getName(){
        return this.name;
    }

}

module.exports = PlayerData;