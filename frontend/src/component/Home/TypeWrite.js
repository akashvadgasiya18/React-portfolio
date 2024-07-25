import React from "react";
import Typewriter from "typewriter-effect";
import "./Type.css"

const TypeWrite = () => {
  return (
    <>
      <div className="main-container">
        <div className="type-writter-section">

          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('<span class="text-1">Full-Stack Developer</span>')
                .pauseFor(1000)
                .deleteAll()
                .typeString('<span class="text-2">Frontend Developer</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-3">Backend Developer</span>')
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TypeWrite;
