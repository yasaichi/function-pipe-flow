export type Pipe<InputValues extends unknown[], ReturnValue> = (
  ...inputs: InputValues
) => Promise<ReturnValue>;

export type UnaryFunction<InputValue, ReturnValue> = (
  input: InputValue
) => ReturnValue | Promise<ReturnValue>;

export type VariadicFunction<InputValues extends unknown[], ReturnValue> = (
  ...inputs: InputValues
) => ReturnValue | Promise<ReturnValue>;
