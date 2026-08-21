import { useState, useEffect } from "react";
import Stars from "./components/Stars";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Highlights from "./components/Highlights";
import ScrollProgress from "./components/ScrollProgress";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import WhyHireMe from "./components/WhyHireMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ClosingCTA from "./components/ClosingCTA";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`app ${theme}`}>
      {theme === "dark" && <Stars />}
      <Header theme={theme} toggleTheme={toggleTheme} />
      <ScrollProgress />
      <main>
        <Hero />
        <Stats />
        <Highlights />
        <About />
        <Skills />
        <Experience />
        <WhyHireMe />
        <Projects />
        <Contact />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
