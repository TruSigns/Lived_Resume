import ScrambleText from "./ScrambleText";

const highlights = [
  {
    icon: "⚡",
    title: "Full Stack Development",
    description:
      "Building complete applications end-to-end with Angular, React, TypeScript, and PHP.",
    link: "View Experience",
    href: "#experience",
  },
  {
    icon: "🔌",
    title: "REST API Design",
    description:
      "Designing and maintaining backend services and APIs that power production applications.",
    link: "View Experience",
    href: "#experience",
  },
  {
    icon: "🧪",
    title: "Automated Testing",
    description:
      "Writing thorough unit and integration test suites using Jest and Jasmine to keep code reliable.",
    link: "View Skills",
    href: "#skills",
  },
  {
    icon: "☁️",
    title: "Cloud & Serverless",
    description:
      "Managing AWS serverless deployments and optimizing infrastructure to reduce cost and improve performance.",
    link: "View Skills",
    href: "#skills",
  },
];

function Highlights() {
  return (
    <section className="highlights">
      <span className="section-eyebrow">What I Bring</span>
      <h2 className="highlights-heading">
        <ScrambleText text="Core Strengths" speed={50} />
      </h2>
      <div className="highlights-grid">
        {highlights.map((item, i) => (
          <div key={i} className="highlight-card">
            <div className="highlight-icon-box">
              <span className="highlight-icon">{item.icon}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.href} className="highlight-link">
              {item.link}
            </a>

            <div className="highlight-scene">
              <div className="highlight-moon"></div>
              <svg
                className="highlight-trees"
                viewBox="0 0 300 80"
                preserveAspectRatio="none"
              >
                <polygon points="10,80 30,30 50,80" fill="#0a1a2f" />
                <polygon points="45,80 65,20 85,80" fill="#0d2038" />
                <polygon points="80,80 100,35 120,80" fill="#0a1a2f" />
                <polygon points="150,80 175,15 200,80" fill="#0d2038" />
                <polygon points="190,80 210,32 230,80" fill="#0a1a2f" />
                <polygon points="225,80 250,22 275,80" fill="#0d2038" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
