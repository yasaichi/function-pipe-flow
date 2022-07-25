import { pipeAsync } from '../mod.ts';
import { assert, assertEquals, assertRejects, spy } from './deps.ts';

Deno.test(
  "it pipes values from left to right async callbacks and resolves to the final callback's result",
  async () => {
    const f0 = spy((_) => Promise.resolve('f0'));
    const f1 = spy((_) => 'f1');
    const f2 = spy((_) => Promise.resolve('f2'));

    assertEquals(await pipeAsync(5, f0, f1, f2), 'f2');

    assert(f0.calledOnceWithExactly(5));
    assert(f1.calledOnceWithExactly('f0'));
    assert(f2.calledOnceWithExactly('f1'));

    assert(f1.calledImmediatelyAfter(f0));
    assert(f2.calledImmediatelyAfter(f1));
  }
);

Deno.test(
  'if any callback rejects with an error, it rejects with the error',
  async () => {
    const expectedError = new Error('expected error');
    const f0 = spy((_) => Promise.resolve('f0'));
    const f1 = spy((_) => Promise.reject(expectedError));
    const f2 = spy((_) => Promise.resolve('f2'));

    await assertRejects(
      () => pipeAsync(5, f0, f1, f2),
      Error,
      expectedError.message
    );

    assert(f0.calledOnceWithExactly(5));
    assert(f1.calledOnceWithExactly('f0'));

    assert(f1.calledImmediatelyAfter(f0));
    assert(f2.notCalled);
  }
);

Deno.test('if it receives only `input`, it resolves to the value', async () => {
  assertEquals(await pipeAsync(5), 5);
});

Deno.test(
  'if it receives no arguments, it resolves to `undefined`',
  async () => {
    assertEquals(await pipeAsync(), undefined);
  }
);
