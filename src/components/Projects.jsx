import { useState, useEffect } from "react";

const GITHUB_USERNAME = "TruSigns";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repos");
        return res.json();
      })
      .then((data) => {
        const filtered = data
          .filter((repo) => !repo.fork) // hide forked repos
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6); // show top 6
        setRepos(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      {loading && <p>Loading projects...</p>}
      {error && <p>Couldn't load projects right now.</p>}

      <div className="projects-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="project-card">
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description provided."}</p>
            <div className="project-meta">
              {repo.language && (
                <span className="project-lang">{repo.language}</span>
              )}
              {repo.stargazers_count > 0 && (
                <span className="project-stars">★ {repo.stargazers_count}</span>
              )}
            </div>
            <div className="project-links">
              {repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noreferrer">
                  Live Site
                </a>
              )}
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
