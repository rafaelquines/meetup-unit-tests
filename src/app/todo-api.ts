import { injectable } from 'inversify';
import * as request from 'superagent';
import { TodoApiBase } from '../interfaces/app/todo-api-base.interface';

@injectable()
export class TodoApi implements TodoApiBase {
  apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  async get(): Promise<any> {
    const response: request.Response = await request.get(this.apiUrl);
    return response.body;
  }
}
