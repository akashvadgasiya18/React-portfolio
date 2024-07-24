import React from "react";
import "./About.css";
import i1 from "../../assets/square.png";

const About = () => {
  return (
    <>
      <section className="about container section" id="about">
        <h2 className="section__title">About Me</h2>
        <div className="about__container grid">
          <img src={i1} alt="" className="about__img" />

          <div className="about__data grid">
            <div className="about__info">
              <p className="about__desc">
                I am Akash vadgasiya, Full Stack web Developer from Ahmedabad. I
                have rich experience in website design and building and
                customization, also I am a good in Backend technology like Node
                Js,Express Js etc.
              </p>
              <a href="" className="btn">
                <i
                  className="icon-cloud-download"
                  style={{ marginRight: "10px" }}
                ></i>
                Download CV
              </a>
            </div>

            <div className="about__skill grid">
              <div className="skill__data">
                <div className="skill_titles">
                  <h3 className="skill__name">Frontend Development</h3>
                  <span className="skill__number">90%</span>
                </div>

                <div className="skill__bar">
                  <span className="skill__percentage development"></span>
                </div>
              </div>

              <div className="skill__data">
                <div className="skill_titles">
                  <h3 className="skill__name">Backend Development</h3>
                  <span className="skill__number">40%</span>
                </div>

                <div className="skill__bar">
                  <span className="skill__percentage backend"></span>
                </div>
              </div>

              <div className="skill__data">
                <div className="skill_titles">
                  <h3 className="skill__name">Web Design</h3>
                  <span className="skill__number">70%</span>
                </div>

                <div className="skill__bar">
                  <span className="skill__percentage design"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
