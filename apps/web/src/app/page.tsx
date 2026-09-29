const positions = [
  { asset: 'ETH', chain: 'Ethereum', value: '$12,840.41', change: '+2.4%' },
  { asset: 'USDC', chain: 'Base', value: '$7,210.00', change: '+0.0%' },
  { asset: 'AAVE', chain: 'Ethereum', value: '$3,476.82', change: '-1.2%' },
];

const incidents = [
  {
    severity: 'critical',
    title: 'Unlimited approval to unknown spender',
    detail: 'USDC · Ethereum · 0x71f3…91c2',
    time: '2 min ago',
  },
  {
    severity: 'high',
    title: 'Global NFT operator remains active',
    detail: 'Vault Pass #1842 · Base · 0xa6d1…4e08',
    time: '18 min ago',
  },
  {
    severity: 'low',
    title: 'Portfolio scan completed',
    detail: '2 chains · 31 assets · 46 permissions',
    time: '1 hr ago',
  },
];

function Mark() {
  return (
    <svg aria-hidden="true" className="mark" viewBox="0 0 38 38">
      <path d="M19 3 33 8v9c0 9-5.8 15.1-14 18C10.8 32.1 5 26 5 17V8l14-5Z" />
      <path d="m12 19 4.2 4.2L27 12.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#overview" aria-label="DeFi Sentinel home">
          <Mark />
          <span>DeFi Sentinel</span>
        </a>
        <nav aria-label="Primary navigation">
          <a className="active" href="#overview">
            Overview
          </a>
          <a href="#portfolio">Portfolio</a>
          <a href="#incidents">Incidents</a>
          <a href="#integrations">Integrations</a>
        </nav>
        <button className="wallet" type="button">
          <span className="status-dot" />
          0x8a21…f09b
        </button>
      </header>

      <section className="hero" id="overview">
        <div>
          <p className="eyebrow">
            <span /> WATCH-ONLY SECURITY CONSOLE
          </p>
          <h1>
            Your portfolio.
            <br />
            <em>Under watch.</em>
          </h1>
          <p className="lede">
            Track assets across chains and surface dangerous permissions before
            they become incidents.
          </p>
        </div>
        <div className="scan-card">
          <div className="radar">
            <span />
            <span />
            <span />
          </div>
          <div>
            <p>THREAT MONITOR</p>
            <strong>Active</strong>
            <small>Last block · 22,104,782</small>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Portfolio summary">
        <article>
          <span>NET WORTH</span>
          <strong>$23,527.23</strong>
          <small className="positive">↗ 1.8% today</small>
        </article>
        <article>
          <span>ACTIVE CHAINS</span>
          <strong>2</strong>
          <small>Ethereum · Base</small>
        </article>
        <article>
          <span>OPEN APPROVALS</span>
          <strong>46</strong>
          <small className="warning">3 need review</small>
        </article>
        <article>
          <span>SECURITY SCORE</span>
          <strong>
            82<span className="muted">/100</span>
          </strong>
          <small className="positive">Good posture</small>
        </article>
      </section>

      <div className="content-grid">
        <section className="panel" id="portfolio">
          <div className="panel-heading">
            <div>
              <p>ASSET EXPOSURE</p>
              <h2>Portfolio</h2>
            </div>
            <button type="button">View all assets ↗</button>
          </div>
          <div className="table" role="table" aria-label="Portfolio positions">
            <div className="table-row table-head" role="row">
              <span>ASSET</span>
              <span>CHAIN</span>
              <span>VALUE</span>
              <span>24H</span>
            </div>
            {positions.map((position) => (
              <div className="table-row" role="row" key={position.asset}>
                <span className="asset">
                  <b>{position.asset.slice(0, 1)}</b>
                  {position.asset}
                </span>
                <span>{position.chain}</span>
                <strong>{position.value}</strong>
                <span
                  className={
                    position.change.startsWith('-') ? 'negative' : 'positive'
                  }
                >
                  {position.change}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel incidents" id="incidents">
          <div className="panel-heading">
            <div>
              <p>SECURITY FEED</p>
              <h2>Recent incidents</h2>
            </div>
            <span className="live">LIVE</span>
          </div>
          <div className="incident-list">
            {incidents.map((incident) => (
              <article key={incident.title}>
                <span className={`severity ${incident.severity}`} />
                <div>
                  <strong>{incident.title}</strong>
                  <p>{incident.detail}</p>
                  <small>{incident.time}</small>
                </div>
                <button type="button" aria-label={`Review ${incident.title}`}>
                  →
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer id="integrations">
        <span>
          <Mark /> MONITORING ETHEREUM + BASE
        </span>
        <p>Read-only by design · No private keys · Block cursor healthy</p>
      </footer>
    </main>
  );
}
