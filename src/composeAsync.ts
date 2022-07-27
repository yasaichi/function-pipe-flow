import { flowAsync } from './flowAsync.ts';
import { Pipe, UnaryFunction, VariadicFunction } from './types.ts';

export function composeAsync<InputValues extends unknown[]>(): Pipe<
  InputValues,
  InputValues[0]
>;

export function composeAsync<InputValues extends unknown[], ReturnValue>(
  fn1: VariadicFunction<InputValues, ReturnValue>
): Pipe<InputValues, ReturnValue>;

export function composeAsync<
  InputValues extends unknown[],
  ResultValue1,
  ReturnValue
>(
  fn2: UnaryFunction<ResultValue1, ReturnValue>,
  fn1: VariadicFunction<InputValues, ResultValue1>
): Pipe<InputValues, ReturnValue>;

export function composeAsync<
  InputValues extends unknown[],
  ResultValue1,
  ResultValue2,
  ReturnValue
>(
  fn3: UnaryFunction<ResultValue2, ReturnValue>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn1: VariadicFunction<InputValues, ResultValue1>
): Pipe<InputValues, ReturnValue>;

export function composeAsync<
  InputValues extends unknown[],
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ReturnValue
>(
  fn4: UnaryFunction<ResultValue3, ReturnValue>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn1: VariadicFunction<InputValues, ResultValue1>
): Pipe<InputValues, ReturnValue>;

export function composeAsync<
  InputValues extends unknown[],
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ReturnValue
>(
  fn5: UnaryFunction<ResultValue4, ReturnValue>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn1: VariadicFunction<InputValues, ResultValue1>
): Pipe<InputValues, ReturnValue>;

export function composeAsync<
  InputValues extends unknown[],
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ResultValue5,
  ReturnValue
>(
  fn6: UnaryFunction<ResultValue5, ReturnValue>,
  fn5: UnaryFunction<ResultValue4, ResultValue5>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn1: VariadicFunction<InputValues, ResultValue1>
): Pipe<InputValues, ReturnValue>;

export function composeAsync<
  InputValues extends unknown[],
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ResultValue5,
  ResultValue6,
  ReturnValue
>(
  fn7: UnaryFunction<ResultValue6, ReturnValue>,
  fn6: UnaryFunction<ResultValue5, ResultValue6>,
  fn5: UnaryFunction<ResultValue4, ResultValue5>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn1: VariadicFunction<InputValues, ResultValue1>
): Pipe<InputValues, ReturnValue>;

export function composeAsync<
  InputValues extends unknown[],
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ResultValue5,
  ResultValue6,
  ResultValue7,
  ReturnValue
>(
  fn8: UnaryFunction<ResultValue7, ReturnValue>,
  fn7: UnaryFunction<ResultValue6, ResultValue7>,
  fn6: UnaryFunction<ResultValue5, ResultValue6>,
  fn5: UnaryFunction<ResultValue4, ResultValue5>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn1: VariadicFunction<InputValues, ResultValue1>
): Pipe<InputValues, ReturnValue>;

export function composeAsync<
  InputValues extends unknown[],
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ResultValue5,
  ResultValue6,
  ResultValue7,
  ResultValue8,
  ReturnValue
>(
  fn9: UnaryFunction<ResultValue8, ReturnValue>,
  fn8: UnaryFunction<ResultValue7, ResultValue8>,
  fn7: UnaryFunction<ResultValue6, ResultValue7>,
  fn6: UnaryFunction<ResultValue5, ResultValue6>,
  fn5: UnaryFunction<ResultValue4, ResultValue5>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn1: VariadicFunction<InputValues, ResultValue1>
): Pipe<InputValues, ReturnValue>;

export function composeAsync(
  ...fns: [
    ...UnaryFunction<unknown, unknown>[],
    VariadicFunction<unknown[], unknown>
  ]
): Pipe<unknown[], unknown>;

export function composeAsync(
  ...fns: [
    ...UnaryFunction<unknown, unknown>[],
    VariadicFunction<unknown[], unknown>
  ]
): Pipe<unknown[], unknown> {
  return flowAsync(...[...fns].reverse());
}
