var Logger = require('frozor-logger');
var log    = new Logger('RANKS');

var Ranks  = require('./lib/Ranks');

function getPermission(required, rank){
    var hasPermission = Ranks.hasPermission(required, rank);
    log.info(`${log.chalk.cyan(rank)} | ${(hasPermission) ? log.chalk.green(`Yes`) : log.chalk.red('No')}`);
}

log.info(`${log.chalk.yellow('SR.MOD')} Permission Level: ${log.chalk.yellow(Ranks.getPermissionLevel('SR.MOD'))}`);
log.info(`${log.chalk.cyan('HELPER')} -> ${log.chalk.cyan(Ranks.getConverted('HELPER'))}`);
log.info(`${log.chalk.yellow('SR.MODERATOR')} -> ${log.chalk.yellow(Ranks.getConverted('SR.MODERATOR'))}`);
log.info(`${log.chalk.red('LT')} -> ${log.chalk.red(Ranks.getConverted('LT'))}`);
console.log('');
log.info(`${log.chalk.yellow('MOD')}+ Command Permissions`);
log.info(`Rank | Has Permission`);
log.info(`------------------------`);
getPermission('mod', 'player');
getPermission('mod', 'ultra');
getPermission('mod', 'hero');
getPermission('mod', 'legend');
getPermission('mod', 'titan');
getPermission('mod', 'trainee');
getPermission('mod', 'mod');
getPermission('mod', 'srmod');
getPermission('mod', 'admin');
getPermission('mod', 'lt');