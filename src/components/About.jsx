import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const one = (
    <p>
      I’m a <b>software engineer</b> and CS grad from{" "}
      <a href="https://www.gwu.edu/"> GWU</a>, drawn to{" "}
      <b>healthcare, AI, and data systems</b>. I like building things that
      actually ship — from clinical-AI pipelines and full-stack apps like{" "}
      <a href="https://github.com/Kush1601/MindSafe"> MindSafe</a> and{" "}
      <a href="https://github.com/Kush1601/SurgeAid"> SurgeAid</a>, to data
      infrastructure and analytics work that makes sense of it all.
    </p>
  );
  const two = (
    <p>
      In my free time, I’m nerdy about new tech, build random side projects, and
      watch way too much anime.
    </p>
  );

  const techStack = [
    "Python",
    "TypeScript",
    "Next.js / React",
    "Node.js",
    "PostgreSQL / PostGIS",
    "SQL · Pandas · dbt",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title" data-num="01">about</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="Kush Dudhia" src={"/assets/me.png"} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
