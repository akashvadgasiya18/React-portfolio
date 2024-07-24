import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact container section" id="contact">
        <h2 className="section__title">Get In Touch</h2>

        <div className="contact__container grid">
          <div className="contact__info">
            <h3 className="conatct__title">let's talk about everything!</h3>
            <p className="contact__details">
              Don't likes a form? Send me an email.{" "}
            </p>
          </div>

          <form action="" className="contact__form">
            <div className="contact__form-grp">
              <div className="contact__form-div">
                <input
                  type="text"
                  className="contact__form-input"
                  placeholder="Enter your Name"
                />
              </div>

              <div className="contact__form-div">
                <input
                  type="email"
                  className="contact__form-input"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Subject..."
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="write your message.."
              ></textarea>
            </div>
            <button className="btn" style={{ marginLeft: "1rem" }}>
              Send Message{" "}
              <i
                className="icon-paper-plane"
                style={{
                  marginLeft: "8px",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              ></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
