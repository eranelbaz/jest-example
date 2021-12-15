const {Logger} = require('./logger');
const deploymentLoggers = [];

const closeLogger = (logger) => {
    logger.close();
};

const createLogger = () => {
    const logger = new Logger();
    deploymentLoggers.push(logger);
    return logger;
};

const closeAll = () => {
    const promises = [];
    while (deploymentLoggers.length) {
        const logger = deploymentLoggers.pop();
        closeLogger(logger);
    }

};

exports.createLogger = createLogger;
exports.closeAll = closeAll;
