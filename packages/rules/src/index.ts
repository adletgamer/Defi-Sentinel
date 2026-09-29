export interface AllowanceInput {
  readonly allowance: bigint;
  readonly balance: bigint;
}

export type AllowanceRisk = 'none' | 'elevated' | 'unlimited';

const UINT256_MAX = 2n ** 256n - 1n;
const UNLIMITED_FLOOR = UINT256_MAX - 1_000_000n;

export function classifyAllowance({
  allowance,
  balance,
}: AllowanceInput): AllowanceRisk {
  if (allowance === 0n) return 'none';
  if (allowance >= UNLIMITED_FLOOR) return 'unlimited';
  if (balance > 0n && allowance >= balance * 10n) return 'elevated';
  return 'none';
}
