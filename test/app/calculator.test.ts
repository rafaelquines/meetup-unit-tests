import 'reflect-metadata';
import { CalculatorBase } from './../../src/interfaces/app/calculator-base.interface';
import { TYPES } from './../../src/ioc/types';
import { Calculator } from './../../src/app/calculator';
import { Container } from 'inversify';
import { describe, it, beforeEach, before, afterEach } from 'mocha';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import { expect } from 'chai';
chai.use(sinonChai);

describe.only('Calculator', () => {
  let container: Container;
  let calculatorService: Calculator;

  before(() => {
    container = new Container();
    container.bind<Calculator>(TYPES.CalculatorBase).to(Calculator);
    calculatorService = container.get<CalculatorBase>(TYPES.CalculatorBase);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('add', () => {
    const result = calculatorService.add(10, 2);
    expect(result).eq(12);
  });

  it('subtract', () => {
    const result = calculatorService.subtract(10, 2);
    expect(result).eq(8);
  });

  it('multiply', () => {
    const result = calculatorService.multiply(10, 2);
    expect(result).eq(20);
  });

  it('multiply2', () => {
    const addMock = sinon.stub(calculatorService, 'add');
    const result = calculatorService.multiply(30, 50);
    expect(addMock).to.have.been.callCount(50);
    expect(addMock).to.have.been.calledWith(0, 30);
    // expect(result).eq(1500);

  });

  it('multiply3', () => {
    const addMock = sinon.stub(calculatorService, 'add');
    const result = calculatorService.multiply(-5, 0);
    expect(addMock).to.have.been.callCount(0);
  });

  describe('divide', () => {
    it('division by not zero', () => {
      const result = calculatorService.divide(10, 2);
      expect(result).eq(5);
    });

    it('division by zero', () => {
      const result = () => {
        calculatorService.divide(0, 2);
      };
      expect(result).to.throw('Division by zero');
    });

  });
});
