import { describe, expect, it } from 'vitest';

import { watcherBanner } from './index';

describe('watcherBanner', () => {
  it('lists every initial monitored chain', () => {
    expect(watcherBanner()).toBe(
      'DeFi Sentinel watcher ready for Ethereum, Base',
    );
  });
});
