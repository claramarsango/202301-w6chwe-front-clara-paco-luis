import cardListReducer, { getRobotsAsync } from './cardListSlice';

describe('robots reducer', () => {
  it('should hanldle initial state', () => {
    expect(cardListReducer(undefined, { type: 'unknown' })).toEqual({
      value: [],
      status: 'idle',
    });
  });

  it('should handle loading status', () => {
    const loading = cardListReducer(undefined, getRobotsAsync.pending);
    expect(loading.status).toEqual('loading');
  });

  it('should handle failed status', () => {
    const loading = cardListReducer(undefined, getRobotsAsync.rejected);
    expect(loading.status).toEqual('failed');
  });

  it('should handle idle status', () => {
    const loading = cardListReducer(undefined, getRobotsAsync.fulfilled);
    expect(loading.status).toEqual('idle');
  });
});
