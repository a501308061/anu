const init = require('./init');
const chalk = require('chalk');
const buildMap = {
    'wx': true,
    'baidu': false,
    'ali': true,
    'quick': false
};
const buildErrText = {
    'baidu': '百度小程序正在努力支持中, 请静候佳音',
    'ali': '支付宝小程序正在努力支持中, 请静候佳音',
    'quick': '快应用正在努力支持中, 请静候佳音'
};
const LetUsRoll = (args)=>{
    let argList = args[0].split(':');
    let commond = argList[0];
    let type = argList[1];
    if (!type || buildMap[type] === undefined ){
        type = 'wx';
    } else {
        type = type.toLowerCase();
    }
    route(commond, type);
};

const route = (commond, type)=>{
    if (!buildMap[type]){
        // eslint-disable-next-line
        console.log(chalk.red( buildErrText[type] ));
        // eslint-disable-next-line
        console.log();
        process.exit(1);
    }
    const build = require('./build');
    switch (commond){
        case 'start':
            build(commond, type);
            break;
        case 'build':
            build(commond, type);
            break;
        default:
            init(commond);
    }
};

module.exports = LetUsRoll;