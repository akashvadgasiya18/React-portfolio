import React from "react";
import "./Service.css";
import i1 from "../../assets/front.webp";
import i2 from "../../assets/bck.png";
import i3 from "../../assets/Design.png";

const Data = [
  {
    id: 1,
    image: i1,
    title: "Frontend Development",
    desc: "Developing and maintaining the user interface.Implementing design on mobile websites. Managing software workflow.",
  },
  {
    id: 2,
    image: i2,
    title: "Backend Development",
    desc: "It involves creating APIs, managing database interactions, and implementing server-side logic that allows the front-end to display dynamic content.",
  },
  {
    id: 3,
    image: i3,
    title: "Web Design",
    desc: "Design & build a custom website. A website needs to be easy to navigate, visually appealing, and fast in order to hold a visitor's attention and convert leads. ...",
  },
];

const Service = () => {
  return (
    <>
      <section className="service container section" id="service">
        <h2 className="section__title">Service</h2>
        <div className="service__container grid">
          {Data.map(({ id, image, title, desc }) => {
            return (
              <div className="service__card" key={id}>
                <img
                  src={image}
                  alt=""
                  className="service__img"
                  style={{ height: "100px", width: "100px" }}
                />
                <h3 className="service__title">{title}</h3>
                <p className="service__desc">{desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Service;
