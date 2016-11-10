class PlayerStatus{
    constructor(data){
        this._online = data.online;
        this._server = data.server;
    }

    isOnline(){
        return this._online;
    }

    getServer(){
        return this._server;
    }

    toString(){
        return (this._online) ? `online` : `offline`;
    }

    toJSON(){
        return {online: this.isOnline(), server: this.getServer()};
    }
}

module.exports = PlayerStatus;