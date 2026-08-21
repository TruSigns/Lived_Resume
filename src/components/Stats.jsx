const stats = [
  { number: "4+", label: "Years of Experience" },
  { number: "1,400+", label: "Tests Written" },
  { number: "12+", label: "Serverless Deployments" },
  { number: "15%", label: "AWS Cost Reduction" },
];

function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
