import { Pipe, UnaryFunction } from './types.ts';

export function flowAsync<InputValue, ReturnValue>(
  fn1: UnaryFunction<InputValue, ReturnValue>
): Pipe<InputValue, ReturnValue>;

export function flowAsync<InputValue, ResultValue1, ReturnValue>(
  fn1: UnaryFunction<InputValue, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ReturnValue>
): Pipe<InputValue, ReturnValue>;

export function flowAsync<InputValue, ResultValue1, ResultValue2, ReturnValue>(
  fn1: UnaryFunction<InputValue, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ReturnValue>
): Pipe<InputValue, ReturnValue>;

export function flowAsync<
  InputValue,
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ReturnValue
>(
  fn1: UnaryFunction<InputValue, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ReturnValue>
): Pipe<InputValue, ReturnValue>;

export function flowAsync<
  InputValue,
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ReturnValue
>(
  fn1: UnaryFunction<InputValue, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn5: UnaryFunction<ResultValue4, ReturnValue>
): Pipe<InputValue, ReturnValue>;

export function flowAsync<
  InputValue,
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ResultValue5,
  ReturnValue
>(
  fn1: UnaryFunction<InputValue, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn5: UnaryFunction<ResultValue4, ResultValue5>,
  fn6: UnaryFunction<ResultValue5, ReturnValue>
): Pipe<InputValue, ReturnValue>;

export function flowAsync<
  InputValue,
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ResultValue5,
  ResultValue6,
  ReturnValue
>(
  fn1: UnaryFunction<InputValue, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn5: UnaryFunction<ResultValue4, ResultValue5>,
  fn6: UnaryFunction<ResultValue5, ResultValue6>,
  fn7: UnaryFunction<ResultValue6, ReturnValue>
): Pipe<InputValue, ReturnValue>;

export function flowAsync<
  InputValue,
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ResultValue5,
  ResultValue6,
  ResultValue7,
  ReturnValue
>(
  fn1: UnaryFunction<InputValue, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn5: UnaryFunction<ResultValue4, ResultValue5>,
  fn6: UnaryFunction<ResultValue5, ResultValue6>,
  fn7: UnaryFunction<ResultValue6, ResultValue7>,
  fn8: UnaryFunction<ResultValue7, ReturnValue>
): Pipe<InputValue, ReturnValue>;

export function flowAsync<
  InputValue,
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
  fn1: UnaryFunction<InputValue, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn5: UnaryFunction<ResultValue4, ResultValue5>,
  fn6: UnaryFunction<ResultValue5, ResultValue6>,
  fn7: UnaryFunction<ResultValue6, ResultValue7>,
  fn8: UnaryFunction<ResultValue7, ResultValue8>,
  fn9: UnaryFunction<ResultValue8, ReturnValue>
): Pipe<InputValue, ReturnValue>;

export function flowAsync<InputValue = unknown, ReturnValue = unknown>(
  ...callbacks: UnaryFunction<unknown, unknown>[]
): Pipe<InputValue, ReturnValue>;

export function flowAsync(
  ...callbacks: UnaryFunction<unknown, unknown>[]
): Pipe<unknown, unknown> {
  return (input?: unknown) =>
    callbacks.reduce((promise, fn) => promise.then(fn), Promise.resolve(input));
}
