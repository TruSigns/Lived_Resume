function Header() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="header-inner">
        <span className="logo">Maurice Ruffin</span>
        <nav>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("skills")}>Skills</button>
          <button onClick={() => scrollTo("experience")}>Experience</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
