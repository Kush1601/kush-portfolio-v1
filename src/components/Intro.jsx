import React from "react";
import "../styles/Intro.css";
import { TypeAnimation } from "react-type-animation";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FadeInSection from "./FadeInSection";
import AsciiPortrait from "./AsciiPortrait";

const Intro = () => {
  return (
    <div id="intro">
      <div className="intro-simulation">
        <AsciiPortrait />
      </div>
      <div className="intro-block">
        <div className="intro-eyebrow">software engineer · builder · anime · va</div>
        <div className="intro-title">
          {"hi, "}
          <span className="intro-name">
            <TypeAnimation
              sequence={["kush"]}
              wrapper="span"
              cursor={false}
              repeat={0}
            />
          </span>
          {" here."}
          <span className="intro-cursor">|</span>
        </div>
        <FadeInSection>
          <div className="intro-desc">
            Software &amp; AI engineer and CS grad, based in Washington, DC. I
            build clinical-AI tools and full-stack apps — from child-safety
            pipelines to sub-5s emergency alerting — and I’m probably watching
            anime when I’m not shipping.
          </div>
          <a href="mailto:dudhiakush16@gmail.com" className="intro-contact">
            <EmailRoundedIcon />
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Intro;
