import React from "react";
import "./Skill.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <>
      <section className="skills container section" id="skill">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical level</span>

        <div className="skills__container grid">
          <Frontend />
          <Backend />
        </div>
      </section>
    </>
  );
};

export default Skills;
