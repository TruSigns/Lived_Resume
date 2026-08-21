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
  return (
    <div className="app">
      <Stars />
      <Header />
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
