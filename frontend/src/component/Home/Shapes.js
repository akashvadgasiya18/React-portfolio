import React from "react";
import i1 from "../../assets/plus.png";
import i2 from "../../assets/round.png";
import i3 from "../../assets/star.png";
import i4 from "../../assets/triangle.png";
import i5 from "../../assets/cross.webp";

const Shapes = () => {
  return (
    <>
      <div className="shapes">
        <img src={i1} alt="" className="shap s1"/>
        <img src={i2} alt="" className="shap s2"/>
        <img src={i3} alt="" className="shap s3"/>
        <img src={i4} alt="" className="shap s4"/>
        <img src={i5} alt="" className="shap s5"/>
        <img src={i1} alt="" className="shap s6"/>
        <img src={i2} alt="" className="shap s7"/>
        <img src={i3} alt="" className="shap s8"/>
        <img src={i4} alt="" className="shap s9"/>
        <img src={i5} alt="" className="shap s10"/>
      </div>
    </>
  );
};

export default Shapes;
