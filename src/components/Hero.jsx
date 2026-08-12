import ScrambleText from "./ScrambleText";

function Hero() {
  return (
    <section className="hero">
      <h1>
        <ScrambleText text="Maurice Stepfan Ruffin" />
      </h1>
      <h2>
        <ScrambleText text="Full-Stack Web Developer" speed={20} />
      </h2>
      <p>
        Software Engineer with 4+ years of professional experience building full
        stack web applications using Angular, React, TypeScript, PHP, AWS, and
        serverless technologies. Experienced in frontend development, backend
        APIs, automated testing, and cloud infrastructure. Recently earned a
        bachelor's degree in software engineering with a 4.0 GPA.
      </p>
      <div className="hero-buttons">
        <a href="/resume.pdf" download className="btn btn-primary">
          Download Resume
        </a>
        <a href="#contact" className="btn btn-secondary">
          Get In Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;
