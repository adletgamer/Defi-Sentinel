import { describe, expect, it } from 'vitest';

import { chainById } from './index';

describe('chain registry', () => {
  it('resolves a supported chain', () => {
    expect(chainById(8453)?.name).toBe('Base');
  });

  it('rejects an unsupported chain', () => {
    expect(chainById(999)).toBeUndefined();
  });
});
