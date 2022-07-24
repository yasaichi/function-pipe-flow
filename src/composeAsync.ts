import { flowAsync } from './flowAsync';
import { Pipe, UnaryFunction } from './types';

export function composeAsync<InputValue, ReturnValue>(
  fn1: UnaryFunction<InputValue, ReturnValue>
): Pipe<InputValue, ReturnValue>;

export function composeAsync<InputValue, ResultValue1, ReturnValue>(
  fn2: UnaryFunction<ResultValue1, ReturnValue>,
  fn1: UnaryFunction<InputValue, ResultValue1>
): Pipe<InputValue, ReturnValue>;

export function composeAsync<
  InputValue,
  ResultValue1,
  ResultValue2,
  ReturnValue
>(
  fn3: UnaryFunction<ResultValue2, ReturnValue>,
  fn2: UnaryFunction<ResultValue1, ReturnValue>,
  fn1: UnaryFunction<InputValue, ResultValue1>
): Pipe<InputValue, ReturnValue>;

export function composeAsync<
  InputValue,
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ReturnValue
>(
  fn4: UnaryFunction<ResultValue3, ReturnValue>,
  fn3: UnaryFunction<ResultValue2, ReturnValue>,
  fn2: UnaryFunction<ResultValue1, ReturnValue>,
  fn1: UnaryFunction<InputValue, ResultValue1>
): Pipe<InputValue, ReturnValue>;

export function composeAsync<
  InputValue,
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ReturnValue
>(
  fn5: UnaryFunction<ResultValue4, ReturnValue>,
  fn4: UnaryFunction<ResultValue3, ReturnValue>,
  fn3: UnaryFunction<ResultValue2, ReturnValue>,
  fn2: UnaryFunction<ResultValue1, ReturnValue>,
  fn1: UnaryFunction<InputValue, ResultValue1>
): Pipe<InputValue, ReturnValue>;

export function composeAsync<
  InputValue,
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ResultValue5,
  ReturnValue
>(
  fn6: UnaryFunction<ResultValue5, ReturnValue>,
  fn5: UnaryFunction<ResultValue4, ReturnValue>,
  fn4: UnaryFunction<ResultValue3, ReturnValue>,
  fn3: UnaryFunction<ResultValue2, ReturnValue>,
  fn2: UnaryFunction<ResultValue1, ReturnValue>,
  fn1: UnaryFunction<InputValue, ResultValue1>
): Pipe<InputValue, ReturnValue>;

export function composeAsync<
  InputValue,
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ResultValue5,
  ResultValue6,
  ReturnValue
>(
  fn7: UnaryFunction<ResultValue6, ReturnValue>,
  fn6: UnaryFunction<ResultValue5, ReturnValue>,
  fn5: UnaryFunction<ResultValue4, ReturnValue>,
  fn4: UnaryFunction<ResultValue3, ReturnValue>,
  fn3: UnaryFunction<ResultValue2, ReturnValue>,
  fn2: UnaryFunction<ResultValue1, ReturnValue>,
  fn1: UnaryFunction<InputValue, ResultValue1>
): Pipe<InputValue, ReturnValue>;

export function composeAsync<
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
  fn8: UnaryFunction<ResultValue7, ReturnValue>,
  fn7: UnaryFunction<ResultValue6, ReturnValue>,
  fn6: UnaryFunction<ResultValue5, ReturnValue>,
  fn5: UnaryFunction<ResultValue4, ReturnValue>,
  fn4: UnaryFunction<ResultValue3, ReturnValue>,
  fn3: UnaryFunction<ResultValue2, ReturnValue>,
  fn2: UnaryFunction<ResultValue1, ReturnValue>,
  fn1: UnaryFunction<InputValue, ResultValue1>
): Pipe<InputValue, ReturnValue>;

export function composeAsync<
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
  fn9: UnaryFunction<ResultValue8, ReturnValue>,
  fn8: UnaryFunction<ResultValue7, ReturnValue>,
  fn7: UnaryFunction<ResultValue6, ReturnValue>,
  fn6: UnaryFunction<ResultValue5, ReturnValue>,
  fn5: UnaryFunction<ResultValue4, ReturnValue>,
  fn4: UnaryFunction<ResultValue3, ReturnValue>,
  fn3: UnaryFunction<ResultValue2, ReturnValue>,
  fn2: UnaryFunction<ResultValue1, ReturnValue>,
  fn1: UnaryFunction<InputValue, ResultValue1>
): Pipe<InputValue, ReturnValue>;

export function composeAsync<InputValue = unknown, ReturnValue = unknown>(
  ...callbacks: UnaryFunction<any, unknown>[]
): Pipe<InputValue, ReturnValue>;

export function composeAsync(
  ...callbacks: UnaryFunction<unknown, unknown>[]
): Pipe<unknown, unknown> {
  return flowAsync(...[...callbacks].reverse());
}
