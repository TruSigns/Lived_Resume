import ScrambleText from "./ScrambleText";

const skills = [
  { name: "JavaScript", level: 5 },
  { name: "TypeScript", level: 5 },
  { name: "Python", level: 5 },
  { name: "Java", level: 3 },
  { name: "React", level: 5 },
  { name: "Angular", level: 3 },
  { name: "AWS", level: 5 },
  { name: "REST APIs", level: 5 },
  { name: "MySQL", level: 4 },
  { name: "DynamoDB", level: 3 },
  { name: "Jest", level: 4 },
  { name: "Git", level: 5 },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <span className="section-eyebrow">Toolbox</span>
      <h2>
        <ScrambleText text="Skills" speed={50} />
      </h2>

      <div className="skills-grid">
        {skills.map((skill) => {
          const isMaxed = skill.level === 5;
          return (
            <div
              key={skill.name}
              className={`skill-pill ${isMaxed ? "maxed" : ""}`}
            >
              <div className="skill-pill-header">
                <span className="skill-name">
                  {skill.name}
                  {isMaxed && <span className="maxed-star">★</span>}
                </span>
                <span className="skill-level-text">{skill.level}/5</span>
              </div>
              <div className="skill-bar">
                {Array.from({ length: 5 }, (_, i) => (
                  <div
                    key={i}
                    className={`skill-segment ${i < skill.level ? "filled" : ""} ${isMaxed ? "maxed" : ""}`}
                    style={{ transitionDelay: `${i * 0.08}s` }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
