import React, { useEffect } from "react";
import "./About.css";
import about_img from "../../assets/about.gif";
import play_icon from "../../assets/play-icon.gif";

const About = ({ setPlayState }) => {
  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingUp = scrollTop < lastScrollTop;

      const aboutRight = document.querySelector('.about-right');
      if (aboutRight) {
        aboutRight.style.visibility = isScrollingUp ? 'visible' : 'hidden';
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT VIKSIT-BHARAT</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use. You can even remove all our links if you want to.</p>
        <p>Looking for more templates? Just browse through all our viksit Bharat Foundation and find what you’re looking for. But if you don’t find any website template you can use, you can try our viksit Bharat Foundation service and tell us all about it. Maybe you’re looking for something different, something special. And we love the challenge of doing something different and something special.</p>
        <p>If you’re experiencing issues and concerns about this website template, join the discussion on our forum and meet other people in the community who share the same interests with you.</p>
      </div>
    </div>
  );
};

export default About;
