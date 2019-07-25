import { CalculatorBase } from './../interfaces/app/calculator-base.interface';
import { injectable } from 'inversify';

@injectable()
export class Calculator implements CalculatorBase {
  add(a: number, b: number): number {
    console.log("add method");
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    console.log("mutt method");
    let result = 0;
    for(let i = 0; i < b; i++) {
      result = this.add(result, a);
    }
    return result;
  }

  divide(a: number, b: number): number {
    if (a === 0 || b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }
}
