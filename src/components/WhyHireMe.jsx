import ScrambleText from "./ScrambleText";

const reasons = [
  {
    title: "Production-Ready Code",
    description:
      "Every project ships with tests — over 1,400 unit and integration tests written across professional roles.",
  },
  {
    title: "Full Stack Ownership",
    description:
      "Comfortable across the whole stack — from Angular/React frontends to REST APIs and cloud infrastructure.",
  },
  {
    title: "Cost-Conscious Engineering",
    description:
      "Reduced AWS infrastructure costs by ~15% through smarter serverless deployment management.",
  },
  {
    title: "Fast Learner, Proven Results",
    description:
      "Completed a Software Engineering degree with a 4.0 GPA while working full time in the field.",
  },
];

function WhyHireMe() {
  return (
    <section id="why-hire-me" className="section why-hire-me">
      <span className="section-eyebrow">Why Hire Me</span>
      <h2>
        <ScrambleText text="What You're Getting" speed={50} />
      </h2>
      <div className="why-grid">
        {reasons.map((reason, i) => (
          <div key={i} className="why-item">
            <span className="why-check">✓</span>
            <div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyHireMe;
