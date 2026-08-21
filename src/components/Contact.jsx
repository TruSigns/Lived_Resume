import ScrambleText from "./ScrambleText";

function Contact() {
  return (
    <section id="contact" className="section">
      <span className="section-eyebrow">Let's Talk</span>
      <h2>
        <ScrambleText text="Get In Touch" speed={50} />
      </h2>

      <div className="terminal-panel">
        <div className="terminal-panel-header">
          <span className="code-dot code-dot-red"></span>
          <span className="code-dot code-dot-yellow"></span>
          <span className="code-dot code-dot-green"></span>
          <span className="code-window-title">contact.sh</span>
        </div>
        <div className="terminal-panel-body">
          <p className="terminal-line">
            <span className="terminal-prompt">$</span> whoami
          </p>
          <p className="terminal-output">
            Maurice Ruffin — Full-Stack Web Developer
          </p>
          <p className="terminal-line">
            <span className="terminal-prompt">$</span> contact --list
          </p>
          <div className="contact-links">
            <a href="mailto:[your.email@example.com]">Email</a>
            <a
              href="https://www.linkedin.com/in/maurice-ruffin-877ba6119/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/TruSigns"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
