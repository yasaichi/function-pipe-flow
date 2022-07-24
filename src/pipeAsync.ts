import { flowAsync } from './flowAsync';
import { UnaryFunction } from './types';

export function pipeAsync<InputValue, ReturnValue>(
  input: InputValue,
  fn1: UnaryFunction<InputValue, ReturnValue>
): Promise<ReturnValue>;

export function pipeAsync<InputValue, ResultValue1, ReturnValue>(
  input: InputValue,
  fn1: UnaryFunction<InputValue, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ReturnValue>
): Promise<ReturnValue>;

export function pipeAsync<InputValue, ResultValue1, ResultValue2, ReturnValue>(
  input: InputValue,
  fn1: UnaryFunction<InputValue, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ReturnValue>
): Promise<ReturnValue>;

export function pipeAsync<
  InputValue,
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ReturnValue
>(
  input: InputValue,
  fn1: UnaryFunction<InputValue, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ReturnValue>
): Promise<ReturnValue>;

export function pipeAsync<
  InputValue,
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ReturnValue
>(
  input: InputValue,
  fn1: UnaryFunction<InputValue, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn5: UnaryFunction<ResultValue4, ReturnValue>
): Promise<ReturnValue>;

export function pipeAsync<
  InputValue,
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ResultValue5,
  ReturnValue
>(
  input: InputValue,
  fn1: UnaryFunction<InputValue, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn5: UnaryFunction<ResultValue4, ResultValue5>,
  fn6: UnaryFunction<ResultValue5, ReturnValue>
): Promise<ReturnValue>;

export function pipeAsync<
  InputValue,
  ResultValue1,
  ResultValue2,
  ResultValue3,
  ResultValue4,
  ResultValue5,
  ResultValue6,
  ReturnValue
>(
  input: InputValue,
  fn1: UnaryFunction<InputValue, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn5: UnaryFunction<ResultValue4, ResultValue5>,
  fn6: UnaryFunction<ResultValue5, ResultValue6>,
  fn7: UnaryFunction<ResultValue6, ReturnValue>
): Promise<ReturnValue>;

export function pipeAsync<
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
  input: InputValue,
  fn1: UnaryFunction<InputValue, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn5: UnaryFunction<ResultValue4, ResultValue5>,
  fn6: UnaryFunction<ResultValue5, ResultValue6>,
  fn7: UnaryFunction<ResultValue6, ResultValue7>,
  fn8: UnaryFunction<ResultValue7, ReturnValue>
): Promise<ReturnValue>;

export function pipeAsync<
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
  input: InputValue,
  fn1: UnaryFunction<InputValue, ResultValue1>,
  fn2: UnaryFunction<ResultValue1, ResultValue2>,
  fn3: UnaryFunction<ResultValue2, ResultValue3>,
  fn4: UnaryFunction<ResultValue3, ResultValue4>,
  fn5: UnaryFunction<ResultValue4, ResultValue5>,
  fn6: UnaryFunction<ResultValue5, ResultValue6>,
  fn7: UnaryFunction<ResultValue6, ResultValue7>,
  fn8: UnaryFunction<ResultValue7, ResultValue8>,
  fn9: UnaryFunction<ResultValue8, ReturnValue>
): Promise<ReturnValue>;

export function pipeAsync<InputValue, ReturnValue = unknown>(
  input?: InputValue,
  ...callbacks: UnaryFunction<any, unknown>[]
): Promise<ReturnValue>;

export function pipeAsync(
  input?: unknown,
  ...callbacks: UnaryFunction<unknown, unknown>[]
) {
  return flowAsync(...callbacks)(input);
}
