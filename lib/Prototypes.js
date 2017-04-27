const chalk = require('chalk');

const mc_color_to_chalk = {
    4: chalk.red,
    c: chalk.red.bold,
    6: chalk.yellow,
    e: chalk.yellow,
    2: chalk.green,
    a: chalk.green,
    b: chalk.blue.bold,
    3: chalk.cyan,
    1: chalk.blue,
    9: chalk.blue,
    d: chalk.magenta.bold,
    5: chalk.magenta,
    f: chalk.white.bold,
    7: chalk.white,
    l: chalk.bold,
    n: chalk.underline,
    o: chalk.italics,
    m: chalk.strikethrough,
    r: chalk.reset,
};

String.prototype.toChalkFormatting = function () {
    let split = this.split(`§`);

    let coloredMessage = '';

    if(split.length == 1) return this;

    for(var index in split){
        var message = split[index];
        if(message.length == 1) continue;
        var colorCode = message.substring(0, 1);
        var colorCodeFunction = mc_color_to_chalk[colorCode];

        if(colorCode == "l" || colorCode == "m" || colorCode == "n" || colorCode == "o"){
            coloredMessage += mc_color_to_chalk[split[index-1]](colorCodeFunction(message.substring(1)));
            continue;
        }

        if(!colorCodeFunction){
            coloredMessage += message;
            continue;
        }
        coloredMessage += colorCodeFunction(message.substring(1));
    }
    return coloredMessage;
};

Boolean.prototype.toOnlineString = function () {
    return (this) ? 'online' : 'offline';
};

Boolean.prototype.toActiveString = function () {
    return (this) ? 'active' : 'inactive';
};

Number.prototype.toHumanReadable = function () {
    let days, hours, minutes, seconds = this;

    if(seconds <= 60) return `${seconds} seconds`;

    minutes = (seconds / 60).toFixed(1);

    if(minutes <= 60) return `${minutes} minutes`;

    hours   = (minutes / 60 ).toFixed(1);

    if(hours <= 60) return `${hours} hours`;

    return `${(hours/24).toFixed(1)} days`;
};