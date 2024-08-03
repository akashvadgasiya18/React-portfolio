import React from "react";
// import Typewriter from "typewriter-effect";
import { useTypewriter } from "react-simple-typewriter";
import "./Type.css";

const TypeWrite = () => {
  const [typeEffect] = useTypewriter({
    words: ["Full-Stack Developer", "Frontend Developer", "Backend Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <>
      <div className="main-container">
        <div className="type-writter-section">
          <span className="text-1">- {typeEffect} -</span>
        </div>
      </div>
    </>
  );
};

export default TypeWrite;
