import React from "react";
import "./App.css";
import Home from "./component/Home/Home";
import Sidebar from "./component/Sidebar/Sidebar";
import About from "./component/About/About";
import Service from "./component/Service/Service";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/Contact";
import Education from "./component/Education/Education";
const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Service />
        <Education />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};

export default App;
