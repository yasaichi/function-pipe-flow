export type Pipe<InputValue, ReturnValue> = (
  value?: InputValue
) => Promise<ReturnValue>;

export type UnaryFunction<InputValue, ReturnValue> = (
  input: InputValue
) => ReturnValue | Promise<ReturnValue>;
