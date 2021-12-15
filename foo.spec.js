const {Logger} = require('./logger')

describe('closeAllDeploymentLoggers', () => {
    let closeSpyOn;
    let createLogger;
    let closeAll;
    let loggers;
    beforeEach(() => {
        jest.isolateModules(() => {
            ({ closeAll, createLogger } = require('./foo'));
        });
    });

    beforeEach(() => {
        closeSpyOn = jest.spyOn(Logger.prototype, 'close').mockReturnValue(undefined);
        loggers = [];
        loggers.push(createLogger());
        loggers.push(createLogger());

        closeAll();
    });

    it('should flush cloudwatch logs of all loggers', () => {
        expect(closeSpyOn).toHaveBeenCalledTimes(loggers.length);
    });
});
