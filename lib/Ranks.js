const config = require('../config/ranks');

function getRankPermissions(){
    let result = {};
    let i = 0;
    for(let rank of config.list) result[rank] = i++;
}

function getListIndex(rank){
    return config.list.indexOf(rank.toUpperCase());
}

function getConverted(rank){
    rank = rank.toUpperCase().replace(/_/g, '');
    if(getListIndex(rank) > -1) return rank;
    return config.convert[rank] || 'UNKNOWN';
}

function getPermissionLevel(rank){
    return Math.max(getListIndex(getConverted(rank.toUpperCase())), 0);
}

function hasPermission(needs, has){
    return (getPermissionLevel(has) >= getPermissionLevel(needs));
}

exports.getConverted       = getConverted;
exports.getRankPermissions = getRankPermissions;
exports.getPermissionLevel = getPermissionLevel;
exports.hasPermission      = hasPermission;