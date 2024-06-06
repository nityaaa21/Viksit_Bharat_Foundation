import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container"> 
  
      <div className="hero-text">
        <h1>We Ensure better Bharat for a better foundation</h1>
        <p>
        A concise statement outlining the foundation's overarching goals and aspirations. Impact Highlights: Visual and textual representations of the foundation's significant achievements and impact in various sectors. Call to Action: Encouragement for visitors to explore further, get involved, or donate to support the foundation's initiatives. ' viksitBharat.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
