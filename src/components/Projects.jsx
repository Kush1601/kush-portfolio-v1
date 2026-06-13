import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import { Carousel } from "react-bootstrap";
import ExternalLinks from "./ExternalLinks";

const spotlightProjects = {
  MindSafe: {
    title: "MindSafe",
    desc: "An AI pipeline that scores YouTube videos for kids' developmental safety.",
    techStack: "PYTHON · FHIR R4 · LOINC · SCIKIT-LEARN · FLASK · CHROME EXTENSION",
    link: "https://github.com/Kush1601/MindSafe",
    open: "http://mindsafe.duckdns.org:5000",
    image: "/assets/mindsafe.png",
  },
};

const projects = {
  SurgeAid: {
    desc: "Emergency alerts that reach volunteers' phones in under 5s — Claude triages incident severity, ntfy delivers cross-platform push.",
    techStack: "Next.js 16 · TypeScript · Supabase Realtime · Claude API · ntfy",
    link: "https://github.com/Kush1601/SurgeAid",
    open: "https://surge-aid.vercel.app",
  },
  YelpCamp: {
    desc: "Campground discovery app with PostGIS radius search and Claude-powered semantic search — natural-language queries resolve to sub-30ms results.",
    techStack: "Next.js 15 · TypeScript · Drizzle ORM · PostGIS · Clerk · Claude API",
    link: "https://github.com/Kush1601/YelpCamp",
    open: "https://yelpcamp-topaz.vercel.app",
  },
  LIA: {
    desc: "Backend API and data services for LIA, built in TypeScript and deployed on Vercel.",
    techStack: "TypeScript · Node.js · Express · REST API · Vercel",
    link: "https://github.com/Kush1601/DAIL_Backend",
    open: "https://dail-backend-zeta.vercel.app",
  },
};

const Projects = () => {
  return (
    <div id="projects">
      <div className="section-header ">
        <span className="section-title" data-num="03">software</span>
        <a
          href="https://github.com/Kush1601"
          className="explore-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all projects
        </a>
      </div>
      <div className="spotlight-projects-desktop">
        <Carousel interval={null}>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <Carousel.Caption>
                <h3>{spotlightProjects[key]["title"]}</h3>
                <div>
                  {spotlightProjects[key]["desc"]}
                  <div className="techStack">
                    {spotlightProjects[key]["techStack"]}
                  </div>
                </div>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                  openLink={spotlightProjects[key]["open"]}
                />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="spotlight-projects-mobile">
        {Object.keys(spotlightProjects).map((key, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <div className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                </div>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                  openLink={spotlightProjects[key]["open"]}
                />
              </div>
              <a
                href={
                  spotlightProjects[key]["open"] || spotlightProjects[key]["link"]
                }
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <div className="card-title">{spotlightProjects[key]["title"]}</div>
                <div className="spotlight-mobile-image">
                  <img src={spotlightProjects[key]["image"]} alt={key} />
                </div>
              </a>
              <div className="card-desc">{spotlightProjects[key]["desc"]}</div>
              <div className="card-tech">{spotlightProjects[key]["techStack"]}</div>
            </div>
          </FadeInSection>
        ))}
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                  </div>
                  <ExternalLinks
                    githubLink={projects[key]["link"]}
                    openLink={projects[key]["open"]}
                  />
                </div>

                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key]["desc"]}</div>
                <div className="card-tech">{projects[key]["techStack"]}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
