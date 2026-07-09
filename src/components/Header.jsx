function Header({ onGoHome }) {
  return (
    <header className="header">
      <h1 className="logo" onClick={onGoHome}>
        Portfolio<span>Genie</span>
      </h1>
    </header>
  );
}

export default Header;
