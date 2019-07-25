import { TodoApiBase } from './../interfaces/app/todo-api-base.interface';
import { CalculatorBase } from './../interfaces/app/calculator-base.interface';
import { AppRunner } from './../interfaces/app/app-runner.interface';
import { injectable, inject } from 'inversify';
import { TYPES } from '../ioc/types';
import { GenericLogger } from '../interfaces/lib/generic-logger.interface';

@injectable()
export class App implements AppRunner {
  constructor(
    @inject(TYPES.GenericLogger) private readonly logger: GenericLogger,
    @inject(TYPES.CalculatorBase) private readonly calc: CalculatorBase,
    @inject(TYPES.TodoApiBase) private readonly todoApi: TodoApiBase,
  ) {

  }

  start() {
    this.todoApi.get()
      .then((res: []) => {
        this.logger.info(JSON.stringify(res));
      });
  }
}
