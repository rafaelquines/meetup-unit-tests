import 'reflect-metadata';
import { TodoApiBase } from './../../src/interfaces/app/todo-api-base.interface';
import { TodoApi } from './../../src/app/todo-api';
import { TYPES } from '../../src/ioc/types';
import { Container } from 'inversify';
import { describe, it, before, afterEach } from 'mocha';
import * as nock from 'nock';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import { expect } from 'chai';
chai.use(sinonChai);

describe('TodoApi', () => {
  let container: Container;
  let todoService: TodoApiBase;

  before(() => {
    container = new Container();
    container.bind<TodoApiBase>(TYPES.TodoApiBase).to(TodoApi);
    todoService = container.get<TodoApiBase>(TYPES.TodoApiBase);
  });

  afterEach(() => {
    nock.cleanAll();
    sinon.restore();
  });

  it('get', async () => {
    const searchCall = nock('https://jsonplaceholder.typicode.com')
      .get('/todos')
      .reply(200, [{}, {}]);
    const result = await todoService.get();
    expect(result.length).eq(2);
    expect(searchCall.isDone()).to.be.true;
  });

  it('get error', async () => {
    const searchCall = nock('https://jsonplaceholder.typicode.com')
      .get('/todos')
      .replyWithError({
        message: 'error test',
        code: 'AWFUL_ERROR',
      });
    let catched = false;
    try {
      const result = await todoService.get();
    } catch (err) {
      catched = true;
      expect(err).to.be.not.null;
      expect(err.message).eq('error test');
      expect(err.code).eq('AWFUL_ERROR');
    }
    expect(catched).to.be.true;
    expect(searchCall.isDone()).to.be.true;
  });
});
