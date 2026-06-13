import React from "react";
import "../styles/GalleryPage.css";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const GalleryPage = () => {
  const allArt = [
    { src: "/assets/gallery/vessel.png", title: "the vessel" },
    { src: "/assets/gallery/kaneki.png", title: "kaneki" },
    { src: "/assets/gallery/niagara.png", title: "niagara" },
    { src: "/assets/gallery/lanterns.png", title: "lanterns" },
    { src: "/assets/gallery/old_town.png", title: "old town" },
    { src: "/assets/gallery/deku.png", title: "deku" },
    { src: "/assets/gallery/naughty_waffle.png", title: "naughty waffle" },
    { src: "/assets/gallery/paneer_pizza.png", title: "paneer pizza" }
  ];

  return (
    <div className="art-gallery-page">
      <div className="section-header">
        <Link to="/" className="back-button">
          <ArrowBackRoundedIcon />
        </Link>
        <span className="section-title">gallery</span>
      </div>
      <FadeInSection delay="200ms">
        <div className="gallery-description">
          Things I save — anime stills, screenshots, and random pictures that stuck with me.
        </div>
      </FadeInSection>
      <div className="gallery-grid">
        {allArt.map((art, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <div className="gallery-card">
              <img src={art.src} alt={art.title} className="gallery-image" />
              <div className="art-card-label">{art.title}</div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
