export const supportedChains = [
  { id: 1, key: 'ethereum', name: 'Ethereum', blockTimeMs: 12_000 },
  { id: 8453, key: 'base', name: 'Base', blockTimeMs: 2_000 },
] as const;

export type SupportedChain = (typeof supportedChains)[number];
export type ChainKey = SupportedChain['key'];
export type Severity = 'informational' | 'low' | 'medium' | 'high' | 'critical';

export interface AlertEvidence {
  readonly chainId: SupportedChain['id'];
  readonly transactionHash?: `0x${string}`;
  readonly blockNumber: bigint;
  readonly contractAddress: `0x${string}`;
  readonly attributes: Readonly<Record<string, string | number | boolean>>;
}

export interface SecurityAlert {
  readonly id: string;
  readonly schemaVersion: '1.0.0';
  readonly ruleId: `DS-${string}`;
  readonly severity: Severity;
  readonly title: string;
  readonly summary: string;
  readonly walletAddress: `0x${string}`;
  readonly evidence: AlertEvidence;
  readonly detectedAt: string;
}

export function chainById(chainId: number): SupportedChain | undefined {
  return supportedChains.find((chain) => chain.id === chainId);
}
