import React from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";

const Experience = () => {
  return (
    <div id="experience">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title" data-num="02">experience</span>
        </div>
        <JobList />
      </FadeInSection>
    </div>
  );
};

export default Experience;
