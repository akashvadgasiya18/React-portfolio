import React from "react";

const Frontend = () => {
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Frontend Developer</h3>
        <div className="skills__box">
          <div className="skills__grp">
            <div className="skills__data">
              <i className="icon-check"></i>
              <div>
                <h3 className="skills__name">HTML & CSS</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="icon-check"></i>
              <div>
                <h3 className="skills__name">C & C++</h3>
                <span className="skills__level">intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="icon-check"></i>
              <div>
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__level">intermediate</span>
              </div>
            </div>
          </div>

          <div className="skills__grp">
            <div className="skills__data">
              <i className="icon-check"></i>
              <div>
                <h3 className="skills__name">React js</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="icon-check"></i>
              <div>
                <h3 className="skills__name">Bootstrap</h3>
                <span className="skills__level">intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="icon-check"></i>
              <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frontend;
