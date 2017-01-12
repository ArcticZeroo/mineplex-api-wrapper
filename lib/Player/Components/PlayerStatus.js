class PlayerStatus{
    constructor(data){
        this.online = data.online;
        this.server = data.server;
    }

    isOnline(){
        return this.online;
    }

    getServer(){
        return this.server;
    }

    toString(){
        return (this.online) ? `online` : `offline`;
    }

    toJSON(){
        return {online: this.isOnline(), server: this.getServer()};
    }
}

module.exports = PlayerStatus;