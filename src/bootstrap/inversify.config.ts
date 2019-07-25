import { TodoApi } from './../app/todo-api';
import { Calculator } from './../app/calculator';
import { CalculatorBase } from './../interfaces/app/calculator-base.interface';
import { Container } from 'inversify';
import { AppRunner } from '../interfaces/app/app-runner.interface';
import { TYPES } from '../ioc/types';
import { GenericLogger } from '../interfaces/lib/generic-logger.interface';
import { App } from '../app/app';
import { AppLogger } from '../lib/app-logger';
import { TodoApiBase } from '../interfaces/app/todo-api-base.interface';

const appContainer = new Container({ defaultScope: 'Request' });

const registerServices = () => {
  appContainer.bind<AppRunner>(TYPES.AppRunner).to(App).inSingletonScope();
  appContainer.bind<CalculatorBase>(TYPES.CalculatorBase).to(Calculator);
  appContainer.bind<TodoApiBase>(TYPES.TodoApiBase).to(TodoApi);
  appContainer.bind<GenericLogger>(TYPES.GenericLogger).to(AppLogger);
};

registerServices();

export { appContainer };

export function getApp() {
  return appContainer.get<AppRunner>(TYPES.AppRunner);
}

export function getLogger() {
  return appContainer.get<GenericLogger>(TYPES.GenericLogger);
}
