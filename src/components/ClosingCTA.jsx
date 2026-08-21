import ScrambleText from "./ScrambleText";

function ClosingCTA() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="closing-cta">
      <div className="closing-cta-content">
        <h2>
          <ScrambleText text="Let's Build Something Great" speed={50} />
        </h2>
        <p>
          Looking for a full-stack engineer who ships reliable, tested code.
          Let's talk.
        </p>
        <div className="closing-cta-buttons">
          <button onClick={scrollToContact} className="btn btn-primary">
            Get In Touch
          </button>
          <a href="/resume.pdf" download className="btn btn-secondary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default ClosingCTA;
