var config = require('../config/ranks');

function getRanksList(){
    return config.list;
}

function getRankPermissions(){
    let result = {};
    let i = 0;
    for(let rank of getRanksList()) result[rank] = i++;
}

function getListIndex(rank){
    return getRanksList().indexOf(rank.toUpperCase());
}

function getConverted(rank){
    rank = rank.toUpperCase();
    if(getListIndex(rank) > -1) return rank;
    return config.convert[rank] || 'UNKNOWN';
}

function getPermissionLevel(rank){
    return Math.max(getListIndex(getConverted(rank.toUpperCase())), 0);
}

function hasPermission(required, rank){
    return (getPermissionLevel(rank.toUpperCase()) >= getPermissionLevel(required.toUpperCase()));
}

exports.getConverted       = getConverted;
exports.getRankPermissions = getRankPermissions;
exports.getPermissionLevel = getPermissionLevel;
exports.hasPermission      = hasPermission;