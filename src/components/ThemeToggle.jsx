function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle day/night theme"
    >
      <span className={`theme-icon sun ${theme === "light" ? "active" : ""}`}>
        ☀️
      </span>
      <span className={`theme-toggle-track ${theme}`}>
        <span className="theme-toggle-thumb"></span>
      </span>
      <span className={`theme-icon moon ${theme === "dark" ? "active" : ""}`}>
        🌙
      </span>
    </button>
  );
}

export default ThemeToggle;
