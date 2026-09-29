import { supportedChains } from '@defi-sentinel/domain';

export function watcherBanner(): string {
  const chainNames = supportedChains.map((chain) => chain.name).join(', ');
  return `DeFi Sentinel watcher ready for ${chainNames}`;
}

if (process.env['NODE_ENV'] !== 'test') {
  console.info(watcherBanner());
}
