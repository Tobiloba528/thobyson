import React from "react";
import About from "./about";
import Contact from "./contact";
import NavBar from "./navBar";
import Footer from "./footer";
import { Fade } from "react-reveal";


const Section = () => {
  return (
    <Fade left>
      <div>
        <NavBar />
        <section>
          <About />
          <Contact />
        </section>
        <Footer />
      </div>
    </Fade>
  );
};

export default Section;
