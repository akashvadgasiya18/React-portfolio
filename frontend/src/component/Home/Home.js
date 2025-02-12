import React from "react";
import "./Home.css";
import img1 from "../../assets/my_avtar.png";
import Socialicon from "./HomeSocial";
import ScrollDown from "./ScrollDown";
import TypeWrite from "./TypeWrite";
import BacktoTop from "./BacktoTop";

const Home = () => {
  return (
    <>
      <section className="home container" id="home">
        <div className="intro">
          <img src={img1} alt="" className="home_img" />
          <h1 className="home__name">I am Akash Vadgasiya</h1>
          {/* <span className="home__education">Full-Stack Web Developer</span> */}
          <TypeWrite />
          <Socialicon />

          {/* <a href="#contact" className="btn">
            Hire Me
          </a> */}

          <ScrollDown />
        </div>
        <BacktoTop />
        {/* <Shapes /> */}
      </section>
    </>
  );
};

export default Home;
