import "./BaseHeader.scss";

function BaseHeader() {
  return (
    <header className="base-header">
      <div className="base-header__meta">
        <h1>Feed History</h1>
        <h2>LASK vs. RAPID</h2>
        <h3>15/09/2020 12:00 UTC</h3>
        <h4>(sr:match:123456)</h4>
      </div>
    </header>
  );
}

export default BaseHeader;
