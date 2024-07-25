import React, { useState, useEffect } from "react";

const BacktoTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTop && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "20px",
            height: "40px",
            backgroundColor: "black",
            color: "white",
            width: "40px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "10px",
          }}
          onClick={scrollUp}
          className="back-top"
        >
          <i className="icon-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default BacktoTop;
