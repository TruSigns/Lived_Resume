import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "why-hire-me", label: "Why Me" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function ScrollProgress() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="scroll-progress">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          className={`scroll-dot ${active === id ? "active" : ""}`}
          onClick={() => scrollTo(id)}
          aria-label={label}
        >
          <span className="scroll-dot-label">{label}</span>
        </button>
      ))}
    </nav>
  );
}

export default ScrollProgress;
