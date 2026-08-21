import ScrambleText from "./ScrambleText";

const facts = [
  { label: "Based In", value: "Durham, NC" },
  { label: "Experience", value: "4+ Years" },
  { label: "Degree", value: "B.S. Software Engineering" },
  { label: "GPA", value: "4.0" },
];

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-grid">
        <div className="about-text">
          <span className="section-eyebrow">Get To Know Me</span>
          <h2>
            <ScrambleText text="About Me" speed={50} />
          </h2>
          <p>
            I am a software engineer with over four years of professional
            experience in full stack development and a recent degree in Software
            Engineering. I enjoy solving problems, learning new technologies,
            and continuing to improve as a developer. I am looking for a role
            where I can contribute my current experience while learning from a
            strong engineering team and taking on new challenges.
          </p>
        </div>

        <div className="about-facts">
          {facts.map((fact, i) => (
            <div key={i} className="about-fact">
              <span className="about-fact-label">{fact.label}</span>
              <span className="about-fact-value">{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
