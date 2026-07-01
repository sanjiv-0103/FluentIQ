function Header({ setActivePage }) {
  return (
    <header className="header">
      <div>
        <h1 className="logo">FluentIQ</h1>
        <p className="subtitle">AI Communication Coach</p>
      </div>

      <button
        className="historyBtn"
        onClick={() => setActivePage("history")}
      >
        History
      </button>
    </header>
  );
}

export default Header;