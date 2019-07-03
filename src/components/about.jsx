import React, { Component }from 'react';
import tobi from "../tobi.JPG";
import { Link } from "react-scroll";

class About extends Component {
  state = { }


  render() { 
    return (
      <div
        className="row"
        style={{
          marginBottom: "150px",
          paddingTop: "150px",
          width: "100%"
        }}
        id="about"
      >
        <div className="col-md-6 col-sx-12 text-center">
          <img
            src={tobi}
            alt="myPicture"
            width="70%"
            height="400px"
            className="rounded-circle"
            style={{ display: "inline", opacity: "0.9" }}
          />
        </div>
        <div
          className="col-md-6 col-sx-12 text-center"
          style={{
            color: "white",
            margin: "30px 0",
            background: "rgb(31, 52, 70",
            paddingBottom: "20px"
          }}
        >
          <h3>Who's this guy?</h3>
          <p style={{ fontSize: "20px", lineHeight: "1.8" }}>
            I'm Omitomo Tobiloba. I'm a passionate front-end developer. I'm
            proficient in building/designing fully responsive and highly mobile
            friendly website. In balancing demanding requirements as a web
            developer, I take steps to fully understand what is expected of
            me, prioritize my tasks and keep an open line of communication
            with the clients.
          </p>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn-floating btn-large pulse"
            style={{ width: "100px", borderRadius: "" }}
          >
            <span style={{ display: "inline" }}> Contact</span>
            <i
              className="fa fa-arrow-circle-down"
              style={{ fontSize: "15px", display: "inline" }}
            />
          </Link>
        </div>
      </div>
    );
  }
}
 
export default About;
