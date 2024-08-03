import React from "react";
// import Typewriter from "typewriter-effect";
import { useTypewriter, Cursor } from "react-simple-typewriter";
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
          {/* <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<span class="text-1">Full-Stack Developer </span>'
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString('<span class="text-2"> Frontend Developer </span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-3"> Backend Developer </span>')
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          /> */}
        </div>
      </div>
    </>
  );
};

export default TypeWrite;
