import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Work</h2>
      <div className="work__container grid">
        {items.map((ele) => {
          const { id, image, title, desc } = ele;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img
                  src={image}
                  alt=""
                  className="work__img"
                  
                />
                <div className="work__mask"></div>
              </div>
              <h3 className="work__title">{title}</h3>
              <p className="work__desc">{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
