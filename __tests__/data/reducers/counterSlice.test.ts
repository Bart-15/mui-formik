import counterReducer, {
  decrement,
  increment,
  resetCounter,
} from '@/data/reducers/counterSlice';

describe('counter slice', () => {
  test('should hanlde initial state', () => {
    expect(counterReducer(undefined, { type: '@@INIT' })).toEqual({ value: 0 });
  });

  test('should handle increment properly', () => {
    expect(counterReducer({ value: 0 }, { type: increment })).toEqual({
      value: 1,
    });
  });

  test('should handle decrement properly', () => {
    expect(counterReducer({ value: 1 }, { type: decrement })).toEqual({
      value: 0,
    });
  });

  test('should handle reset properly', () => {
    expect(counterReducer({ value: 10 }, { type: resetCounter })).toEqual({
      value: 0,
    });
  });
});
