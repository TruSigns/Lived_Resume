import ScrambleText from "./ScrambleText";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="hero-badge-dot"></span>
            Open to opportunities
          </span>
          <h1>
            <ScrambleText text="Maurice Stepfan Ruffin" />
          </h1>
          <h2>
            <ScrambleText text="Full-Stack Web Developer" speed={20} />
          </h2>
          <p>
            Software Engineer with 4+ years of professional experience building
            full stack web applications using Angular, React, TypeScript, PHP,
            AWS, and serverless technologies. Experienced in frontend
            development, backend APIs, automated testing, and cloud
            infrastructure. Recently earned a bachelor's degree in software
            engineering with a 4.0 GPA.
          </p>
          <div className="hero-buttons">
            <a href="/resume.pdf" download className="btn btn-primary">
              Download Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-window">
            <div className="code-window-header">
              <span className="code-dot code-dot-red"></span>
              <span className="code-dot code-dot-yellow"></span>
              <span className="code-dot code-dot-green"></span>
              <span className="code-window-title">developer.js</span>
            </div>
            <div className="code-window-body">
              <div className="code-line">
                <span className="code-keyword">const</span>{" "}
                <span className="code-var">developer</span> = {"{"}
              </div>
              <div className="code-line code-indent">
                <span className="code-prop">name</span>:{" "}
                <span className="code-string">'Maurice Ruffin'</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-prop">role</span>:{" "}
                <span className="code-string">'Full-Stack Engineer'</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-prop">experience</span>:{" "}
                <span className="code-number">4</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-prop">stack</span>: [
              </div>
              <div className="code-line code-indent2">
                <span className="code-string">'React'</span>,{" "}
                <span className="code-string">'TypeScript'</span>,
              </div>
              <div className="code-line code-indent2">
                <span className="code-string">'AWS'</span>,{" "}
                <span className="code-string">'Angular'</span>
              </div>
              <div className="code-line code-indent">],</div>
              <div className="code-line code-indent">
                <span className="code-prop">available</span>:{" "}
                <span className="code-bool">true</span>
              </div>
              <div className="code-line">{"}"}</div>
              <div className="code-cursor"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
