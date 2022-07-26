import { flowAsync } from '../mod.ts';
import { assert, assertEquals, assertRejects, spy } from './deps.ts';

Deno.test(
  'it returns a new function by combining its async callbacks in left-to-right order',
  async () => {
    const f0 = spy((_: number, __: number) => Promise.resolve('f0'));
    const f1 = spy((_: string) => 'f1');
    const f2 = spy((_: string) => Promise.resolve('f2'));

    assertEquals(await flowAsync(f0, f1, f2)(5, 7), 'f2');

    assert(f0.calledOnceWithExactly(5, 7));
    assert(f1.calledOnceWithExactly('f0'));
    assert(f2.calledOnceWithExactly('f1'));

    assert(f1.calledImmediatelyAfter(f0));
    assert(f2.calledImmediatelyAfter(f1));
  }
);

Deno.test(
  'if any callback rejects with an error, a created function rejects with the error',
  async () => {
    const expectedError = new Error('expected error');
    const f0 = spy((_: number, __: number) => Promise.resolve('f0'));
    const f1 = spy((_: string) => Promise.reject(expectedError));
    const f2 = spy((_: string) => Promise.resolve('f2'));

    await assertRejects(
      () => flowAsync(f0, f1, f2)(5, 7),
      Error,
      expectedError.message
    );

    assert(f0.calledOnceWithExactly(5, 7));
    assert(f1.calledOnceWithExactly('f0'));

    assert(f1.calledImmediatelyAfter(f0));
    assert(f2.notCalled);
  }
);

Deno.test('if it receives one function, it returns the function', async () => {
  const g0 = spy((_: number, __: number) => Promise.resolve('g0'));

  assertEquals(await flowAsync(g0)(5, 7), 'g0');
  assert(g0.calledOnceWithExactly(5, 7));
});

Deno.test(
  'if it receives no arguments, it returns `Promise.resolve`',
  async () => {
    assertEquals(await flowAsync<number[]>()(5, 7), 5);
  }
);
