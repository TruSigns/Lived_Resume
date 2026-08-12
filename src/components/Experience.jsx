import ScrambleText from "./ScrambleText";

const experience = [
  {
    title: "Full Stack Software Engineer",
    company: "Genesys | Durham, NC",
    dates: "Oct 2021 – June 2026",
    points: [
      "Developed and maintained full stack applications using Angular, TypeScript, PHP, AWS, and serverless technologies.",
      "Redesigned an Angular application to improve usability and the overall user experience.",
      "Developed and maintained REST APIs and backend services.",
      "Optimized database schemas and SQL queries to improve application performance.",
      "Created more than 1,000 unit and integration tests using Jest and Jasmine.",
      "Managed more than 12 Serverless Framework deployments and helped reduce AWS costs by approximately 15%.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Talent Tech South | Raleigh, NC",
    dates: "Apr 2021 – Sep 2021",
    points: [
      "Developed three frontend applications using React and JavaScript.",
      "Built and maintained MySQL databases supporting application functionality.",
      "Created more than 400 unit tests using Jest and Jasmine.",
      "Assisted with DevOps, deployment workflows, debugging, and application maintenance.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>
        <ScrambleText text="Experience" speed={50} />
      </h2>
      <div className="experience-list">
        {experience.map((job, i) => (
          <div
            key={i}
            className="experience-item shine"
            style={{ "--shine-delay": `${i * 0.8}s` }}
          >
            <div className="experience-header">
              <h3>
                <ScrambleText text={job.title} speed={40} />
              </h3>
              <span className="experience-dates">{job.dates}</span>
            </div>
            <p className="experience-company">{job.company}</p>
            <ul>
              {job.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
