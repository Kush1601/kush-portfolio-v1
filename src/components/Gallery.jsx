import React from "react";
import "../styles/Gallery.css";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";

const Gallery = () => {
  const topArt = [
    { src: "/assets/gallery/vessel.png", title: "the vessel" },
    { src: "/assets/gallery/old_town.png", title: "old town" },
    { src: "/assets/gallery/deku.png", title: "deku" }
  ];

  return (
    <div id="gallery">
      <div className="section-header">
        <span className="section-title" data-num="04">gallery</span>
        <Link to="/gallery" className="explore-link">See all</Link>
      </div>
      <FadeInSection delay="200ms">
        <div className="art-description">
          Things I save — anime stills, screenshots, and random pictures that stuck with me.
        </div>
      </FadeInSection>
      <div className="art-container">
        <div className="art-grid">
          {topArt.map((art, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <div className="art-card">
                <img src={art.src} alt={art.title} className="art-image" />
                <div className="art-card-label">{art.title}</div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
