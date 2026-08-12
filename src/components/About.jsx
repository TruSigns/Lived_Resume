import ScrambleText from "./ScrambleText";

function About() {
  return (
    <section id="about" className="section">
      <h2>
        <ScrambleText text="About Me" speed={50} />
      </h2>
      <p>
        <ScrambleText
          text="I am a software engineer with over four years of professional experience
        in full stack development and a recent degree in Software Engineering. I
        enjoy solving problems, learning new technologies, and continuing to
        improve as a developer. I am looking for a role where I can contribute
        my current experience while learning from a strong engineering team and
        taking on new challenges."
          speed={50}
        />
      </p>
    </section>
  );
}

export default About;
