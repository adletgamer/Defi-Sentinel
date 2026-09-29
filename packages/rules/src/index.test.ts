import { describe, expect, it } from 'vitest';

import { classifyAllowance } from './index';

describe('classifyAllowance', () => {
  it('flags uint256 max as unlimited', () => {
    expect(
      classifyAllowance({ allowance: 2n ** 256n - 1n, balance: 10n }),
    ).toBe('unlimited');
  });

  it('ignores revoked approvals', () => {
    expect(classifyAllowance({ allowance: 0n, balance: 10n })).toBe('none');
  });

  it('flags an allowance ten times larger than balance', () => {
    expect(classifyAllowance({ allowance: 100n, balance: 10n })).toBe(
      'elevated',
    );
  });
});
