import { Pipe, UnaryFunction, VariadicFunction } from './types.ts';

export function flowAsync<InputValues extends unknown[]>(): Pipe<
  InputValues,
  InputValues[0]
>;

export function flowAsync<InputValues extends unknown[], ReturnValue>(
  fn1: VariadicFunction<InputValues, ReturnValue>
): Pipe<InputValues, ReturnValue>;

export function flowAsync<
  InputValues extends unknown[],
  ResultValue1,
  ReturnValue
>(
  fn1: VariadicFunction<InputValues, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ReturnValue>
): Pipe<InputValues, ReturnValue>;

export function flowAsync<
  InputValues extends unknown[],
  ResultValue1,
  ResultValue2,
  ReturnValue
>(
  fn1: VariadicFunction<InputValues, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ReturnValue>
): Pipe<InputValues, ReturnValue>;

export function flowAsync<
  InputValues extends unknown[],
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ReturnValue
>(
  fn1: VariadicFunction<InputValues, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ReturnValue>
): Pipe<InputValues, ReturnValue>;

export function flowAsync<
  InputValues extends unknown[],
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ReturnValue
>(
  fn1: VariadicFunction<InputValues, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn5: UnaryFunction<ResultValue4, ReturnValue>
): Pipe<InputValues, ReturnValue>;

export function flowAsync<
  InputValues extends unknown[],
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ResultValue5,
  ReturnValue
>(
  fn1: VariadicFunction<InputValues, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn5: UnaryFunction<ResultValue4, ResultValue5>,
  fn6: UnaryFunction<ResultValue5, ReturnValue>
): Pipe<InputValues, ReturnValue>;

export function flowAsync<
  InputValues extends unknown[],
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ResultValue5,
  ResultValue6,
  ReturnValue
>(
  fn1: VariadicFunction<InputValues, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn5: UnaryFunction<ResultValue4, ResultValue5>,
  fn6: UnaryFunction<ResultValue5, ResultValue6>,
  fn7: UnaryFunction<ResultValue6, ReturnValue>
): Pipe<InputValues, ReturnValue>;

export function flowAsync<
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
  fn1: VariadicFunction<InputValues, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn5: UnaryFunction<ResultValue4, ResultValue5>,
  fn6: UnaryFunction<ResultValue5, ResultValue6>,
  fn7: UnaryFunction<ResultValue6, ResultValue7>,
  fn8: UnaryFunction<ResultValue7, ReturnValue>
): Pipe<InputValues, ReturnValue>;

export function flowAsync<
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
  fn1: VariadicFunction<InputValues, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn5: UnaryFunction<ResultValue4, ResultValue5>,
  fn6: UnaryFunction<ResultValue5, ResultValue6>,
  fn7: UnaryFunction<ResultValue6, ResultValue7>,
  fn8: UnaryFunction<ResultValue7, ResultValue8>,
  fn9: UnaryFunction<ResultValue8, ReturnValue>
): Pipe<InputValues, ReturnValue>;

export function flowAsync(
  ...fns: [
    VariadicFunction<unknown[], unknown>?,
    ...UnaryFunction<unknown, unknown>[]
  ]
): Pipe<unknown[], unknown>;

export function flowAsync(
  ...fns: [
    VariadicFunction<unknown[], unknown>?,
    ...UnaryFunction<unknown, unknown>[]
  ]
): Pipe<unknown[], unknown> {
  return (...args: unknown[]) =>
    fns
      .slice(1)
      .reduce(
        (promise, fn) => promise.then(fn),
        Promise.resolve(fns[0]?.(...args) || args[0])
      );
}
