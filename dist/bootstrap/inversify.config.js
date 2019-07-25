"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_api_1 = require("./../app/todo-api");
const calculator_1 = require("./../app/calculator");
const inversify_1 = require("inversify");
const types_1 = require("../ioc/types");
const app_1 = require("../app/app");
const app_logger_1 = require("../lib/app-logger");
const appContainer = new inversify_1.Container({ defaultScope: 'Request' });
exports.appContainer = appContainer;
const registerServices = () => {
    appContainer.bind(types_1.TYPES.AppRunner).to(app_1.App).inSingletonScope();
    appContainer.bind(types_1.TYPES.CalculatorBase).to(calculator_1.Calculator);
    appContainer.bind(types_1.TYPES.TodoApiBase).to(todo_api_1.TodoApi);
    appContainer.bind(types_1.TYPES.GenericLogger).to(app_logger_1.AppLogger);
};
registerServices();
function getApp() {
    return appContainer.get(types_1.TYPES.AppRunner);
}
exports.getApp = getApp;
function getLogger() {
    return appContainer.get(types_1.TYPES.GenericLogger);
}
exports.getLogger = getLogger;
//# sourceMappingURL=inversify.config.js.map